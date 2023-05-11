const router = require('express').Router();
const { User } = require('../../models/');

// create a new user account
router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = await User.create({ username, password });

    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = newUser.username;
      req.session.loggedIn = true;

      res.status(201).json(newUser);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Failed to create user account.' });
  }
});

// log in an existing user
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    if (!user || !user.checkPassword(password)) {
      res.status(400).json({ message: 'Invalid username or password.' });
      return;
    }

    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;

      res.json({ user, message: 'You are now logged in.' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Failed to log in.' });
  }
});

// log out the current user
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
