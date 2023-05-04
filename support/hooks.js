const { Before, After } = require('cucumber');
const { Builder } = require('selenium-webdriver');

let driver;

Before(async function () {
  driver = await new Builder().forBrowser('chrome').build();
});

After(async function () {
  await driver.quit();
});
