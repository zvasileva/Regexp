export default class Validator {
  validateUsernameAllChars(username) {
    const resultValidChars = /[\w\-]/.exec(username);
    return resultValidChars !== null;
  }

  validateUsernameFirstLastChars(username) {
    const resultValidChars = /^[\d\-\_]|[\d\-\_]$/.exec(username);
    return resultValidChars !== null;
  }

  validateUsernameDigits(username) {
    const resultValidChars = /\d{3,}/.exec(username);
    return resultValidChars !== null;
  }

  validateUsername(username) {
    if (this.validateUsernameAllChars(username)) {
      if (!this.validateUsernameFirstLastChars(username)) {
        if (!this.validateUsernameDigits(username)) {
          return true;
        }
      }
    }
    return false;
  }
}
