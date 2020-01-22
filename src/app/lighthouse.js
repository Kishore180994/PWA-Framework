const lighthouse = require("lighthouse");
const {URL} = require('url');

async function runLightHouse(browser, url){
    browser.on('targerchanged', async target=> {
        const page = await target.page();
    })

    const {lhr} = await lighthouse(url, {
        port: (new URL(browser.wsEndpoint())).port,
        output: 'html',
    });

    console.log("Lighthouse Audit completed");
}