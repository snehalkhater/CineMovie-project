import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({

title:{
type:String,
required:true
},

description:{
type:String,
required:true
},

poster:{
type:[String]
},

releaseDate:{
type:Date
},

duration:{
type:String
},

language:{
type:String
},

genre:{
type:String
},

createdAt:{
type:Date,
default:Date.now
}

})

const Movie = mongoose.model("Movie",movieSchema)

export default Movie