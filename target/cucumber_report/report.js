$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:\\Users\\xayim\\Btrix24_42\\src\\test\\resources\\feature\\menue\\navigate_module_option.feature");
formatter.feature({
  "name": "navigate module options",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify module title",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I log in as \"\u003cuser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I click a \"\u003cmodule\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "the title should be \"\u003ctitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "hr",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user",
        "module",
        "title"
      ]
    },
    {
      "cells": [
        "hr",
        "Activity Stream",
        "Portal"
      ]
    },
    {
      "cells": [
        "hr",
        "Tasks",
        "My tasks"
      ]
    },
    {
      "cells": [
        "hr",
        "Chat and Calls",
        "Chat and Calls"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify module title",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I log in as \"hr\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_step_definition.i_log_in_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click a \"Activity Stream\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Navigate_module_options.i_click_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title should be \"Portal\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Navigate_module_options.the_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify module title",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I log in as \"hr\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_step_definition.i_log_in_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click a \"Tasks\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Navigate_module_options.i_click_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title should be \"My tasks\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Navigate_module_options.the_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify module title",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I log in as \"hr\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_step_definition.i_log_in_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click a \"Chat and Calls\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Navigate_module_options.i_click_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title should be \"Chat and Calls\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Navigate_module_options.the_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.examples({
  "name": "marketing",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user",
        "module",
        "title"
      ]
    },
    {
      "cells": [
        "marketing",
        "Activity Stream",
        "Portal"
      ]
    },
    {
      "cells": [
        "marketing",
        "Tasks",
        "My tasks"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify module title",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I log in as \"marketing\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_step_definition.i_log_in_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click a \"Activity Stream\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Navigate_module_options.i_click_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title should be \"Portal\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Navigate_module_options.the_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify module title",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I log in as \"marketing\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_step_definition.i_log_in_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click a \"Tasks\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Navigate_module_options.i_click_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title should be \"My tasks\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Navigate_module_options.the_title_should_be(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[My tasks]\u003e but was:\u003c[EULA violation]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat cybertek.step_definitions.Navigate_module_options.the_title_should_be(Navigate_module_options.java:19)\r\n\tat ✽.the title should be \"My tasks\"(C:\\Users\\xayim\\Btrix24_42\\src\\test\\resources\\feature\\menue\\navigate_module_option.feature:5)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.examples({
  "name": "help_desk",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user",
        "module",
        "title"
      ]
    },
    {
      "cells": [
        "help_desk",
        "Activity Stream",
        "Portal"
      ]
    },
    {
      "cells": [
        "help_desk",
        "Tasks",
        "My tasks"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify module title",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I log in as \"help_desk\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_step_definition.i_log_in_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click a \"Activity Stream\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Navigate_module_options.i_click_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title should be \"Portal\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Navigate_module_options.the_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify module title",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I log in as \"help_desk\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_step_definition.i_log_in_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click a \"Tasks\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Navigate_module_options.i_click_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title should be \"My tasks\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Navigate_module_options.the_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});