const express = require('express');
const router = express.Router();

const domesticService = require('../service/domesticService');

//const API_KEY = '380ce161b7e444158a7e387fec0419d0';
// const getApiData = async (countryCode, category = 'business') => {
//     return await axios.get(`https://newsapi.org/v2/top-headlines?country=${countryCode}&category=${category}&apiKey=${API_KEY}`)
//                     .then(function(response) {
//                         console.log(response.data.articles);
//                         return response.data.articles;
//                     });
// }

router.get('/', async (req, res, next) => {
    const result = await domesticService.getApiData('kr');
    res.render('domestic', {
        one: "this is three",
        two: "this is four",
        data: result
    });
});

router.get('/sports', async (req, res, next) => {
    const data = await domesticService.getApiData('kr', 'sports');
    res.render('domestic-sports', {
        one: "this is three",
        two: "this is four",
        data: data
    });
});

module.exports = router;