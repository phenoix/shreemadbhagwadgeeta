var express = require('express');
var router = express.Router();

// Require controller modules.
var chapter_controller = require('../controllers/chapterController');
var verse_controller = require('../controllers/verseController');

/// Chapter ROUTES ///

// GET Bhagwadgeeta home page.
router.get('/', chapter_controller.index);

// GET request for creating a chapter. NOTE This must come before routes that display chapter (uses id).
router.get('/chapter/create', chapter_controller.chapter_create_get);

// POST request for creating chapter.
router.post('/chapter/create', chapter_controller.chapter_create_post);

// GET request to delete chapter.
router.get('/chapter/:id/delete', chapter_controller.chapter_delete_get);
// POST request to delete chapter.
router.post('/chapter/:id/delete', chapter_controller.chapter_delete_post);

// GET request to update chapter.
router.get('/chapter/:id/update', chapter_controller.chapter_update_get);

// POST request to update chapter.
router.post('/chapter/:id/update', chapter_controller.chapter_update_post);

// GET request for one chapter.
router.get('/chapter/:id', chapter_controller.chapter_detail);

// GET request for list of all chapter items.
router.get('/chapters', chapter_controller.chapter_list);


/// verse ROUTES ///

// GET request for creating verse. NOTE This must come before route for id (i.e. display verse).
router.get('/verse/create', verse_controller.verse_create_get);

// POST request for creating verse.
router.post('/verse/create', verse_controller.verse_create_post);

// GET request to delete verse.
router.get('/verse/:id/delete', verse_controller.verse_delete_get);

// POST request to delete verse.
router.post('/verse/:id/delete', verse_controller.verse_delete_post);

// GET request to update verse.
router.get('/verse/:id/update', verse_controller.verse_update_get);

// POST request to update verse.
router.post('/verse/:id/update', verse_controller.verse_update_post);

// GET request for one verse.
router.get('/verse/:id', verse_controller.verse_detail);

// GET request for list of all verses.
router.get('/verses', verse_controller.verse_list);

module.exports = router;
