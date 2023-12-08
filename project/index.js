import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);// edi public javascript  and css

import express from 'express';
import hbs from 'hbs';
import bodyParser from 'body-parser';

import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';


const app = express();

/// mogosedb.....
mongoose.connect("mongodb://127.0.0.1:27017/cinema", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const screen1Model = mongoose.model('screen1',{
  seatno:{type:Number},
  status:{type:String}
})
const screen2Model = mongoose.model('screen2',{
  seatno:{type:Number},
  status:{type:String}
})
const screen3Model = mongoose.model('screen3',{
  seatno:{type:Number},
  status:{type:String}
})

const moviesModel = mongoose.model('movies',{
  name:{type:String},
  rate:{type:Number},
  screenNo:{type:Number}
})

var screen1Res
screen1Model.find()
.then(function(output){
  screen1Res = output
 

})
.catch(function(err){
  console.log("there is error")

})

var screen2Res
screen2Model.find()
.then(function(output){
  screen2Res=output
 

})
.catch(function(err){
  console.log("there is error")

})

var screen3Res
screen3Model.find()
.then(function(output){
  screen3Res=output
 

})
.catch(function(err){
  console.log("there is error")

})

var moviesRes
moviesModel.find()
.then(function(output){
  moviesRes=output
 

})
.catch(function(err){
  console.log("there is error")

})

app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser()); // Correct usage of cookie-parser middleware

app.use(express.static(path.join(__dirname,"public")))// edi public edi why ante hbs direct create chesthunnam kavuna 

// Cinema......
app.get ('/',(req,res)=>{
  res.render('cinema',{
    movies:moviesRes,
    screen1:screen1Res,
    screen2:screen2Res,
    screen3:screen3Res
  })

})



























app.listen(3000, () => {
  console.log('The server has started.....');
});
