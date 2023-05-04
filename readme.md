# Automated Test for Google Search Results
This project aims to automate the testing of Google Search Results for the keyword "Orange Bank" using JavaScript and Gherkin.

## Installation
Clone project or download and extract the .zip file.
Make sure you have Node.js installed on your machine. If not, download and install it from https://nodejs.org.
Open a terminal or command prompt and navigate to the project directory.

Activate the virtualenv:
```
.\env\Scripts\Activate.ps1
```

Run `npm install` to install the required dependencies.

## Running the Tests
Open a terminal or command prompt and navigate to the project directory.
Run `npm test` to execute the automated tests.

## Test Scenarios
The following scenarios are automated as part of this project:

1. Google Search for Orange Bank - Open google.es, search for "Orange Bank", and check that more than 100,000 results are returned. If the test passes, report "OK". If the test fails, report "NOK".
2. Google Search for Orange Bank - Invalid Result Count - Open google.es, search for "Orange Bank", and check that less than 10,000 results are returned. If the test passes, report "NOK". If the test fails, report "OK".

## Dependencies
The following dependencies are included in the package.json file:

+ cucumber
+ selenium-webdriver
+ chromedriver

These dependencies will be installed automatically when running npm install