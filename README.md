# Lab 8 - Starter
1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

Within a Github action that runs whenever code is pushed : so that there's constant testing and makes sure that everyone has the same
testing standards so that we don't miss any cases.

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no) No
3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user. NO As this case could have many moving parts and there's a possibility that other app features would affect the non-related unit tests.
4) YES In this case, we can create a simple unit test which can check that the message length is never greater than 80. This test doesn't have many moving parts, executes easily and doesn't affect other unit tests

