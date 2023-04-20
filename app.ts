import express from 'express';
import mongoose from 'mongoose';
import routerPokemon from './entities/pokemon/router.js'
import routerUser from './entities/Users/router.js';
import CONF from './conf.js';

mongoose.connect('mongodb://127.0.0.1:27017/db-ejemplo-pokemon',{

    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false

}).then(()=>{console.log('connected to the database')})
  .catch((err)=>{console.log('Not cant connect to dateBase',err)});

const app = express();

const handlerError = (err,req,res,next)=>{

  if(err.message === 'NOT_EXIST_USER'){
    return res.status(404).json({$code:'NOT_EXIST_USER',$message:'Not exist this user'});
  }else if(err.message === 'NOT_CANT_UPDATE'){
    return res.status(404).json({$code:'NOT_CANT_UPDATE',$message:'There is nothing to update'});
  }else if(err.message === 'NOT_EXIST_POKE'){
    return res.status(404).json({$code:'NOT_EXIST_POKE',$message:'Not exist this pokemon'});
  }
};

app.use(express.json());
app.use('/pokemon',routerPokemon);
app.use('/user',routerUser);
app.use(handlerError);
app.listen(3000,()=>console.log('Server up in port 3000'));
