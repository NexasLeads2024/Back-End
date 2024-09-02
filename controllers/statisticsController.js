const User = require('../models/user');
const Blog = require('../models/blog');

// Controller to get user and blog counts
const getCounts = async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    const blogCount = await Blog.countDocuments();
    res.json({ userCount, blogCount });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching counts', error });
  }
};

// Controller to get blog creation dates
const getBlogCreationDates = async (req, res) => {
  try {
    const blogs = await Blog.find().select('createdAt');
    const data = blogs.map(blog => ({
      date: new Date(blog.createdAt).toLocaleDateString(),
    }));

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blog creation dates', error });
  }
};

module.exports = {
  getCounts,
  getBlogCreationDates,
};
