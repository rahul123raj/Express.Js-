let {Schema,model} = require('mongoose')

const postSchema = new Schema(
    {
        quote:{
            type: String,
            required: true
        },
        desc:{
            type: String,
            required: true
        },
        author:{
            type: String
        }
    },
    {
        timestamps: true
    }
)

module.exports = model('post',postSchema)