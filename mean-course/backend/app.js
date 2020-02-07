const express = require('express');

const app = express();

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