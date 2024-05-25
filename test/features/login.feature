Feature: Login 

    @TC001
    Scenario: Success login with valid email and password
        Given user visit login page Kasir Aja
        When user input fields with email & password so click login button
        Then user direct to Dashboard page

