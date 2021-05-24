# Lab8_Starter

Lab partners: 
Victoria Edeeva
Julia Xu

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)
1-Within a Github action that runs whenever code is pushed 

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user. 
No, unit test wouldn't be appropriate here because we can't check if the message was sent to another user or not and we cannot simulate it.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters 
Yes, we can use unit testing to check the length of the message by accessing the length variable and comparing it to the actual length.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?
The Puppeteer will run the tests without a browser UI.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?
await expect(page).toClick('img');
