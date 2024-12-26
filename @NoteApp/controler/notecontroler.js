const noteSchema =require('../model/noteschema')

//! inserted data in database
exports.insertNote = async (req,res) => {
    let payload = await noteSchema.create(req.body)
    res
    .status(200)
    .json({
        success : true,
        message : 'data is inserted',
        payload
    })
}

//! fetching all data from database

exports.fetchData = async (req,res) =>{
    let payload = await noteSchema.find({})
    res
    .status(200)
    .json({
        success: true,
        message: " data is fetched",
        payload
    })
}

//! fetching particular data from database

exports.fetchonedata = async (req,res) =>{
    let payload = await noteSchema.findById(req.params.id)
    res
    .status(200)
    .json({
        success: true,
        message: " Single-data is fetched",
        payload
    })
}

//! deleting particular data from database

exports.deletedata = async (req,res) =>{
    let payload = await noteSchema.deleteOne({_id : req.params.id})
    res
    .status(200)
    .json({
        success: true,
        message: " data is deleted",
        payload 
    })
    // .then(data => console.log(data))
}

exports.updatadata = async (req,res) =>{
    let payload = await noteSchema.updateOne({_id : req.params.id},{$set:req.body})
    res
    .status(200)
    .json({
        success : true,
        message: "data is updated",
        
    })
}