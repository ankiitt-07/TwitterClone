const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://admin:tqEzW9jaiPlWlkjX@twitter.r5yxmur.mongodb.net/?retryWrites=true&w=majority&appName=Twitter")
.then(() => console.log("Connected to MongoDb"));
const plm = require("passport-local-mongoose"); //encryption
const userSchema = mongoose.Schema({
  username: String,
  name:String,
  email: {
    type: String,
    required:true,
    unique: true
  },
  password:{
    type:String,

  },
  profileImage:String,
  bio:String,
  followers: [{type: mongoose.Schema.Types.ObjectId, ref:'user'}],
  following : [{type:mongoose.Schema.Types.ObjectId, ref:'user'}],
  posts :[{ type:mongoose.Schema.Types.ObjectId, ref:'post'}]//new model
})

userSchema.plugin(plm);
module.exports = mongoose.model('user',userSchema);
