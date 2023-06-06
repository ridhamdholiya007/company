Feature: Get all company.

  Scenario Outline: Try to get allcompany with invalid details, then it will throw error.
    Given User details needed to get allcompany
    When Try to get allcompany
    Then It will give details: "<companydetail>"
    Then getallcompany function will call <getallcompanyFunctionCallCount>  times

    Examples: 
      | getallcompanyFunctionCallCount | companydetail                                                                     |
      |                              1 | '[{"google"},{"rapidps"}]' |
