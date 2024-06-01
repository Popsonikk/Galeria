const Comment = require("../models/comment");
const User= require("../models/user");

const asyncHandler = require("express-async-handler");
const { body, validationResult } = require('express-validator');

exports.comment_list = asyncHandler(async (req, res, next) => {
  const all_comments = await Comment.find({}).populate("user").exec();
 
  res.render("comment_list", { title: "List of all comments:", comment_list: all_comments});
  
});




exports.comment_add_get = asyncHandler(async (req, res, next) => {
  res.render("comment_form", { title: "add comment:"});
});

exports.comment_add_post = [
  body('com').trim().isLength({ min: 2 }).escape().withMessage('Comment too short.'),
  

  asyncHandler(async (req, res, next) => {
      const errors = validationResult(req);

      const comment = new Comment({
          name: req.body.com,
          user:  res.locals.id
          
      });

      
          await comment.save();
          res.redirect('/comments'); 
      })
  
];

