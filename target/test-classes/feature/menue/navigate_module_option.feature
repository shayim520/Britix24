Feature: navigate module options
  Scenario Outline: Verify module title
    Given I log in as "<user>"
    Then I click a "<module>"
    Then the title should be "<title>"

    Examples: hr
    | user | module | title |
    |  hr  |  Activity Stream |  Portal                  |
    |  hr  |  Tasks           |  My tasks                |
    |  hr  |  Chat and Calls  |  Chat and Calls          |
#    |  hr  |  Workgroups      |  Workgroups and projects |
#    |  hr  |  Drive           |  My Drive                |
#    |  hr  |  Calendar        |  Calendar                |
#    |  hr  |  Mail            |  Mailbox Integration     |
#    |  hr  |  Contact Center  |  Contact Center          |
#    |  hr  |  Time and Reports|  Absence Chart           |
#    |  hr  |  Employees       |  Company Structure       |
#    |  hr  |  Services        |  Meeting Rooms           |
#    |  hr  |  Company	      |  Company	             |
#    |  hr  |  Applications    | All applications         |
#    |  hr  |  Workflows	      |  Assignments	         |
#
    Examples: marketing
      | user | module | title |
      |  marketing  |  Activity Stream |  Portal                  |
      |  marketing  |  Tasks           |  My tasks                |
#      |  marketing  |  Chat and Calls  |  Chat and Calls          |
#      |  marketing  |  Workgroups      |  Workgroups and projects |
#      |  marketing  |  Drive           |  My Drive                |
#      |  marketing  |  Calendar        |  Calendar                |
#      |  marketing  |  Mail            |  Mailbox Integration     |
#      |  marketing  |  Contact Center  |  Contact Center          |
#      |  marketing  |  Time and Reports|  Absence Chart           |
#      |  marketing  |  Employees       |  Company Structure       |
#      |  marketing  |  Services        |  Meeting Rooms           |
#      |  marketing  |  Company	        |  Company	               |
#      |  marketing  |  Applications    | All applications         |
#      |  marketing  |  Workflows	    |  Assignments	           |
#
    Examples: help_desk
      | user | module | title |
      |  help_desk  |  Activity Stream |  Portal                  |
      |  help_desk  |  Tasks           |  My tasks                |
#      |  help_desk  |  Chat and Calls  |  Chat and Calls          |
#      |  help_desk  |  Workgroups      |  Workgroups and projects |
#      |  help_desk  |  Drive           |  My Drive                |
#      |  help_desk  |  Calendar        |  Calendar                |
#      |  help_desk  |  Mail            |  Mailbox Integration     |
#      |  help_desk  |  Contact Center  |  Contact Center          |
#      |  help_desk  |  Time and Reports|  Absence Chart           |
#      |  help_desk  |  Employees       |  Company Structure       |
#      |  help_desk  |  Services        |  Meeting Rooms           |
#      |  help_desk  |  Company	        |  Company	               |
#      |  help_desk  |  Applications    | All applications         |
#      |  help_desk  |  Workflows	    |  Assignments	           |


