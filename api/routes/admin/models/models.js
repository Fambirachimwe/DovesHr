const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const actionSchema = new Schema ({       
    name: String,
    timeline: {type: Date, default:Date.now()},
    checked: {type: Boolean, default: false},
})

const objectiveSchema = new Schema({
    description: String ,
    actions: [actionSchema]
});



const Objective  = mongoose.model('Objective', objectiveSchema);


module.exports = Objective;

