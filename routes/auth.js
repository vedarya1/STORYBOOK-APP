const express = require('express')
const passport = require('passport')
const router = express.Router()


// @desc Auth with google
// @route GET/suth/google
router.get('/google', passport.authenticate('google', {scope: ['profile']}))


// @desc Google Auth callback
// @route GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/'}), (req, res) => {
	res.redirect('/dashboard')
})

// @desc LOgout user
// @route /suth/logout
router.get('/logout', (req, res) => {
	req.logout()
	res.redirect('/')
})
 
module.exports = router