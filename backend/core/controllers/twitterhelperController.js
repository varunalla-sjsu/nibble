const twitterlite = require('twitter-lite');
const dotenv = require('dotenv');
const router = require('express').Router();
const express = require('express');

dotenv.config();

// router methods..
router.get('/', async (req, res) => {

    this.client = new twitterlite(
        {
            consumer_key: process.env.apiKey,
            consumer_secret: process.env.apiSecret
        }
    );
    // let twitterObj = new TwitterService();
    let tokens = await this.client.getRequestToken("http://localhost:3000/twitter/auth")
        .then(res => {
            console.log(res);
            res.redirect("https://api.twitter.com/oauth/authenticate?oauth_token=" + res.oauth_token).then(res => {
                this.client.getAccessToken({
                    oauth_verifier: "",
                    oauth_token: ""
                }).then(res =>
                    console.log({
                        accTkn: res.oauth_token,
                        accTknSecret: res.oauth_token_secret,
                        userId: res.user_id,
                        screenName: res.screen_name
                    })
                )
                    .catch(console.error);
            })
            return res;

        })
        .catch(console.error);

    console.log(tokens);


});


module.exports = router;