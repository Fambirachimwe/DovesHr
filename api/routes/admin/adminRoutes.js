const express = require('express');
const router = express.Router();

const Objective = require('./models/models')


// admin refering to the hr administrator of the system 
// get departments  -------------
// add department  -------------
//register login
// delete departments by Id
// get department byId --------------
//edit department
//


router.get('/dpt', (req, res, next) => {  // get all the departments
    Objective.find()
    .then(response => {
        if(response.length > 0){
            res.status(200).json({
                response
            })
        } else {
            res.status(200).json({
                message: 'no departments added '
            })
        }
    })

});


// get by id 
router.get('/dpt/:id', (req, res, next) => {
    const id = req.params.id;
    Objective.find({_id:id})
    .then(response => {
        if(response.length > 0){
            res.status(200).json({
                response
            })
        } else {
            res.status(200).json({
                message: `departmet with the id ${id} is not found `
            })
        }
    })
});


// add dpt
router.post('/dpt', (req, res, next) => {
    const dpt = new Objective({
        description: req.body.description,
        actions: req.body.actions.map(action => {
                return  {
                    name: action.name,
                    timeline: action.timeline,
                    cheched: action.checked
                }
        })
    })
    .save()
    .then(dpt => {
        res.status(200).json({
            message: 'new department added',
            department: dpt
        })
    })
});


// get actions  of a particular department by the id of the department 


router.get('/dpt/:id/actions', (req, res, next) => {
    const id = req.params.id;
    Objective.find({_id: id})
    .then(response => {
        if (response.length > 0){
            res.status(200).json({
                data: response[0].actions
            })
        }else{
            res.status(200).json({
                message: `department with id  ${id} not found `
            })
        }
    })
});



// add checkers to the checklist
// not tested
router.post('/dpt/:id/actions', (req, res, next) => {  // this will be handled by the state on the frontend such that when a checkbox is checked it is saved on state and a new post request is being sent to the database 
    const id = req.params.id;
    Objective.findOneAndUpdate({_id: id}, (docs) => {
        docs.actions.map(doc => {
            if(doc.checked === false){
                doc.checked = true;
            } else {
                doc.checked = false;
            }

            res.status(200).json({
                message: 'checked updated',
                doc
            })
        })
    })
    
});






module.exports = router;
