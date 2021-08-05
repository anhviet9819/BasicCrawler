const _ = require('lodash');
const axios = require('axios');
const cheerio = require('cheerio');
const { request } = require('express');

const sendResponse = res => async request => {
    return await request
        .then(data => res.json({status: "success", data}))
        .catch(({status: code = 500}) => 
            res.status(code).json({ status: "failure", code, message: code == 404 ?
             'Not found.' : 'Request failed.'})
        );
}