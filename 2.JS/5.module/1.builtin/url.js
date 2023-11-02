const url = require('url');

const myUrl = 'https://www.example.com/path?query=value&key=value&name=bgYu'

//url 파싱
const parseUrl = url.parse(myUrl,true);
console.log('파싱된 URL:',parseUrl);
console.log('호스트:',parseUrl.host);
console.log('경로:',parseUrl.pathname);
console.log('쿼리:',parseUrl.query);

const myUrl2 = {
    protocol: 'https',
    hostname: "www.naver.com",
    pathname: '/search.naver',
    query: {
        query: '새싹'
    }
};

//url조립
const assemlbledUrl = url.format(myUrl2);
console.log('조립된 url:',assemlbledUrl);
