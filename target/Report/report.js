$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:featureFiles/ArithmeticOperations.feature");
formatter.feature({
  "name": "Arithmetic Operations",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Addition of Two numbers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Addition"
    }
  ]
});
formatter.step({
  "name": "that the user passes NumberOne as \u003cNum1\u003e and NumberTwo as \u003cNum2\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "user performs Addition Operation",
  "keyword": "When "
});
formatter.step({
  "name": "the sum should be \u003cResult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Num1",
        "Num2",
        "Result"
      ]
    },
    {
      "cells": [
        "10",
        "20",
        "30"
      ]
    },
    {
      "cells": [
        "10",
        "-20",
        "-10"
      ]
    },
    {
      "cells": [
        "-1",
        "-5",
        "-6"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Addition of Two numbers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Addition"
    }
  ]
});
formatter.step({
  "name": "that the user passes NumberOne as 10 and NumberTwo as 20",
  "keyword": "Given "
});
formatter.match({
  "location": "ArithmeticOperationsSteps.that_the_user_passes_NumberOne_as_and_NumberTwo_as(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user performs Addition Operation",
  "keyword": "When "
});
formatter.match({
  "location": "ArithmeticOperationsSteps.user_performs_Addition_Operation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the sum should be 30",
  "keyword": "Then "
});
formatter.match({
  "location": "ArithmeticOperationsSteps.the_sum_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Addition of Two numbers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Addition"
    }
  ]
});
formatter.step({
  "name": "that the user passes NumberOne as 10 and NumberTwo as -20",
  "keyword": "Given "
});
formatter.match({
  "location": "ArithmeticOperationsSteps.that_the_user_passes_NumberOne_as_and_NumberTwo_as(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user performs Addition Operation",
  "keyword": "When "
});
formatter.match({
  "location": "ArithmeticOperationsSteps.user_performs_Addition_Operation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the sum should be -10",
  "keyword": "Then "
});
formatter.match({
  "location": "ArithmeticOperationsSteps.the_sum_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Addition of Two numbers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Addition"
    }
  ]
});
formatter.step({
  "name": "that the user passes NumberOne as -1 and NumberTwo as -5",
  "keyword": "Given "
});
formatter.match({
  "location": "ArithmeticOperationsSteps.that_the_user_passes_NumberOne_as_and_NumberTwo_as(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user performs Addition Operation",
  "keyword": "When "
});
formatter.match({
  "location": "ArithmeticOperationsSteps.user_performs_Addition_Operation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the sum should be -6",
  "keyword": "Then "
});
formatter.match({
  "location": "ArithmeticOperationsSteps.the_sum_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Subtraction of Two numbers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Subtraction"
    }
  ]
});
formatter.step({
  "name": "that the user passes NumberOne as \u003cNum1\u003e and NumberTwo as \u003cNum2\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "user performs Subtraction Operation",
  "keyword": "When "
});
formatter.step({
  "name": "the sum should be \u003cResult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Num1",
        "Num2",
        "Result"
      ]
    },
    {
      "cells": [
        "20",
        "10",
        "10"
      ]
    },
    {
      "cells": [
        "10",
        "-20",
        "30"
      ]
    },
    {
      "cells": [
        "-1",
        "-5",
        "4"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Subtraction of Two numbers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Subtraction"
    }
  ]
});
formatter.step({
  "name": "that the user passes NumberOne as 20 and NumberTwo as 10",
  "keyword": "Given "
});
formatter.match({
  "location": "ArithmeticOperationsSteps.that_the_user_passes_NumberOne_as_and_NumberTwo_as(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user performs Subtraction Operation",
  "keyword": "When "
});
formatter.match({
  "location": "ArithmeticOperationsSteps.user_performs_Subtraction_Operation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the sum should be 10",
  "keyword": "Then "
});
formatter.match({
  "location": "ArithmeticOperationsSteps.the_sum_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Subtraction of Two numbers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Subtraction"
    }
  ]
});
formatter.step({
  "name": "that the user passes NumberOne as 10 and NumberTwo as -20",
  "keyword": "Given "
});
formatter.match({
  "location": "ArithmeticOperationsSteps.that_the_user_passes_NumberOne_as_and_NumberTwo_as(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user performs Subtraction Operation",
  "keyword": "When "
});
formatter.match({
  "location": "ArithmeticOperationsSteps.user_performs_Subtraction_Operation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the sum should be 30",
  "keyword": "Then "
});
formatter.match({
  "location": "ArithmeticOperationsSteps.the_sum_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Subtraction of Two numbers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Subtraction"
    }
  ]
});
formatter.step({
  "name": "that the user passes NumberOne as -1 and NumberTwo as -5",
  "keyword": "Given "
});
formatter.match({
  "location": "ArithmeticOperationsSteps.that_the_user_passes_NumberOne_as_and_NumberTwo_as(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user performs Subtraction Operation",
  "keyword": "When "
});
formatter.match({
  "location": "ArithmeticOperationsSteps.user_performs_Subtraction_Operation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the sum should be 4",
  "keyword": "Then "
});
formatter.match({
  "location": "ArithmeticOperationsSteps.the_sum_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Multiplication of Two numbers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Multiplication"
    }
  ]
});
formatter.step({
  "name": "that the user passes NumberOne as \u003cNum1\u003e and NumberTwo as \u003cNum2\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "user performs Multiplication Operation",
  "keyword": "When "
});
formatter.step({
  "name": "the sum should be \u003cResult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Num1",
        "Num2",
        "Result"
      ]
    },
    {
      "cells": [
        "10",
        "20",
        "200"
      ]
    },
    {
      "cells": [
        "10",
        "-20",
        "-200"
      ]
    },
    {
      "cells": [
        "-1",
        "-5",
        "5"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Multiplication of Two numbers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Multiplication"
    }
  ]
});
formatter.step({
  "name": "that the user passes NumberOne as 10 and NumberTwo as 20",
  "keyword": "Given "
});
formatter.match({
  "location": "ArithmeticOperationsSteps.that_the_user_passes_NumberOne_as_and_NumberTwo_as(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user performs Multiplication Operation",
  "keyword": "When "
});
formatter.match({
  "location": "ArithmeticOperationsSteps.user_performs_Multiplication_Operation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the sum should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ArithmeticOperationsSteps.the_sum_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Multiplication of Two numbers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Multiplication"
    }
  ]
});
formatter.step({
  "name": "that the user passes NumberOne as 10 and NumberTwo as -20",
  "keyword": "Given "
});
formatter.match({
  "location": "ArithmeticOperationsSteps.that_the_user_passes_NumberOne_as_and_NumberTwo_as(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user performs Multiplication Operation",
  "keyword": "When "
});
formatter.match({
  "location": "ArithmeticOperationsSteps.user_performs_Multiplication_Operation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the sum should be -200",
  "keyword": "Then "
});
formatter.match({
  "location": "ArithmeticOperationsSteps.the_sum_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Multiplication of Two numbers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Multiplication"
    }
  ]
});
formatter.step({
  "name": "that the user passes NumberOne as -1 and NumberTwo as -5",
  "keyword": "Given "
});
formatter.match({
  "location": "ArithmeticOperationsSteps.that_the_user_passes_NumberOne_as_and_NumberTwo_as(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user performs Multiplication Operation",
  "keyword": "When "
});
formatter.match({
  "location": "ArithmeticOperationsSteps.user_performs_Multiplication_Operation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the sum should be 5",
  "keyword": "Then "
});
formatter.match({
  "location": "ArithmeticOperationsSteps.the_sum_should_be(int)"
});
formatter.result({
  "status": "passed"
});
});