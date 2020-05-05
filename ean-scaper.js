//ean-scaper.js

const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://www.blitec.de/Toffifee-Pralinen-15er-Packung-125-g::280913.html').then((res) => {
    const $ = cheerio.load(res.data);

    var prodinfo = "";

    console.log(
        $('.pd_inforow')
            .text()
    );
});

