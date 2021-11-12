const {v4} = require('uuid');
let posts = require('../data/posts.json')

module.exports = (app) => {
    const getAllPosts = (req, res) => {
        res.json(posts);
    }

    const getPostById = (req, res) => {
        const  id  = req.params['id'];
        const matchedPosts = posts.filter(post=> post._id === id);
        if (matchedPosts.length === 1) {
            res.json(matchedPosts[0]);
        }
        else{
            res.status(500).send('Server Error');
        }
    }

    const getPostsByName = (req, res) => {
        const { name } = req.query;
        const matchedPosts = posts.filter(post=>post.name === name);
        res.json(matchedPosts);
    }

    const creatPost = (req, res) => {
        console.log(req)
        const newPost = req.body
        newPost['_id'] = v4();
        posts = [
            newPost,
            ...posts
        ]
        res.json(newPost);
    }

    app.get('/api/posts', getAllPosts);
    app.get('/api/posts/:id', getPostById);
    app.get('/api/search', getPostsByName);
    app.post('/api/posts', creatPost);
}