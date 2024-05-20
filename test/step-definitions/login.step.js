const { Given, When, Then } = require("@wdio/cucumber-framework");
const Page = require("../pages/page");
const loginPage = require("../pages/login.page");
const dashboardPage = require("../pages/dashboard.page");


Given(/^user visit login page Kasir Aja$/, async () => {
    await Page.open();
    await loginPage.assertLoginUrl();
})

When(/^user input fields with email "(.*?)" and password "(.*?)"$/, async (email, password) => {
    await loginPage.login(email, password);
})

Then(/^user direct to Dashboard page$/, async () => {
    await dashboardPage.assertDashboardUrl();
})