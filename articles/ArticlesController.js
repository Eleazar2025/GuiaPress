const express = require("express");
const router = express.Router();
const Category = require("../categories/Category");
const Article = require("./Article");
const slugify = require("slugify");

router.get("/admin/articles", (req, res) => {
    Article.findAll({
        include:[{model: Category}]
    }).then(articles => {
        res.render("admin/articles/index", {articles: articles});
    })
});

router.get("/admin/articles/new", (req, res) => {
    // res.send("Rota para criar um novo Artigo");
    Category.findAll().then(categories => {
        res.render("admin/articles/new", {categories: categories});
    })
});

//Salvando o artigo no bd
router.post("/articles/save", (req, res) => {
    var title = req.body.title;
    var body = req.body.body;
    var category = req.body.category;

    Article.create({
        title: title,
        slug: slugify(title),
        body: body,
        categoryId: category //chave estrangeira gerado no bd
    }).then(() => {
        res.redirect("/admin/articles");
    });
});

module.exports = router;

