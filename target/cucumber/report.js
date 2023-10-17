$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/multiplication.feature");
formatter.feature({
  "line": 1,
  "name": "Users are able to send their multiplication",
  "description": "attempts, which may be correct or not. When users\nsend a correct attempt, they get a response indicating\nthat the result is the right one. Also, they get points\nand potentially some badges when they are right, so they\nget motivation to come back and keep playing. Badges are\nwon for the first right attempt and when the user gets 100,\n500 and 999 points respectively. If users send a wrong\nattempt, they don\u0027t get any point or badge.",
  "id": "users-are-able-to-send-their-multiplication",
  "keyword": "Feature"
});
formatter.before({
  "duration": 93406877,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "The user sends a first right attempt and gets a badge",
  "description": "",
  "id": "users-are-able-to-send-their-multiplication;the-user-sends-a-first-right-attempt-and-gets-a-badge",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "the user john_snow sends 1 right attempts",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the user gets a response indicating the attempt is right",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "the user gets 10 points for the attempt",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user gets the FIRST_WON badge",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "john_snow",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 25
    },
    {
      "val": "right",
      "offset": 27
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_sends_attempts(String,int,String)"
});
formatter.result({
  "duration": 33741365,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "right",
      "offset": 51
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_gets_a_response_indicating_the_attempt_is(String)"
});
formatter.result({
  "duration": 1474854,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 14
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_gets_points_for_the_attempt(int)"
});
formatter.result({
  "duration": 2033093340,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FIRST_WON",
      "offset": 18
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_gets_the_type_badge(String)"
});
formatter.result({
  "duration": 2052771506,
  "status": "passed"
});
formatter.before({
  "duration": 104223675,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "The user sends a second right attempt and gets points only",
  "description": "",
  "id": "users-are-able-to-send-their-multiplication;the-user-sends-a-second-right-attempt-and-gets-points-only",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "the user john_snow sends 1 right attempts",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "the user gets the FIRST_WON badge",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the user john_snow sends 1 right attempts",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the user gets a response indicating the attempt is right",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "the user gets 10 points for the attempt",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the user does not get any badge",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "john_snow",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 25
    },
    {
      "val": "right",
      "offset": 27
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_sends_attempts(String,int,String)"
});
formatter.result({
  "duration": 45024569,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FIRST_WON",
      "offset": 18
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_gets_the_type_badge(String)"
});
formatter.result({
  "duration": 2018969432,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john_snow",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 25
    },
    {
      "val": "right",
      "offset": 27
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_sends_attempts(String,int,String)"
});
formatter.result({
  "duration": 24989950,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "right",
      "offset": 51
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_gets_a_response_indicating_the_attempt_is(String)"
});
formatter.result({
  "duration": 145204,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 14
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_gets_points_for_the_attempt(int)"
});
formatter.result({
  "duration": 2020988400,
  "status": "passed"
});
formatter.match({
  "location": "MultiplicationFeatureSteps.the_user_does_not_get_any_badge()"
});
formatter.result({
  "duration": 19194144,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 25,
      "value": "# Checks the Bronze, Silver and Gold badges"
    }
  ],
  "line": 26,
  "name": "The user sends a right attempt after \u003cprevious_attempts\u003e right attempts and then gets a badge \u003cbadge_name\u003e",
  "description": "",
  "id": "users-are-able-to-send-their-multiplication;the-user-sends-a-right-attempt-after-\u003cprevious-attempts\u003e-right-attempts-and-then-gets-a-badge-\u003cbadge-name\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "the user john_snow sends \u003cprevious_attempts\u003e right attempts",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "the user john_snow sends 1 right attempts",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "the user gets a response indicating the attempt is right",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "the user gets 10 points for the attempt",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the user gets the \u003cbadge_name\u003e badge",
  "keyword": "And "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "users-are-able-to-send-their-multiplication;the-user-sends-a-right-attempt-after-\u003cprevious-attempts\u003e-right-attempts-and-then-gets-a-badge-\u003cbadge-name\u003e;",
  "rows": [
    {
      "cells": [
        "previous_attempts",
        "badge_name"
      ],
      "line": 34,
      "id": "users-are-able-to-send-their-multiplication;the-user-sends-a-right-attempt-after-\u003cprevious-attempts\u003e-right-attempts-and-then-gets-a-badge-\u003cbadge-name\u003e;;1"
    },
    {
      "cells": [
        "9",
        "BRONZE_MULTIPLICATOR"
      ],
      "line": 35,
      "id": "users-are-able-to-send-their-multiplication;the-user-sends-a-right-attempt-after-\u003cprevious-attempts\u003e-right-attempts-and-then-gets-a-badge-\u003cbadge-name\u003e;;2"
    },
    {
      "cells": [
        "49",
        "SILVER_MULTIPLICATOR"
      ],
      "line": 36,
      "id": "users-are-able-to-send-their-multiplication;the-user-sends-a-right-attempt-after-\u003cprevious-attempts\u003e-right-attempts-and-then-gets-a-badge-\u003cbadge-name\u003e;;3"
    },
    {
      "cells": [
        "99",
        "GOLD_MULTIPLICATOR"
      ],
      "line": 37,
      "id": "users-are-able-to-send-their-multiplication;the-user-sends-a-right-attempt-after-\u003cprevious-attempts\u003e-right-attempts-and-then-gets-a-badge-\u003cbadge-name\u003e;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 62163165,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "The user sends a right attempt after 9 right attempts and then gets a badge BRONZE_MULTIPLICATOR",
  "description": "",
  "id": "users-are-able-to-send-their-multiplication;the-user-sends-a-right-attempt-after-\u003cprevious-attempts\u003e-right-attempts-and-then-gets-a-badge-\u003cbadge-name\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "the user john_snow sends 9 right attempts",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "the user john_snow sends 1 right attempts",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "the user gets a response indicating the attempt is right",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "the user gets 10 points for the attempt",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the user gets the BRONZE_MULTIPLICATOR badge",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "john_snow",
      "offset": 9
    },
    {
      "val": "9",
      "offset": 25
    },
    {
      "val": "right",
      "offset": 27
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_sends_attempts(String,int,String)"
});
formatter.result({
  "duration": 306100509,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john_snow",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 25
    },
    {
      "val": "right",
      "offset": 27
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_sends_attempts(String,int,String)"
});
formatter.result({
  "duration": 35231389,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "right",
      "offset": 51
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_gets_a_response_indicating_the_attempt_is(String)"
});
formatter.result({
  "duration": 93153,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 14
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_gets_points_for_the_attempt(int)"
});
formatter.result({
  "duration": 2018982553,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BRONZE_MULTIPLICATOR",
      "offset": 18
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_gets_the_type_badge(String)"
});
formatter.result({
  "duration": 2019077213,
  "status": "passed"
});
formatter.before({
  "duration": 116555901,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "The user sends a right attempt after 49 right attempts and then gets a badge SILVER_MULTIPLICATOR",
  "description": "",
  "id": "users-are-able-to-send-their-multiplication;the-user-sends-a-right-attempt-after-\u003cprevious-attempts\u003e-right-attempts-and-then-gets-a-badge-\u003cbadge-name\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "the user john_snow sends 49 right attempts",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "the user john_snow sends 1 right attempts",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "the user gets a response indicating the attempt is right",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "the user gets 10 points for the attempt",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the user gets the SILVER_MULTIPLICATOR badge",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "john_snow",
      "offset": 9
    },
    {
      "val": "49",
      "offset": 25
    },
    {
      "val": "right",
      "offset": 28
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_sends_attempts(String,int,String)"
});
formatter.result({
  "duration": 1917771280,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john_snow",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 25
    },
    {
      "val": "right",
      "offset": 27
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_sends_attempts(String,int,String)"
});
formatter.result({
  "duration": 26052940,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "right",
      "offset": 51
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_gets_a_response_indicating_the_attempt_is(String)"
});
formatter.result({
  "duration": 230649,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 14
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_gets_points_for_the_attempt(int)"
});
formatter.result({
  "duration": 2015389101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SILVER_MULTIPLICATOR",
      "offset": 18
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_gets_the_type_badge(String)"
});
formatter.result({
  "duration": 2017578537,
  "status": "passed"
});
formatter.before({
  "duration": 138225112,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "The user sends a right attempt after 99 right attempts and then gets a badge GOLD_MULTIPLICATOR",
  "description": "",
  "id": "users-are-able-to-send-their-multiplication;the-user-sends-a-right-attempt-after-\u003cprevious-attempts\u003e-right-attempts-and-then-gets-a-badge-\u003cbadge-name\u003e;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "the user john_snow sends 99 right attempts",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "the user john_snow sends 1 right attempts",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "the user gets a response indicating the attempt is right",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "the user gets 10 points for the attempt",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the user gets the GOLD_MULTIPLICATOR badge",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "john_snow",
      "offset": 9
    },
    {
      "val": "99",
      "offset": 25
    },
    {
      "val": "right",
      "offset": 28
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_sends_attempts(String,int,String)"
});
formatter.result({
  "duration": 2805568293,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john_snow",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 25
    },
    {
      "val": "right",
      "offset": 27
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_sends_attempts(String,int,String)"
});
formatter.result({
  "duration": 34889092,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "right",
      "offset": 51
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_gets_a_response_indicating_the_attempt_is(String)"
});
formatter.result({
  "duration": 195289,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 14
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_gets_points_for_the_attempt(int)"
});
formatter.result({
  "duration": 2014381527,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GOLD_MULTIPLICATOR",
      "offset": 18
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_gets_the_type_badge(String)"
});
formatter.result({
  "duration": 2013783487,
  "status": "passed"
});
});