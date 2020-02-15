/**
 * Created by charlie on 6/6/2015.
 */

var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
    commentText: String,
    date: { type: Date, default: Date.now }
});

var scientistsSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    subject: String,
    subjects: [String],
    comments: [commentSchema]
});

module.exports = mongoose.model('scientist', scientistsSchema);
