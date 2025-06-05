const { I } = inject();

module.exports = {
validateUserLogged(name, lastName) {
    I.see(`${name} ${lastName}`)
  }
}
