const { I } = inject();

module.exports = {
  fields: {
    firstName: '#customer_firstname',
    lastName: '#customer_lastname',
    password: '#passwd',
    day: '#days',
    month: '#months',
    year: '#years'
  },

  button: {
    genderSelect: 'Mrs.',
    registerButton: '#submitAccount'

  },

  messages: {

  },

  createUserWithSuccess(name, lastName) {
    I.click(this.button.genderSelect)
    I.fillField(this.fields.firstName, name)
    I.fillField(this.fields.lastName, lastName)
    I.scrollPageToBottom()
    I.fillField(this.fields.password, secret(321654))
    I.selectOption(this.fields.day, '28')
    I.selectOption(this.fields.month, '2')
    I.selectOption(this.fields.year, '2002')
    
  },

  registerUser() {
    I.click(this.button.registerButton)
  },

  
}