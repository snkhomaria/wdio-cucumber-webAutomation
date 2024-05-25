const { Given, When, Then } = require("@wdio/cucumber-framework");
// const Page = require("../pages/page");
const dashboardPage = require("../pages/dashboard.page.js");
const customerPage = require("../pages/customers.page.js");
const createPage = require("../pages/custCreate.page.js");


Given(/^User on Dashboard Page Kasir Aja Web$/, async () => {
    await dashboardPage.assertDashboardUrl();
})

When(/^User choose Pelanggan Menu$/, async () => {
    await dashboardPage.dashboard();
})

When(/^User click button Add Customer$/, async () => {
    await customerPage.assertCustomerUrl();
    await customerPage.customer();
})

When(/^User input fields "(.*?)", "(.*?)", "(.*?)" and "(.*?)"$/, async (name, hp, alamat, ket) => {
    await customerPage.assertCreateUrl();
    await createPage.createCustomer(name, hp, alamat, ket);
})

Then(/^User should be show success alert "(.*?)"$/, async (message) => {
    await customerPage.assertCustomerUrl();
    await customerPage.assertCreate(message);
})