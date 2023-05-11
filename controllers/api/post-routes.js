const { Router } = require('express');
const { Post } = require('../../models');
const { withAuth } = require('../../utils/auth');

const router = Router();

// Create a new post
router.post('/', withAuth, async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = await Post.create({ title, content, userId: req.session.userId });
    res.json(newPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to create new post' });
  }
});

// Update a post
router.put('/:id', withAuth, async (req, res) => {
  try {
    const { title, content } = req.body;
    const postId = req.params.id;

    // Update the post in the database
    const [affectedRows] = await Post.update({ title, content }, {
      where: {
        id: postId,
      },
    });

    // Check if the post was updated successfully
    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).json({ message: `Post with id ${postId} not found` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to update post' });
  }
});

// Delete a post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postId = req.params.id;

    // Delete the post from the database
    const deletedRows = await Post.destroy({
      where: {
        id: postId,
      },
    });

    // Check if the post was deleted successfully
    if (deletedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).json({ message: `Post with id ${postId} not found` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to delete post' });
  }
});

module.exports = router;