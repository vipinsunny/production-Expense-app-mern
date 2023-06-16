const mongoose = require ('mongoose')

const connectionString = 'mongodb://localhost:27017/expenseApp';

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // Connection successful
    console.log(`Server Running On ${mongoose.connection.host}`.bgCyan.white);
    
    // Continue with your code...
  })
  .catch((error) => {
    // Connection error
    console.error(`${error}`.bgRed);
  });
//schema design
const userSchema = new mongoose.Schema({
name:{
    type: String,
    required:[true, 'name is required']
},
email:{
    type: String,
    required:[true, 'email is required and should be unique'],
    unique: true,
},
password:{
    type: String,
    required:[true, 'password is required']
},
},
{ timestamps: true }
);

//export
const userModel = mongoose.model('users', userSchema)
module.exports = userModel