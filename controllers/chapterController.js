var Chapter = require('../models/chapter');
var async = require('async');
const { body, validationResult,sanitizeBody } = require('express-validator');

exports.index = function(req, res) {
    async.parallel({
        chapter_count: function(callback) {
            Chapter.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
        },
    }
    , function(err, results) {
        res.json( results );
    });
};

// Display list of all Chapters.
exports.chapter_list = function(req, res, next) {
    Chapter.find({}, 'chapter_name chapter_name_meaning chapter_number chapter_summary chapter_image')
    .exec(function (err, list_chapters) {
      if (err) { return next(err); }
      //Successful, so return
      return res.json(list_chapters);
    });
    
};

// Display detail page for a specific Chapter.
exports.chapter_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: chapter detail: ' + req.params.id);
};

// Display chapter create form on GET.
exports.chapter_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: chapter create GET');
};

// Handle chapter create on post.
exports.chapter_create_post = [
     // Validate fields.
    body('chapter_name').isLength({ min: 1 }).trim().withMessage('Chapter name must be specified.')
        .isAlphanumeric().withMessage('Chapter name has non-alphanumeric characters.'),
    body('chapter_name_meaning').isLength({ min: 1 }).trim().withMessage('Chapter name meaning must be specified.')
        .isAlphanumeric().withMessage('Chapter name meaning  has non-alphanumeric characters.'),
    body('chapter_number').isLength({ min: 1 }).trim().withMessage('Chapter name meaning must be specified.')
        .isAlphanumeric().withMessage('Chapter name meaning  has non-alphanumeric characters.'),
    body('chapter_summary').isLength({ min: 1 }).trim().withMessage('Chapter name meaning must be specified.')
        .isAlphanumeric().withMessage('Chapter name meaning  has non-alphanumeric characters.'),

    // Sanitize fields.
    sanitizeBody('chapter_name').escape(),
    sanitizeBody('chapter_name_meaning').escape(),
    sanitizeBody('chapter_number').escape(),
    sanitizeBody('chapter_summary').escape(),
    

    async (req, res, next) => {
         // Extract the validation errors from a request.
         const errors = validationResult(req);

         if (!errors.isEmpty()) {
             // There are errors. Render form again with sanitized values/errors messages.
            // res.render('author_form', { title: 'Create Author', author: req.body, errors: errors.array() });
            console.log(errors);
             return;
         }
         else {
             // Do the main task here 
             try {
             const newChapter= new Chapter({
                chapter_name: req.body.chapter_name,
                chapter_name_meaning: req.body.chapter_name_meaning,
                chapter_number: req.body.chapter_number,
                chapter_summary: req.body.chapter_summary, 
                chapter_image: req.body.chapter_image
             });
             const chapter = await newChapter.save();
             console.log("Writing to database");
             return res.json(chapter);
            } catch (err) {
                console.log(err.message);
                return res.status(500).send("Server Error");
            }
         }
       res.send('NOT IMPLEMENTED: chapter create post');
    }
];

// Display chapter delete form on GET.
exports.chapter_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: chapter delete GET');
};

// Handle chapter delete on post.
exports.chapter_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: chapter delete post');
};

// Display chapter update form on GET.
exports.chapter_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: chapter update GET');
};

// Handle chapter update on post.
exports.chapter_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: chapter update post');
};