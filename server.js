const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8001;
const knex = require('./db/knex');
const app = express();

// app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));



app.get('/todos',()=>{
    knex.select().from('todos')
    .then((todos)=>{
        res.send(todos)
    })
})

app.get("/todos/:id", (req, res) => {
  knex.select()
    .from("todos")
    .where('id',req.params.id)
    .then((todos) => {
      res.send(todos);
    });
});


app.post('/todos', function(req,res){
    knex('todos').insert({
        title:re.body.title,
        user_id:req.body.user_id
    })
    .then(()=>{
        knex.select().from('todos')
        .then((todos)=>{
         res.send(todos)
        })
    })
})

app.put('/todos/:id',(req,res)=>{
    knex('todos').where('id',req.params.id)
    .update({
         title:req.body.title,
         completed:req.body.completed
        })
        .then(()=>{
        knex.select().from('todos')
        .then((todos)=>{
         res.send(todos)
        })
    })


})


app.delete('/todos/:id', (req,res)=>{
    knex('todos').where('id',req.params.id)
    .del()
    .then(()=>{
        knex.select()
        .from('todos')
        .then((todos)=>{
            res.send(todos)

        })
    })
})
















app.listen('8001', ()=>{
    console.log(`Server started at ${port}` );
});
