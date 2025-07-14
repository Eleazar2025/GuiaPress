const express = require("express");
const router = express.Router();
// const Category = require("./Category");
// const slugify = require("slugify");

router.get("/admin/keys/new", (req, res) => {
    res.send("Rota para criar novas keys");
    // res.render("admin/categories/new");
});

router.get("/keys", (req, res) => {
    res.send("Rota para criar novas keys 2");
    // res.render("admin/categories/new");
});



module.exports = router;

