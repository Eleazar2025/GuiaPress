const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");
// const keysController = require("./keys/KeysController");

const Article = require("./articles/Article");
const Category = require("./categories/Category");
// const Keys = require("./keys/Key");

//Carregando a View Engine
app.set('view engine','ejs');

//Configurando o body-parser para trabalharmos com formulários
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Trabalhando com arquivos estáticos
app.use(express.static('public'));

//Conectando com o bd
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso!");
    }).catch((error) => {
        console.log(error);
    })

app.use("/",categoriesController);    
app.use("/",articlesController);
// app.use("/",keysController);


app.get("/", (req, res) => {
    Article.findAll().then(articles => {
        res.render("index", {articles: articles});
    });
})

app.get("/:slug",(req, res) => {
    var slug = req.params.slug;
    Article.findOne({
        where: {
            slug: slug
        }
    }).then(article => {
        if(article != undefined){
            Category.findAll().then(categories => {
                res.render("article", {article: article, categories: categories});
            });
        }else{
            res.redirect("/");
        }
    }).catch( err => {
        res.redirect("/");
    });
})

app.listen(8080, () => {
    console.log("Server at 8080");
})