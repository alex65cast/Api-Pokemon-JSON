import express from 'express';
import mongoose from 'mongoose';
import router from './entities/pokemon/router.js'
import CONF from './conf.js';


mongoose.connect('mongodb://127.0.0.1:27017/db-ejemplo-pokemon',{

    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false

}).then(()=>{console.log('Se ha conectado a la BDD')})
  .catch((err)=>{console.log('Ha habido un error',err)});

const app = express();

const handlerError = (err,req,res,next)=>{

  if(err.message === 'NOT_FOUND'){

  }
}

app.use(express.json());
app.use('/pokemon',router)
app.use(handlerError);

app.listen(3000,()=>console.log('Servidor levantando en el puerto 3000'));
