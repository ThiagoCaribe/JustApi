import db from './db.js';
import express from 'express'
import cors from 'cors'
import crypto from 'crypto-js'

const app = express();


app.use(cors());
app.use(express.json());
// Api 

app.get('/usuarios', async (req, resp)=>{
    try{
        let r = await db.usuario.findAll();
        resp.send(r);
    }catch(e){
        resp.send({erro :e.toString()});
    }
})

app.post('/cadastro', async (req, resp) => {
    try{
        let {nome , email , numero, senha } = req.body;
        let r = await db.usuario.create({nm_usuario : nome, ds_email : email, nr_contato : numero , ds_senha : crypto.SHA256(senha).toString(crypto.enc.Base64)});
        resp.send(r);
    }catch(e){
        resp.send({error : e.toString()})
    }
})


app.listen(process.env.Port, x=> console.log(`Server up at port ${process.env.PORT}`));
