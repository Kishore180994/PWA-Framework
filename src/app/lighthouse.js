const lighthouse = require("lighthouse");
const {URL} = require('url');

async function runLighthouse(browser, url) {
  browser.on('targetchanged', async target => {
    const page = await target.page();
  })

  const {lhr} = await lighthouse(url, {
    port: (new URL(browser.wsEndpoint())).port,
    output: 'html',
  });

//   console.log(`Lighthouse scores: ${Object.values(lhr.categories).map(c => c.score).join(', ')}`);
    console.log('Lighthouse audits completed');
}

module.exports = {
  runLighthouse
};
