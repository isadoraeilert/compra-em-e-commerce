var validacao = require('assert')
const wrong_login_page = require('../pages/wrong_login_page');

Feature('Login');

Scenario('No Email Login', ({ I }) => {
    I.amOnPage('/')
    wrong_login_page.noEmailLogin()

});

Scenario('No Password Login', ({ I }) => {
    I.amOnPage('/')
    wrong_login_page.noPasswordLogin()

});

Scenario('Empty Login', ({ I }) => {
    I.amOnPage('/')
    wrong_login_page.emptyLogin()

});

Scenario('Login with Success', async ({ I }) => {
    I.amOnPage('/')
    wrong_login_page.successLogin()

});