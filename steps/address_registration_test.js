const address_registration_page = require('../pages/address_registration_page');
const purchase_login_page = require('../pages/purchase_login_page');
const myAccount_address_page = require('../pages/myAccount_address_page');
const address_purchase_page = require('../pages/address_purchase_page');

Feature('Address Registration');

Scenario('First Addres Registration',  ({ I }) => {
    
    I.amOnPage('/')

    //home
    purchase_login_page.loginWithSuccess()

    //my account
    myAccount_address_page.validateLogin()

    //purchase
    address_purchase_page.firstPurchaseAddres()

    //address registration
    address_registration_page.firstAddressRegistration()
});