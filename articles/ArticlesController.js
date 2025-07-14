const express = require("express");
const router = express.Router();
// const Category = require("./Category");
// const slugify = require("slugify");

router.get("/admin/articles/new", (req, res) => {
    res.send("Rota para criar um novo Artigo");
    // res.render("admin/categories/new");
});



module.exports = router;

