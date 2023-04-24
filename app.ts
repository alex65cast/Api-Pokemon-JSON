import express from 'express';
import mongoose from 'mongoose';
import routerPokemon from './entities/pokemon/router.js'
import routerUser from './entities/Users/router.js';
import CONF from './conf.js';

mongoose.connect(CONF.CONECT_DB,{

    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false

}).then(()=>{console.log('connected to the database')})
  .catch((err)=>{console.log('Not cant connect to dateBase',err)});

const app = express();

const handlerError = (err:Error,req,res,next)=>{

  if(err.message === 'NOT_EXIST_USER'){
    return res.status(404).json({code:'NOT_EXIST_USER',message:'Not exist this user'});
  }
  if(err.message === 'NOT_CANT_UPDATE'){
    return res.status(404).json({code:'NOT_CANT_UPDATE',message:'There is nothing to update'});
  }
  if(err.message === 'NOT_EXIST_POKE'){
    return res.status(404).json({code:'NOT_EXIST_POKE',message:'Not exist this pokemon'});
  }
  return res.status(500).json({code:'SERVER_ERROR',message:err.message});
  
};

app.use(express.json());
app.use('/pokemon',routerPokemon);
app.use('/user',routerUser);
app.use(handlerError);
app.listen(CONF.PORT,()=>console.log('Server up in port 3000'));
