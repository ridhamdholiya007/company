Feature: get company.

  Scenario Outline: Try to get company by name with invalid details, then it will throw error.
    Given User details name: "<name>", location:"<location>" to get company
    When Try to get company
    Then It will throw error with message: "<message>" while getting company by name

    Examples: 
      | name | location | error           | message                  |
      |      |          | ValidationError | '"name" is required'     |
      | sffs |          | ValidationError | '"location" is required' |