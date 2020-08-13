var Verse = require('../models/verse');

// Display list of all verses.
exports.verse_list = function(req, res) {
    res.send('NOT IMPLEMENTED: verse list');
};

// Display detail page for a specific verse.
exports.verse_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: verse detail: ' + req.params.id);
};

// Display verse create form on GET.
exports.verse_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: verse create GET');
};

// Handle verse create on POST.
exports.verse_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: verse create POST');
};

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