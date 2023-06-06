Feature: Add new company.

  Scenario Outline: Try to add company with invalid details, then it will throw error.
    Given User details name: "<name>", location:"<location>" to add company
    When Try to add company
    Then It will throw error with message: "<message>" while adding company

    Examples: 
      | name | location | error           | message                  |
      |      |          | ValidationError | '"name" is required'     |
      | sffs |          | ValidationError | '"location" is required' |

  Scenario Outline: Try to add company with valid details.
    Given User details name: "<name>", location:"<location>" to add company
    When Try to add company
    Then It will create new details: "<newuserdetail>"
    Then addcompany function will call <adduserFunctionCallCount>  times

    Examples: 
      | name     | location | adduserFunctionCallCount | newuserdetail   |
      | rapidops | ahemdad  |                        1 | djkseu4w88fhd |
