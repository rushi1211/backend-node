import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {

        videoFile:{
            type:true, //cloudinary url
            required:true,
        },
        thumbnail:{
            type:true, //cloudinary url
            required:true,
        },
        title:{
            type:true, 
            required:true,
        },
        description:{
            type:true, 
            required:true,
        },
        duration:{
            type:Number, //cloudinary url
            required:true,
        }, 
        views:{
            type:Number,
            default:0
        },
        isPublished:{
            type:Boolean,
            default:true 
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:"User"
        }
    },
    {
        timestamps:true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)

export const video = mongoose.model('Video', videoSchema)