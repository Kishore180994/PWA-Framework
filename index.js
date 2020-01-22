const {openBrowser, openPage, closeBrowser} = require("./api/puppeteer");
const { runLightHouse } = require("./src/app/lighthouse");

let browser = null;
let page = null;
let url = "https://mobile.twitter.com";
browser = openBrowser(browser);

browser.then(async $browser => {
    page = openPage(url, page, $browser);
    page.then($page => {
        runLightHouse($browser, url);
    }).catch(err => console.log(err));
}).catch(err => console.log(err));