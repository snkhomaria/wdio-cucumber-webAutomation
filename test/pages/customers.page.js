class CustomerPage {
    get customerPageUrl() {
        return 'https://kasirdemo.belajarqa.com/customers'
    }

    async assertCustomerUrl() {
        await expect(browser).toHaveUrl(this.customerPageUrl)
    }

    get addBtn() {
        return $(`//a[@href='/customers/create']`);
    }

    async customer() {
        await this.addBtn.click();
    }

    get msgSuccessCreate() {
        return $(`//ul[@id='chakra-toast-manager-bottom-right']`);
    }

    async assertCreate(message) {
        await expect(this.msgSuccessCreate).toHaveContaining(message);
    }

}

module.exports = new CustomerPage();