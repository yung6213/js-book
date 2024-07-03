const express = require('express');
const app = express();

app.get('/', (request, response) => {
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
        {
            title: 'title333',
            author: 'author333',
            publishedAt: '2024.07.03 09:56:33',
            url: 'http://www.kakao.com'
        },
    ]
    let html = '';
    data.forEach((d) => {
        html += `<p>${d.title}</p>
                <p>${d.author})</p>
                <p>${d.publishedAt}</p>
                <a href='${d.url}'>${d.url}(url)</a>
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