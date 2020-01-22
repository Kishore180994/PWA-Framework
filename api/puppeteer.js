"use strict"

//Initialize puppeteer
const puppeteer = require('puppeteer');

// Open browser
async function openBrowser(browser){
    browser = await puppeteer.launch({
        headless: false
    });
    return browser;
}

//Open page
async function openPage(url, page, browser){
    page = await browser.newPage();
    await page.goto(url);
    return page;
}

//Close browser
async function closeBrowser(browser){
    await browser.close();
}

module.exports = {
    openBrowser, closeBrowser, openPage
}