const { Post } = require('../models');

const postData = [
  {
    title: 'First Post',
    content: 'This is the first post on my blog!',
    user_id: 1,
  },
  {
    title: 'Second Post',
    content: 'Here comes the second post...',
    user_id: 2,
  },
];

const seedPostData = () => Post.bulkCreate(postData);

module.exports = seedPostData;
