const purchase_login_page = require('../pages/purchase_login_page');
const my_account_purchase_page = require('../pages/my_account_purchase_page');
const first_purchase_page = require('../pages/first_purchase_page');
const checkout_page = require('../pages/checkout_page');

Feature('first purchase');


Scenario('First Purchase', async ({ I, login}) => {
    await login('admin')
    I.amOnPage('/')

    //login
    //purchase_login_page.loginWithSuccess()

    //my account
    my_account_purchase_page.myAccountFirstPurchase()

    //purchase
    first_purchase_page.firstPurchase()

    //checkout
    checkout_page.checkoutFirstPurchase()


});