$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:resources/featureFiles/Acceptance.feature");
formatter.feature({
  "name": "Validate API’s are fit for the purpose in the use of the exchange rate for financial",
  "description": "reasons",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Acceptance"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Foreign Exchange Rates API is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "AcceptanceStepDefinition.givenAPI()"
});
formatter.write("URI under test -https://api.ratesapi.io/api");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To assert the success status code  of the latest date",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Acceptance"
    }
  ]
});
formatter.step({
  "name": "Hit the API with end point as \"/latest\"",
  "keyword": "When "
});
formatter.match({
  "location": "AcceptanceStepDefinition.hitAPI(String)"
});
formatter.write("Hiting API with specific endpoint /latest and getting response");
formatter.write("Request of the response is io.restassured.internal.RestAssuredResponseImpl@5af28b27");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API should return the status code as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "AcceptanceStepDefinition.getStatusCode(Integer)"
});
formatter.write("Extracting status code to validate");
formatter.write("Reponse code recived 200");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Foreign Exchange Rates API is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "AcceptanceStepDefinition.givenAPI()"
});
formatter.write("URI under test -https://api.ratesapi.io/api");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "assert the correct response - content of the latest date data response",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Acceptance"
    }
  ]
});
formatter.step({
  "name": "Hit the API with end point as \"/latest?base\u003dUSD\"",
  "keyword": "When "
});
formatter.match({
  "location": "AcceptanceStepDefinition.hitAPI(String)"
});
formatter.write("Hiting API with specific endpoint /latest?base\u003dUSD and getting response");
formatter.write("Request of the response is io.restassured.internal.RestAssuredResponseImpl@2755d705");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "base value should be \"USD\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AcceptanceStepDefinition.validateBase(String)"
});
formatter.write("Verifying base value");
formatter.write("Base Value Received USD");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Foreign Exchange Rates API is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "AcceptanceStepDefinition.givenAPI()"
});
formatter.write("URI under test -https://api.ratesapi.io/api");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Hit the API with incorrect endpoint \"latest?base\u003dXXX\" and validate the message",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Acceptance"
    }
  ]
});
formatter.step({
  "name": "Hit the API with end point as \"latest?base\u003dXXX\"",
  "keyword": "When "
});
formatter.match({
  "location": "AcceptanceStepDefinition.hitAPI(String)"
});
formatter.write("Hiting API with specific endpoint latest?base\u003dXXX and getting response");
formatter.write("Request of the response is io.restassured.internal.RestAssuredResponseImpl@5649ec46");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API should return the status code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "AcceptanceStepDefinition.getStatusCode(Integer)"
});
formatter.write("Extracting status code to validate");
formatter.write("Reponse code recived 400");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message should displayed as \"Base \u0027XXX\u0027 is not supported.\"",
  "keyword": "And "
});
formatter.match({
  "location": "AcceptanceStepDefinition.validateErrorMessage(String)"
});
formatter.write("Verifying error message for incorrect endpoint");
formatter.write("Error message receivedBase \u0027XXX\u0027 is not supported.");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Foreign Exchange Rates API is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "AcceptanceStepDefinition.givenAPI()"
});
formatter.write("URI under test -https://api.ratesapi.io/api");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To assert the success status of past conversion rates response",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Acceptance"
    }
  ]
});
formatter.step({
  "name": "Hit the API with end point as \"/2010-01-12\"",
  "keyword": "When "
});
formatter.match({
  "location": "AcceptanceStepDefinition.hitAPI(String)"
});
formatter.write("Hiting API with specific endpoint /2010-01-12 and getting response");
formatter.write("Request of the response is io.restassured.internal.RestAssuredResponseImpl@3c5a54b7");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API should return the status code as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "AcceptanceStepDefinition.getStatusCode(Integer)"
});
formatter.write("Extracting status code to validate");
formatter.write("Reponse code recived 200");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Foreign Exchange Rates API is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "AcceptanceStepDefinition.givenAPI()"
});
formatter.write("URI under test -https://api.ratesapi.io/api");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "assert the correct response - content of the past conversion rates response",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Acceptance"
    }
  ]
});
formatter.step({
  "name": "Hit the API with end point as \"/2010-01-12?base\u003dINR\"",
  "keyword": "When "
});
formatter.match({
  "location": "AcceptanceStepDefinition.hitAPI(String)"
});
formatter.write("Hiting API with specific endpoint /2010-01-12?base\u003dINR and getting response");
formatter.write("Request of the response is io.restassured.internal.RestAssuredResponseImpl@577f9109");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "base value should be \"INR\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AcceptanceStepDefinition.validateBase(String)"
});
formatter.write("Verifying base value");
formatter.write("Base Value Received INR");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Foreign Exchange Rates API is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "AcceptanceStepDefinition.givenAPI()"
});
formatter.write("URI under test -https://api.ratesapi.io/api");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Hit the API with future date and validate current date data should present",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Acceptance"
    }
  ]
});
formatter.step({
  "name": "Hit the API with end point as \"/2021-05-12\"",
  "keyword": "When "
});
formatter.match({
  "location": "AcceptanceStepDefinition.hitAPI(String)"
});
formatter.write("Hiting API with specific endpoint /2021-05-12 and getting response");
formatter.write("Request of the response is io.restassured.internal.RestAssuredResponseImpl@6569dded");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API should return the current date rates",
  "keyword": "Then "
});
formatter.match({
  "location": "AcceptanceStepDefinition.validateDate()"
});
formatter.write("Verifying current date data should return even if the endpoint is of future date");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:resources/featureFiles/Regression.feature");
formatter.feature({
  "name": "Validate API’s are fit for purpose in the use of the exchange rate for financial reasons",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To assert the success status code  of the latest date",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Hit the API with end point as \"\u003cendpoint\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "API should return the status code as \u003cstatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "endpoint",
        "status"
      ]
    },
    {
      "cells": [
        "/latest",
        "200"
      ]
    },
    {
      "cells": [
        "/latest?symbols\u003dUSD,GBP",
        "200"
      ]
    },
    {
      "cells": [
        "/latest?base\u003dUSD",
        "200"
      ]
    },
    {
      "cells": [
        "/latest?base\u003dUSD\u0026symbols\u003dGBP",
        "200"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Foreign Exchange Rates API is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "AcceptanceStepDefinition.givenAPI()"
});
formatter.write("URI under test -https://api.ratesapi.io/api");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To assert the success status code  of the latest date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "Hit the API with end point as \"/latest\"",
  "keyword": "When "
});
formatter.match({
  "location": "AcceptanceStepDefinition.hitAPI(String)"
});
formatter.write("Hiting API with specific endpoint /latest and getting response");
formatter.write("Request of the response is io.restassured.internal.RestAssuredResponseImpl@54da32dc");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API should return the status code as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "AcceptanceStepDefinition.getStatusCode(Integer)"
});
formatter.write("Extracting status code to validate");
formatter.write("Reponse code recived 200");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Foreign Exchange Rates API is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "AcceptanceStepDefinition.givenAPI()"
});
formatter.write("URI under test -https://api.ratesapi.io/api");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To assert the success status code  of the latest date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "Hit the API with end point as \"/latest?symbols\u003dUSD,GBP\"",
  "keyword": "When "
});
formatter.match({
  "location": "AcceptanceStepDefinition.hitAPI(String)"
});
formatter.write("Hiting API with specific endpoint /latest?symbols\u003dUSD,GBP and getting response");
formatter.write("Request of the response is io.restassured.internal.RestAssuredResponseImpl@368d5c00");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API should return the status code as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "AcceptanceStepDefinition.getStatusCode(Integer)"
});
formatter.write("Extracting status code to validate");
formatter.write("Reponse code recived 200");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Foreign Exchange Rates API is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "AcceptanceStepDefinition.givenAPI()"
});
formatter.write("URI under test -https://api.ratesapi.io/api");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To assert the success status code  of the latest date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "Hit the API with end point as \"/latest?base\u003dUSD\"",
  "keyword": "When "
});
formatter.match({
  "location": "AcceptanceStepDefinition.hitAPI(String)"
});
formatter.write("Hiting API with specific endpoint /latest?base\u003dUSD and getting response");
formatter.write("Request of the response is io.restassured.internal.RestAssuredResponseImpl@5116ac09");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API should return the status code as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "AcceptanceStepDefinition.getStatusCode(Integer)"
});
formatter.write("Extracting status code to validate");
formatter.write("Reponse code recived 200");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Foreign Exchange Rates API is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "AcceptanceStepDefinition.givenAPI()"
});
formatter.write("URI under test -https://api.ratesapi.io/api");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To assert the success status code  of the latest date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "Hit the API with end point as \"/latest?base\u003dUSD\u0026symbols\u003dGBP\"",
  "keyword": "When "
});
formatter.match({
  "location": "AcceptanceStepDefinition.hitAPI(String)"
});
formatter.write("Hiting API with specific endpoint /latest?base\u003dUSD\u0026symbols\u003dGBP and getting response");
formatter.write("Request of the response is io.restassured.internal.RestAssuredResponseImpl@8c46918");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API should return the status code as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "AcceptanceStepDefinition.getStatusCode(Integer)"
});
formatter.write("Extracting status code to validate");
formatter.write("Reponse code recived 200");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});