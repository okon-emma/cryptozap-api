const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
 res.send({ status: "success", route: req.route, headers: req.headers });
});

module.exports = router;
