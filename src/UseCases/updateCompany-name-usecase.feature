Feature: update company.

  Scenario Outline: Try to update company with invalid details, then it will throw error.
    Given User details name: "<name>" , newname: "<newname>" to Delete company
    When Try to update company
    Then It will throw error with message: "<message>" while updating company

    Examples: 
      | name  | newname | error           | message                 |
      |       |         | ValidationError | '"name" is required'    |
      | rapid |         | ValidationError | '"newname" is required' |

  Scenario Outline: Try to update company with invalid details, then it will throw error.
    Given User details name: "<name>" , newname: "<newname>" to Delete company
    When Try to update company
    Then It will give updated rowcount: "<rowcount>"
    Then updatecompany function will call <updateuserFunctionCallCount>  times

    Examples: 
      | name  | newname  | updateuserFunctionCallCount | rowcount |
      | rapid | rapidops |                           1 |        1 |
