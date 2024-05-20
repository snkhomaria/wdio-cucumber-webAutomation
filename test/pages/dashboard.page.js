const Page = require('./page')

class DashboardPage extends Page {
    get dashboardPageUrl() {
        return 'https://kasirdemo.belajarqa.com/dashboard'
    }

    async assertDashboardUrl() {
        await expect(browser).toHaveUrl(this.dashboardPageUrl)
    }

    get pelangganMenu() {
        return $(`//a[@href='/customers']/div/div/div[text()='pelanggan']`);
    }

    async dashboard() {
        await this.pelangganMenu.click();
    }
}

module.exports = new DashboardPage();