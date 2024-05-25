const { Given, When, Then } = require("@wdio/cucumber-framework");
const Page = require("../pages/page.js");
const loginPage = require("../pages/login.page.js");
const dashboardPage = require("../pages/dashboard.page.js");


Given(/^user visit login page Kasir Aja$/, async () => {
    await Page.open('/login');
})

When(/^user input fields with email & password so click login button$/, async () => {
    await loginPage.login('ria@mail', '123456');
})

Then(/^user direct to Dashboard page$/, async () => {
    await dashboardPage.assertDashboardUrl();
})