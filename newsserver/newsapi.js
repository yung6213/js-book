const express = require('express');
const app = express();
const axios = require('axios').default;

const API_KEY = '890c3c8641b64378878f9fe5a401003c';
const API_KEY_KR = '380ce161b7e444158a7e387fec0419d0';

const getApiDataKr = async () => {
    return await axios.get(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY_KR}`)
    .then(function(response) {
        console.log(response.data.articles);
        return response.data.articles;
    })
}

const getApiData = async () => {
    return await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`)
        .then(function(response) {
            console.log(response.data.articles);
            return response.data.articles;
        });
}


app.set('view engine', 'ejs');
app.set('views', './views')

app.get('/domestic',async (req, res) => {
    const data = await getApiDataKr();
    const result = data.map((object) => {
        if(object.urlToImage !== null && object.urlToImage.endsWith('/')) {
            object.urlToImage = object.urlToImage.slice(0, -1);
            return object;
        } else {
            return object;
        }
    });

    res.render('domestic', {
        one: "this is three",
        two: "this is four",
        data: result
    });
});


app.get('/',async (req, res)=> {
    const data = await getApiData();
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

/*
app.get('/', async (request, response) => {
    const data = [
        {
            title: 'title111',
            author: 'author111',
            publishedAt: '2024.07.03 15:56:33',
            url: 'http://www.naver.com'
        },
        {
            title: 'title222',
            author: 'author222',
            publishedAt: '2024.07.03 04:36:33',
            url: 'http://www.daum.com'
        },
    ]
    const data = await getApiData();
        let html = '';
    data.forEach((d) => {
        html += `<p>${d.title}</p>
                <p>${d.author})</p>
                <p>${d.publishedAt}</p>
                <a href=${d.url}>${d.url}(url)</a>
                <hr/>`;
    });
    response.send(`
        <html>
        <body>
            <div id='wrapper'>
            ${html}
            </div>
        </body>
        </html>
    `);
});*/

const port = 8000;
app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})