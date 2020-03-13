const express = require('express');
const bodyParser = require("body-parser")
const  post = require('./models/post');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }))

app.use((req,res,next) =>{
    res.setHeader('Access-Control-Allow-Origin',"*")
    res.setHeader('Access-Control-Allow-Headers',"Origin, X-Requested-with,Content-Type,Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,POST,PATCH,DELETE,OPTIONS"
    );
    
});

app.post('/api/posts',(req,res,next)=>{
    const post = new post({
       titile: req.body.titile,
       content: req.body.content
    });
    console.log(post)
    res.status(201).json({
       message: 'Post added succesfull'
    });

});




app.use('/api/posts',(req,res,next) =>{
    const posts = [
     {id: '8211245334086',
     titile: 'this post was post by tshifhiwa',
     content: 'this is coming form serve'
    },
     {id: '2242444',
     titile: 'this new post coming',
     content: 'i like this post'
    },
    ];
    res.status(200).json({
    message: 'post fetched succesfule',
    posts: this.post
});
});



module.exports = app;