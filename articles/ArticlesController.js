const express = require("express");
const router = express.Router();
const Category = require("../categories/Category");
// const slugify = require("slugify");

router.get("/admin/articles/new", (req, res) => {
    // res.send("Rota para criar um novo Artigo");
    Category.findAll().then(categories => {
        res.render("admin/articles/new", {categories: categories});
    })
});

module.exports = router;

