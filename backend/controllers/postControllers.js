import post from '../models/post.js'

// GET /posts
// GET /posts/:id
// POST /posts
// PUT /posts/:id
// DELETE /posts/:id

// get all of the posts
export const getPosts = async (req, res) => {
    try {
        const posts = await post.find()
        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
// get a single post
export const getPost = async (req, res) => {
    try {
        const Post = await post.findById(req.params.id)
        res.status(200).json(Post)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

// create a new post
export const createPost = async (req, res) => {
    try {
        const newPost = await post.create(req.body)
        res.status(201).json(newPost)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

// update a post
export const updatePost = async (req, res) => {
    try {
        const updatePost = await post.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updatePost)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }   
}

// delete a post
export const deletePost = async (req, res) => {
    try {
        const deletePost = await post.findByIdAndDelete(req.params.id)
        res.status(200).json(deletePost)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}