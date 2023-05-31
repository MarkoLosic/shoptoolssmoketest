# shoptoolssmoketest
This is smoke test for shoptool with cypress


Cypress Automated Tests - User Guide
This project contains automated tests for an e-commerce platform that can be run using the Cypress tool. 
These tests focus on verifying key functionalities of the e-commerce platform.

Installation

1. Download or clone this project to your local computer.
2. Navigate to the project directory in the terminal.
3. Run the command **`npm install`** to install all necessary dependencies.

Cypress Installation
To run the Cypress tests, you need to have Cypress installed globally on your system. Follow these steps to install Cypress:

1. Open a new terminal window.
2. Run the command **`npm install cypress -g`** to install Cypress globally.
3. Once the installation is complete, you can verify it by running the command **`cypress --version`**. It should display the Cypress version number.

Configuration

1. In the project directory, locate the **`cypress.json`** file.
2. Open the file in a text editor.
3. Update the **`baseUrl`** property in **`cypress.json`** to **`"https://shop.demoqa.com/"`**.

Running Tests

1. In the terminal, in the project directory, run the command **`npm run cy:open`**. This will open the Cypress Test Runner.
2. In the Test Runner, click on the name of the test you want to run. The tests are organized in directories based on the functionalities of the e-commerce platform.
3. The test will automatically run in the browser, using the specified base URL.
4. You can monitor the test execution in real-time.
5. After the test is completed, the results will be displayed in the Cypress Test Runner.

Adding New Tests

1. In the **`cypress/integration`** directory, find the appropriate directory or create a new directory for the new functionality you want to test.
2. In the functionality directory, create a new Cypress specification using the **`.spec.js`** extension (e.g., **`checkout.spec.js`**).
3. In the new specification, write a test using the Cypress API to interact with the e-commerce platform.
4. Run the tests using the steps described above for running tests.

Note

- Make sure you have up-to-date versions of Cypress and the necessary dependencies.
- Adapt the tests to the specifics of the e-commerce platform.
- Regularly update the tests to ensure they align with changes on the e-commerce platform.

Contact
If you have any questions or feedback, feel free to contact me at [markolosic1993@gmail.com].
