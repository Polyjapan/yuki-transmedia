/**
 * Created by flaviapittet on 11/03/16.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LevelSchema = new Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    release_date: {
        type: Date,
        required: true
    },
    url: {
        type: String,
        unique: true
    },
    keys: [{
        "key": String,
        "is_true": Boolean
    }],
    clue: {
        data: Buffer,
        contentType: String
    },
    is_world: {
        type: Boolean,
        required: true
    } 
});

mongoose.model('Level', LevelSchema);
//tableau de keys ici
