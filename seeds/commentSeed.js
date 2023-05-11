const { Comment } = require('../models');

const commentData = [
  {
   content: 'Great work on this article!',
   user_comment_id: 2,
   post_id: 1
  },
  {
    content: 'I really enjoyed reading this post, thanks for sharing!',
    user_comment_id: 1,
    post_id: 2
  }
]

const seedCommentData = () => Comment.bulkCreate(commentData);

module.exports = seedCommentData;