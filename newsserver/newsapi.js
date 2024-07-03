const express = require('express');
const app = express();
const axios = require('axios').default;

const API_KEY = '890c3c8641b64378878f9fe5a401003c';
const getApiData = async () => {
    return await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`)
        .then(function(response) {
            console.log(response.data.articles);
            return response.data.articles;
        });
}

app.get('/', async (request, response) => {
 /*   const data = [
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
        {
            title: 'title333',
            author: 'author333',
            publishedAt: '2024.07.03 09:56:33',
            url: 'http://www.kakao.com'
        },
    ]*/
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
});

const port = 8000;
app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})