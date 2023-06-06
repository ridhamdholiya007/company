Feature: Delete company.

  Scenario Outline: Try to Delete company with invalid details, then it will throw error.
    Given User details name: "<name>" to Delete company
    When Try to Delete company
    Then It will throw error with message: "<message>" while Deleting company

    Examples: 
      | name | error           | message              |
      |      | ValidationError | '"name" is required' |

  Scenario Outline: Try to Delete company with invalid details, then it will throw error.
    Given User details name: "<name>" to Delete company
    When Try to Delete company
    Then It will give rowcount: "<rowcount>"
    Then deletecompany function will call <deleteuserFunctionCallCount>  times

    Examples: 
      | name     | deleteuserFunctionCallCount | rowcount |
      | rapidops |                           1 |        1 |
