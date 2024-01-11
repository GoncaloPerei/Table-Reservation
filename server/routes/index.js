var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
    res.render("app", {
        isAuthenticated:req.oidc.isAuthenticated(),
    });
});

module.exports = router;