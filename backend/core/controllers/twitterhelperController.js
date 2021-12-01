const twitterlite = require('twitter-lite');
const dotenv = require('dotenv');
const router = require('express').Router();
const express = require('express');

dotenv.config();

// router methods..
router.get('/', async (req, res) => {

    let token = await reqAuthentication();
    console.log(token);
    res.redirect("https://api.twitter.com/oauth/authenticate?oauth_token=" + token.oauth_token);
    console.log(token);

});

router.get('/auth', async (req, res) => {
    console.log(res);
    let token = await getToken(res); 
    // res.send(res);
   

 
});


async function getToken(res)
{ 
    const client = new twitterlite({
        consumer_key: process.env.apiKey,
        consumer_secret: process.env.apiSecret
      });
      
      client
        .getAccessToken({
          oauth_verifier: res.oauthVerifier,
          oauth_token: res.oauthToken
        })
        .then(res =>{
            console.log("Reached token scope");
          console.log({
            accTkn: res.oauth_token,
            accTknSecret: res.oauth_token_secret,
            userId: res.user_id,
            screenName: res.screen_name
          })
         } )
        .catch(err => {
            console.log(err);
            // res.status(503).send({ "message": "could not process request" });
        });
}
async function reqAuthentication() {
   
    this.client = new twitterlite(
        {
            consumer_key: process.env.apiKey,
            consumer_secret: process.env.apiSecret
        }
    );
    let tokens = await this.client.getRequestToken("http://localhost:3000/twitter/auth")
        .then((res) => {
            // console.log(res);
            return res;

        }).catch(err => {
            console.log(err);
            res.status(503).send({ "message": "could not process request" });
        });
    return tokens;
}



module.exports = router;