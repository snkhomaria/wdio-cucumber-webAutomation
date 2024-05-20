const Page = require('./page')

class CreateCustPage extends Page {
    get CreateCustPageUrl() {
        return 'https://kasirdemo.belajarqa.com/customers/create'
    }

    async assertCreateUrl() {
        await expect(browser).toHaveUrl(this.CreateCustPageUrl)
    }

    get nameCust() {
        return $(`//input[@id='nama']`);
    }

    get hpCust() {
        return $(`//input[@id='no.hp']`);
    }

    get alamatCust() {
        return $(`//input[@id='alamat']`);
    }

    get ketCust() {
        return $(`//input[@id='keterangan']`);
    }

    get submitCust() {
        return $(`//button[contains(text(),'simpan')]`);
    }

    async createCustomer(name, hp, alamat, ket) {
        await this.nameCust.setValue(name);
        await this.hpCust.setValue(hp);
        await this.alamatCustCust.setValue(alamat);
        await this.ketCust.setValue(ket);
        await this.submitCust.click();
    }
}

module.exports = new CreateCustPage();