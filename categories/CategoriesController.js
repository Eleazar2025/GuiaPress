const express = require("express");
const router = express.Router();
const Category = require("./Category");
const slugify = require("slugify");

router.get("/admin/categories/new", (req, res) => {
    // res.send("Rota para criar uma nova categoria");
    res.render("admin/categories/new");
});

router.post("/categories/save", (req, res) => {
    var title = req.body.title;
    if(title != undefined){
        Category.create({
            title: title,
            slug: slugify(title)
        }).then(() => {
            res.redirect("/admin/categories/new");
        })
    }else{
        res.redirect("/admin/categories/new");
    }
});



//Criando rota para exibir categories 
router.get("/admin/categories", (req, res) => {
    Category.findAll().then(categories => {
        res.render("admin/categories/index.ejs", {
            categories: categories });
    });
});

module.exports = router;

