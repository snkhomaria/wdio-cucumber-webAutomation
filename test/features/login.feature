Feature: Login 

    @TC001
    Scenario: Success login with valid email and password
        Given user visit login page Kasir Aja
        When user input fields with email <email> and password <password>
        Then user direct to Dashboard page

    Examples: 
        | email         | password |
        | ria@mail.com  | 123456   |