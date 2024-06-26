class LoginPage {

    get emailInput() {
        return $('//input[@id="email"]');
    }

    get passwordInput() {
        return $(`//input[@id='password']`);
    }

    get loginBtn() {
        return $(`//button[@type='submit']`);
    }

    async login (email, password) {
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.loginBtn.click();
    }

}

module.exports = new LoginPage();