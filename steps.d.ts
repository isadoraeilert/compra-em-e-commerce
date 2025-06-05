/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type home_page = typeof import('./pages/home_page.js');
type login_page = typeof import('./pages/login_page.js');
type create_user_page = typeof import('./pages/create_user_page.js');
type my_account_page = typeof import('./pages/my_account_page.js');
type purchase_login_page = typeof import('./pages/purchase_login_page.js');
type my_account_purchase_page = typeof import('./pages/my_account_purchase_page.js');
type first_purchase_page = typeof import('./pages/first_purchase_page.js');
type checkout_page = typeof import('./pages/checkout_page.js');
type address_registration_page = typeof import('./pages/address_registration_page.js');
type myAccount_address_page = typeof import('./pages/myAccount_address_page.js');
type address_purchase_pagePage = typeof import('./pages/address_purchase_page.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, home_page: home_page, login_page: login_page, create_user_page: create_user_page, my_account_page: my_account_page, purchase_login_page: purchase_login_page, my_account_purchase_page: my_account_purchase_page, first_purchase_page: first_purchase_page, checkout_page: checkout_page, address_registration_page: address_registration_page, myAccount_address_page: myAccount_address_page, address_purchase_pagePage: address_purchase_pagePage }
  interface Methods extends WebDriver {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
