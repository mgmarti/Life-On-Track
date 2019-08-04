const express = require("express");
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const {
    check,
    validationResult
} = require('express-validator');


//@route GET   api/profile
//@desc        Test route
//@access      Public
// router.get('/', (req, res) => res.send('Profile route'));


//@route GET   api/profile/me
//@desc        Get current user's profile
//@access      Private
router.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({
            user: req.user.id
        }).populate('user', ['name', 'avatar']);

        if (!profile) {
            return res.status(400).json({
                msg: 'There is no profile for this user.'
            });
        }

        res.json(profile);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


//@route POST  api/profile
//@desc        create or update user profile
//@access      Private

router.post(
    '/',
    [
      auth,
      [
        check('name', 'Name is required')
          .not()
          .isEmpty()
      ]
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const {
        name
      } = req.body;
  
    // Build profile object
      const profileFields = {};
      profileFields.user = req.user.id;
      if (name) profileFields.name = name;

    //   console.log(name)
    //   res.send('Hello')
  
      try {
        // Using upsert option (creates new doc if no match is found):
        let profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true, upsert: true }
        );
        res.json(profile);


        //Create
        profile = new Profile(profileFields);
        await profile.save();
            res.json(profile);

      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );

// @route    DELETE api/profile
// @desc     Delete profile, user & posts
// @access   Private
router.delete('/', auth, async (req, res) => {
    try {
      // Remove user posts
    //   await Post.deleteMany({ user: req.user.id });
      // Remove profile
      await Profile.findOneAndRemove({ user: req.user.id });
      // Remove user
      await User.findOneAndRemove({ _id: req.user.id });
  
      res.json({ msg: 'User deleted' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

module.exports = router;