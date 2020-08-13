const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VerseSchema = new Schema({
    verse_text:{
        type: String,
        required:true
    },
    // @TODO: Add English name/ English Number, meaning and Summary fileds
    verse_number:{
        type: String,
        required:true
    },
    verse_text_meaning:{
        type: String,
        required:true
    },
    verse_summary:{
        type: String,
        required:true
    },
    verse_image:{ 
        type:String
    },
    chapter:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Chapter'
    }
});
// Virtual for verse's URL
VerseSchema
.virtual('url')
.get(function () {
  return '/shreemadbhagwadgeeta/verse/' + this._id;
});

module.exports = Post = mongoose.model('Verse', VerseSchema);