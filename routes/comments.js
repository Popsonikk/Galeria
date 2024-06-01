var express = require('express');
var router = express.Router();

const comment_controller = require("../controllers/commentController");

const authenticate = require('../middleware/authenticate');


router.get("/", comment_controller.comment_list);


router.get("/comment_add", authenticate, comment_controller.comment_add_get);

router.post("/comment_add", authenticate, comment_controller.comment_add_post);


module.exports = router;