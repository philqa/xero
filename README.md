# QA Dev Test for Xero

## Requirements

```
Tasks:
- Using any language and framework(s) automate the user flow/scenario below with Selenium webdriver
- Should run on Chrome or Firefox
- Provide steps to execute the test suite
- Upload the repository to Github

Below are user flows:
As a Xero user,
In order to manage my business successfully,
I want to be able to add an "ANZ (NZ)" bank account inside any Xero organisation
```

## Prerequisites

- Install Node 8.4.0+
- Install npm 5.6.0+
- Install Java 1.8+

## Setup
Environment configuration is maintained in `/tests/ui/config/environment.ts`

To add config for a new environment please follow the below steps
* Modify the configuration on environment.ts
* Add the configuration to new env name e.g.
```
const ENV_CONFIG = {
  newenv: {
    // All the env specific configurations
  }
}
```
* Modify `package.json` to add the npm run script command for the test env
```
 test:newenv: "npm run compile && protractor build/protractor.conf.js --params.environment=newenv"
```

## Running

### UI Tests (Protractor & Jasmine)

After cloning the repo, run the following from the root project dir:

```
npm install
npm run webdriver-update
npm test
```

By default the production environment is used (it's the only one I had access to). Other environment can be used via the
relevant npm run scripts e.g.
```
npm run test:test
```

Please note that a local selenium instance isn't required for the Protractor UI tests as the directConnect property
is utilized to connect to Chrome. This is intended to speed up the tests, however if you experience issues try
disabling/removing this property in protractor.conf.js and running a local selenium server instance via:
```
webdriver-manager start
```

HTML results are created after each test executed and available in /results/html/htmlReport.html

## Troubleshooting

### Problem: If you receive "Driver not on path" exception
Solution: update your local webdrivers via:
```
webdriver-manager update
```

### Problem: Selenium server/webdriver start seems to fail throwing an exit code 100
Solution: most likely you haven't updated your Java version to 1.8, you can confirm this by running webdriver-manager start

For reference, these tests were developed on the following machine:
```
Java 1.8.0_161
Node v8.9.4
npm 5.6.0
Windows 10 Home
Chrome Version 67.0.3396.99 (Official Build) (64-bit)
chromedriver 2.40
```

## Developer Remarks (TL;DR)

I time-boxed this activity to 2-3 hours.

### Extensions

If I was extend this exercise I'd likely do start with the following TODOs:

- Data creation before test execution (currently I'm using my pre-existing account, this makes the tests flaky as they're dependent on the state of that account). I've included an example class in /ui/data & /model of a nice way to do this via an existing service called randomuser.me
- Consider separating the bankAccountsPage class into smaller page classes
- Create a "component" class to represent the header (repeated across several pages) e.g. the top nav menu
- Add a more comprehensive logger e.g. protractor-console and logging
- Use a more sophisticated reporter such as Allure
- Add cloud baesd UI testing support e.g. SauceLabs or BrowserStack
- Add more browsers in multiCapabilities to test more browsers e.g. firefox/IE
- Add a headless browser profile/run script