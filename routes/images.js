var express = require('express');
var router = express.Router();

const image_controller = require("../controllers/imageController");

const authenticate = require('../middleware/authenticate');

// IMAGES GET (/images)
router.get("/", image_controller.image_list);

//IMAGE ADD GET
router.get("/image_add", authenticate, image_controller.image_add_get);
//IMAGE ADD POST
router.post("/image_add", authenticate, image_controller.image_add_post);

router.get("/image_delete", authenticate, image_controller.image_delete_get);
//IMAGE ADD POST
router.post("/image_delete", authenticate, image_controller.image_delete_post);

// IMAGES GET (/images) z AUTH
//router.get("/", authenticate, image_controller.image_list);

module.exports = router;
