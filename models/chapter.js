const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChapterSchema = new Schema({
    chapter_name:{
        type: String,
        required:true
    },
    // @TODO: Add English name/ English Number, meaning and Summary fileds
    chapter_number:{
        type: String,
        required:true
    },
    chapter_name_meaning:{
        type: String,
        required:true
    },
    chapter_summary:{
        type: String,
        required:true
    },
    chapter_image:{ 
        type:String
    }
});

// Virtual for verse's URL
ChapterSchema
.virtual('url')
.get(function () {
  return '/shreemadbhagwadgeeta/chapter/' + this._id;
});

module.exports = Post = mongoose.model('Chapter', ChapterSchema);