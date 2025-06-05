var validacao = require('assert')
const { faker } = require('@faker-js/faker');
const home_page = require('../pages/home_page');
const login_page = require('../pages/login_page');
const create_user_page = require('../pages/create_user_page');
const my_account_page = require('../pages/my_account_page');

Feature('create new account');

Scenario('Create New Account', ({  I  }) => {

    var name = faker.name.firstName();
    var lastName = faker.name.lastName();

    console.log(`${name} ${lastName}`);
    
    I.amOnPage('/')

    //home
    home_page.accessLoginPage()

    //login
    login_page.submitCreateNewAccount(faker.internet.email())

    //create account
    create_user_page.createUserWithSuccess(name, lastName)
    create_user_page.registerUser()
    

    //my account
    my_account_page.validateUserLogged(name, lastName)

});