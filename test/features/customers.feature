Feature: CRUD in Customers Page

    @TC002
    Scenario: Success Add New Customer
        Given User on Dashboard Page Kasir Aja Web
        When User choose Pelanggan Menu
        And User click button Add Customer
        And User input fields <name>, <hp>, <alamat> and <ket>
        And click Save button
        Then User should be show success alert <message>

    Examples: 
        | name       | hp         | alamat    | ket             | message                           |
        | Pak Basuki | 081999999  | Surabaya  | Pelanggan lama  | success item ditambahkan          |