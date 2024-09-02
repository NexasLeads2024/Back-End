const Blog = require('../models/blog');
const jwt = require('jsonwebtoken');
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(400).json({ message: 'Blogs not found' });
  }};

exports.getOneBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ message: 'Error retrieving the blog' });
  }
};

exports.createBlog = async (req, res) => {
  try {
    const blog = new Blog({
      title: req.body.title,
      text: req.body.text,
      author: req.body.author,
      description: req.body.description,
      url: req.body.url,
      alt: req.body.alt,
      keyword1: req.body.keyword1,
      keyword2: req.body.keyword2,
      keyword3: req.body.keyword3,
      keyword4: req.body.keyword4,
      keyword5: req.body.keyword5,
      keyword6: req.body.keyword6,
      keyword7: req.body.keyword7,
      keyword8: req.body.keyword8,
      keyword9: req.body.keyword9,
      keyword10: req.body.keyword10,
      Metatitle: req.body.Metatitle,
    });
    await blog.save();
    res.status(201).json({ message: 'Blog saved successfully!' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }};
exports.updateBlog = async (req, res) => {
      const updatedBlog = {
      title: req.body.title,
      text: req.body.text,
      author: req.body.author,
      description: req.body.description,
      url: req.body.url,
      alt: req.body.alt,
      keyword1: req.body.keyword1,
      keyword2: req.body.keyword2,
      keyword3: req.body.keyword3,
      keyword4: req.body.keyword4,
      keyword5: req.body.keyword5,
      keyword6: req.body.keyword6,
      keyword7: req.body.keyword7,
      keyword8: req.body.keyword8,
      keyword9: req.body.keyword9,
      keyword10: req.body.keyword10,
      Metatitle: req.body.Metatitle,
      };
      Blog.updateOne({ _id: req.params.id }, updatedBlog)
        .then(() => res.status(200).json({ message: 'Blog updated successfully!' }))
        .catch(() => res.status(404).json({ message: 'Blog not found' }));
};
exports.deleteBlog = async (req, res) => {
  try{
  await Blog.deleteOne({_id: req.params.id});
  res.status(201).json({ message: 'Blog deleted successfully!' });        
  }catch (error) {
    res.status(403).json({ message: 'You are not an admin' });
  }};
