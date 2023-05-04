const { defineStep } = require('cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");
const { defineParameterType } = require('cucumber');
const assert = require('assert');

defineParameterType({
  name: 'moreOrLess',
  regexp: /more|less/,
  transformer: s => s.toLowerCase()
});


let driver;

defineStep('I open {string}', async function (url) {
  driver = await new Builder().forBrowser('chrome').build();
  await driver.get(url);
});

defineStep('I accept cookies', async function () {
  const acceptCookies = await driver.findElement(By.css('button:nth-of-type(2)'));
  await acceptCookies.click();
});

defineStep('I search for {string}', async function (query) {
  const input = await driver.findElement(By.name('q'));
  await input.sendKeys(query);
  await input.submit();
});

defineStep('I should see {moreOrLess} than {int} results', async function (moreOrLess, count) {
  const resultStats = await driver.wait(until.elementLocated(By.id('result-stats')), 150000);
  const resultText = await resultStats.getText();
  const matchRegex = resultText.match(/[\d.]+/g);
  const match = matchRegex[0];
  const numResults = Number(match.replace(/\./g, ''));

  let testResult = '';
  if (moreOrLess === 'more') {
    if (numResults > count) {
      console.log(`Test passed: found ${numResults} results`);
      testResult = 'passed';
    } else {
      console.log(`Test failed: found only ${numResults} results`);
      testResult = 'failed';
    }
  } else if (moreOrLess === 'less') {
    if (numResults < count) {
      console.log(`Test passed: found ${numResults} results`);
      testResult = 'passed';
    } else {
      console.log(`Test failed: found ${numResults} results`);
      testResult = 'failed';
    }
  } else {
    console.log(`Invalid condition: ${moreOrLess}. Please use 'more' or 'less'.`);
    testResult = 'failed';
  }

  if (driver.getSession() !== null) {
    await driver.quit();
  }

  if (testResult === 'failed') {
    const error = new Error('Test failed');
    error.stack = null;
    throw error;
  }
});


