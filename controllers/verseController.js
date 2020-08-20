var Verse = require('../models/verse');
var async = require('async');
const { body, validationResult,check } = require('express-validator');

// Display list of all verses.
exports.verse_list = function(req, res) {
    res.send('NOT IMPLEMENTED: verse list');
};

// Display detail page for a specific verse.
exports.verse_detail = function(req, res, next) {
    console.log(req.params.id);
    Verse.findById(req.params.id)
    .exec(function (err, verse_details) {
      if (err) { return next(err); }
      //Successful, so return
      console.log(verse_details);
      return res.json(verse_details);
    });
};



// Display verse create form on GET.
exports.verse_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: verse create GET');
};

// Handle verse create on POST.
exports.verse_create_post = [
    // Validate fields.
   body('verse_text').isLength({ min: 1 }).trim().withMessage('Verse text must be specified.'),
       //.isAlphanumeric().withMessage('Verse text has non-alphanumeric characters.'),
   body('verse_text_meaning').isLength({ min: 1 }).trim().withMessage('Verse text meaning must be specified.'),
       //.isAlphanumeric().withMessage('Verse text meaning  has non-alphanumeric characters.'),
   body('verse_number').isLength({ min: 1 }).trim().withMessage('Verse text meaning must be specified.'),
       //.isAlphanumeric().withMessage('Verse text meaning  has non-alphanumeric characters.'),
    body('verse_summary').isLength({ min: 1 }).trim().withMessage('Verse text meaning must be specified.',),
       //.isAlphanumeric().withMessage('Verse text meaning  has non-alphanumeric characters.'),
    body('chapter').isLength({ min: 1 }).trim().withMessage('Verse text meaning must be specified.'),
       //.isAlphanumeric().withMessage('Verse text meaning  has non-alphanumeric characters.'),

   // Sanitize fields.
   check('verse_text').escape(),
   check('verse_text_meaning').escape(),
   check('verse_number').escape(),
   check('verse_summary').escape(),
   check('chapter').escape(),
   

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
            const newVerse= new Verse({
               verse_text: req.body.verse_text,
               verse_text_meaning: req.body.verse_text_meaning,
               verse_number: req.body.verse_number,
               verse_summary: req.body.verse_summary, 
               chapter: req.body.chapter,
               verse_image: req.body.verse_image
            });
            const verse = await newVerse.save();
            console.log("Writing to database");
            return res.json(verse);
           } catch (err) {
               console.log(err.message);
               return res.status(500).send("Server Error");
           }
        }
   }
];

// Display verse delete form on GET.
exports.verse_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: verse delete GET');
};

// Handle verse delete on POST.
exports.verse_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: verse delete POST');
};

// Display verse update form on GET.
exports.verse_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: verse update GET');
};

// Handle verse update on POST.
exports.verse_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: verse update POST');
};