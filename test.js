const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://ajayelamparithi.github.io/creditcardtest/');
  // await page.waitForSelector('input#cardName.form-control');
  await page.click('input#cardName');
  await page.type('input#cardName', 'Ajay');
  await page.click('input#cardNumber')
  await page.type('input#cardNumber', '452154644561');
  await page.click('input#cardType')
  await page.type('input#cardType', 'Visa');
  await page.click('input#cardExpiration')
  await page.type('input#cardExpiration', '2/26');
  await page.click('input#cardSecurityCode')
  await page.type('input#cardSecurityCode', '2556');
  await page.click('input#cardPostalCode')
  await page.type('input#cardPostalCode', '608109');
  await page.waitForSelector('#validateButton');
  await page.click('#validateButton')
  await page.screenshot({ path: 'creditcardform01.png' });
  await browser.close();
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://ajayelamparithi.github.io/creditcardtest/');
  // await page.waitForSelector('input#cardName.form-control');
  await page.click('input#cardName');
  await page.type('input#cardName', 'PRABAKARAN N');
  await page.click('input#cardNumber')
  await page.type('input#cardNumber', '5166400275016203');
  await page.click('input#cardType')
  await page.type('input#cardType', 'MasterCard');
  await page.click('input#cardExpiration')
  await page.type('input#cardExpiration', '02/27');
  await page.click('input#cardSecurityCode')
  await page.type('input#cardSecurityCode', '554');
  await page.click('input#cardPostalCode')
  await page.type('input#cardPostalCode', '608109');
  await page.waitForSelector('#validateButton');
  await page.click('#validateButton')
  await page.screenshot({ path: 'creditcardform02.png' });
  await browser.close();
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://ajayelamparithi.github.io/creditcardtest/');
  // await page.click('input#cardName');
  // await page.type('input#cardName', 'PRABAKARAN N');
  await page.click('input#cardNumber')
  await page.type('input#cardNumber', '5166400275016203');
  // await page.click('input#cardType')
  // await page.type('input#cardType', 'MasterCard');
  // await page.click('input#cardExpiration')
  // await page.type('input#cardExpiration', '02/27');
  // await page.click('input#cardSecurityCode')
  // await page.type('input#cardSecurityCode', '554');
  // await page.click('input#cardPostalCode')
  // await page.type('input#cardPostalCode', '608109');
  // await page.waitForSelector('#validateButton');
  // await page.click('#validateButton')
  await page.screenshot({ path: 'creditcardform03.png' });
  await browser.close();
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://ajayelamparithi.github.io/creditcardtest/');
  // await page.click('input#cardName');
  // await page.type('input#cardName', 'PRABAKARAN N');
  await page.click('input#cardNumber')
  await page.type('input#cardNumber', '4166400275016203');
  // await page.click('input#cardType')
  // await page.type('input#cardType', 'MasterCard');
  // await page.click('input#cardExpiration')
  // await page.type('input#cardExpiration', '02/27');
  // await page.click('input#cardSecurityCode')
  // await page.type('input#cardSecurityCode', '554');
  // await page.click('input#cardPostalCode')
  // await page.type('input#cardPostalCode', '608109');
  // await page.waitForSelector('#validateButton');
  // await page.click('#validateButton')
  await page.screenshot({ path: 'creditcardform04.png' });
  await browser.close();
})();

