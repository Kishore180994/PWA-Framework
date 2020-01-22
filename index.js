const { openBrowser, openPage, closeBrowser } = require("./api/puppeteer");
const { runLighthouse } = require("./src/app/lighthouse");

console.log("=======***=======");
console.log("Starting lighthouse automation using puppeteer");
console.log("=======***=======");
let browser = null;
let page = null;
// opening a browser
console.log("Opening a browser");
browser = openBrowser(browser);
let url = "https://mobile.twitter.com";
browser.then(async $browser => {
  console.log("Opening a web page");
  // Opening a page
  runLighthouse($browser, url);
});
