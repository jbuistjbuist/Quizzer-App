const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  const userId = req.session.userId;
  if (userId) {
    return res.redirect('/');
  }
  const templateVars = {
    userName: '',
    userId,
    errorMessage: '',
  };
  res.render('login', templateVars);
});

router.get('/new', (req, res) => {
  const userId = req.session.userId;
  if (userId) {
    return res.redirect('/');
  }
  const templateVars = {
    userName: '',
    userId,
    errorMessage: '',
  };
  res.render('register', templateVars);
});

module.exports = router;
