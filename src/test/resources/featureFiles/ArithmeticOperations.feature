Feature: Arithmetic Operations

  @Sanity @Addition
  Scenario Outline: Addition of Two numbers
    Given that the user passes NumberOne as <Num1> and NumberTwo as <Num2>
    When user performs Addition Operation
    Then the sum should be <Result>

    Examples: 
      | Num1 | Num2 | Result |
      |   10 |   20 |     30 |
      |   10 |  -20 |    -10 |
      |   -1 |   -5 |     -6 |

  @Sanity @Subtraction
  Scenario Outline: Subtraction of Two numbers
    Given that the user passes NumberOne as <Num1> and NumberTwo as <Num2>
    When user performs Subtraction Operation
    Then the sum should be <Result>

    Examples: 
      | Num1 | Num2 | Result |
      |   20 |   10 |     10 |
      |   10 |  -20 |     30 |
      |   -1 |   -5 |      4 |

  @Sanity @Multiplication
  Scenario Outline: Multiplication of Two numbers
    Given that the user passes NumberOne as <Num1> and NumberTwo as <Num2>
    When user performs Multiplication Operation
    Then the sum should be <Result>

    Examples: 
      | Num1 | Num2 | Result |
      |   10 |   20 |    200 |
      |   10 |  -20 |   -200 |
      |   -1 |   -5 |      5 |
