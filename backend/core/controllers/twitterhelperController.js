const twitterlite = require('twitter-lite');
const dotenv = require('dotenv');
const router = require('express').Router();
const express = require('express');

dotenv.config();

// router methods..
router.get('/', async (req, res) => {
    if (req.query.hike)
    {
        this.hike = req.query.hike;
    }
    console.log("Twitter backend call");
    console.log(this.hike);
    let token = await reqAuthentication();
    console.log(token);
    // res.redirect("https://api.twitter.com/oauth/authenticate?oauth_token=" + token.oauth_token);
    res.status(200).send({ message: "https://api.twitter.com/oauth/authenticate?oauth_token=" + token.oauth_token });
});

router.get('/auth', async (req, res) => {
    console.log(req.query.oauth_token);
    console.log(req.query.oauth_verifier);
    let token = await getToken({ "oauth_token": req.query.oauth_token, "oauth_verifier": req.query.oauth_verifier });
    console.log("Received Tokens");
    console.log(token.accTkn);
    // res.send("api working..");
    // this.client.access_token_key = token.accTkn;
    // this.client.access_token_secret = token.accTknSecret;


    let writeToTwitterResp = await writeToTwitter(token, 7)

    if (writeToTwitterResp)
        //  res.status(200).send({ status: 'success', tweet: writeToTwitterResp });
        res.redirect('https://twitter.com/home');
    else
        res.status(200).send({ status: 'failure', tweet: null })


});

async function writeToTwitter(token, HikeRate) {
    this.client = new twitterlite(
        {
            consumer_key: process.env.apiKey,
            consumer_secret: process.env.apiSecret,
            access_token_key: token.accTkn,
            access_token_secret: token.accTknSecret
        }
    );
    console.log("Write to twitter api...");
    let resp = await this.client.post('statuses/update', {
        status: "For financial year 2021-22, enterprise released an average hike of " + HikeRate + " to its employees."
    }).catch((err) => console.error(err));
    console.log(resp);
    return resp;
}
async function getToken(tokenDetails) {

    console.log("get token with details: " + tokenDetails.oauth_verifier);

    let usrtokens = await this.client
        .getAccessToken({
            oauth_verifier: tokenDetails.oauth_verifier,
            oauth_token: tokenDetails.oauth_token
        })
        .then(res => {
            console.log("Reached token scope");
            console.log({
                accTkn: res.oauth_token,
                accTknSecret: res.oauth_token_secret,
                userId: res.user_id,
                screenName: res.screen_name
            })
            return {
                accTkn: res.oauth_token,
                accTknSecret: res.oauth_token_secret,
                userId: res.user_id,
                screenName: res.screen_name
            };
        })
        .catch(err => {
            console.log("Error", err);

            // res.status(503).send({ "message": "could not process request" });
        });
    console.log(usrtokens);
    return usrtokens;
}
async function reqAuthentication() {

    this.client = new twitterlite(
        {
            consumer_key: process.env.apiKey,
            consumer_secret: process.env.apiSecret
        }
    );
    let tokens = await this.client.getRequestToken("http://localhost:3000/api/twitter/auth")
        .then((res) => {
            // console.log(res);
            return res;

        }).catch(err => {
            console.error(err);
            // res.status(503).send({ "message": "could not process request" });
        });
    return tokens;
}

async function helper(statusCode, body) {
    console.log(body);
    return {
        statusCode: statusCode,
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
            "Access-Control-Expose-Headers": "*"
        },
        body: JSON.stringify(body)
    }
}


module.exports = router;