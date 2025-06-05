const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  name: 'automacao-codeceptjs-webdriver',
  tests: './steps/*first_purchase_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://www.automationpractice.pl/index.php',
      browser: 'chrome',
      waitForTimeout: 5000,
      timeout: 20000,
      desiredCapabilities: {
        chromeOptions: {}
      },
    }
  },
  include: {
    I: './steps_file.js',
    home_page: "./pages/home_page.js",
    login_page: "./pages/login_page.js",
    create_user_page: "./pages/create_user_page.js",
    my_account_page: "./pages/my_account_page.js",
    purchase_login_page: "./pages/purchase_login_page.js",
    my_account_purchase_page: "./pages/my_account_purchase_page.js",
    first_purchase_page: "./pages/first_purchase_page.js",
    checkout_page: "./pages/checkout_page.js",
    address_registration_page: "./pages/address_registration_page.js",
    myAccount_address_page: "./pages/myAccount_address_page.js",
    address_purchase_pagePage: "./pages/address_purchase_page.js",
    wrong_login_page: "./pages/wrong_login_page.js",
  },
  bootstrap: null,
  teardown: null,
  mocha: {},
  plugins: {
    mocha: {
      reporterOptions: {}
    },
    autoLogin: {
  enabled: true,
  saveToFile: true,
  inject: 'login',
  users: {
    admin: {
      login: (I) => {
        I.amOnPage('/');
        I.click('.login')
        I.fillField('#email', 'isa123@teste.com')
        I.fillField('#passwd', secret(123456789))
        I.click('#SubmitLogin')

      },
      check: (I) => {
         I.amOnPage('/');
         I.see('Isa Teste');
      }
    }
  }
},
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },

  }

}