const { Router } = require('express')
const postSchema = require('../model/postSchema')

//! creating POST

exports.createPOst = async (req,res) =>{
    try {
        let payload = await postSchema.create(req.body)

        res
        .status(200)
        .json({
            success: true,
            message: 'Post is added',
            payload
        })
    } catch (error) {
        console.log(error)
    }
}

// ! getting data 

exports.getPost = async (req,res) =>{
    try {
        let payload = await postSchema.find({})

        res
        .status(200)
        .json({
            success: true,
            message: 'data is fetched',
            payload
        })
    } catch (error) {
        console.log(error)
    }
}

//! find by id
exports.getbyid = async (req,res) =>{
    try {
        let payload = await postSchema.findById({_id: req.params.id})

        res
        .status(200)
        .json({
            success: true,
            message: `getting data by id `,
            payload
        })
    } catch (error) {
        console.log(error)
    }
}

//! updating data 
exports.updatepost = async (req,res) =>{
    try {
        let payload = await postSchema.updateOne({_id:req.params.id},{$set:req.body})

        res
        .status(200)
        .json({
            success: true,
            message: `updated data by id `,
            payload
        })
    } catch (error) {
        console.log(error)
    }
}

//! deleting data

exports.deletepost = async (req,res) =>{
    try {
        let payload = await postSchema.deleteOne({_id: req.params.id})

        res
        .status(200)
        .json({
            success: true,
            message: `deleting data by id `,
            payload
        })
    } catch (error) {
        console.log(error)
    }
}