const express = require('express');
const router = express.Router();

const domesticService = require('../service/domesticService');

// const API_KEY = '380ce161b7e444158a7e387fec0419d0';
// const getApiData = async (countryCode, category = 'business') => {
//     return await axios.get(`https://newsapi.org/v2/top-headlines?country=${countryCode}&category=${category}&apiKey=${API_KEY}`)
//                     .then(function(response) {
//                         console.log(response.data.articles);
//                         return response.data.articles;
//                     });
// }

router.get('/', async (req, res, next)=> {
    const data = await domesticService.getApiData('us');
    const result = data.map((object) => {
        if(object.urlToImage !== null && object.urlToImage.endsWith('/')) {
            object.urlToImage = object.urlToImage.slice(0, -1);
            return object;
        } else {
            return object;
        }
    });
    res.render('index', {
        one: "this is one",
        two: "this is two",
        data: result
    });
});

router.get('/sports', async (req, res, next)=> {
    const data = await domesticService.getApiData('us', 'sports');
    const result = data.map((object) => {
        if(object.urlToImage !== null && object.urlToImage.endsWith('/')) {
            object.urlToImage = object.urlToImage.slice(0, -1);
            return object;
        } else {
            return object;
        }
    });
    res.render('sports', {
        one: "this is three",
        two: "this is four",
        data: data
    });
});

module.exports = router;