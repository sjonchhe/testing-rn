# Testing in React Native

Testing in react native is done with the help of pre installed [Jest](https://jestjs.io/docs/en/tutorial-react-native).

## #Snapshot Testing

It is specifically used for UI components. If you have a snapshot test which tests a component that is updated often then you need to be constantly updating the accompanying test. If you get into a bad habit of just updating these tests without carefully inspecting the output file, the tests lose their value.

#### When to write snapshot test

- If a component is not updated often
- If a component is not too complex
- If it is easy to see what you are actually testing

#### Steps for snapshot testing

1. Create a \*.test.js file(eg: Button.test.js)
2. Import renderer from react-test-renderer package

   ```
   import renderer from 'react-test-renderer';
   ```

3. Follow similar syntax pattern insisde Button.test.js

   ```
   test('Button Snapshot', () => {
     const snap = renderer.create(
       <Button title="hello" />
     ).toJSON();
     expect(snap).toMatchSnapshot();
   })
   ```

4. Register the initial test case
   > npm test -- -u

- Incase you want to update the ui,each time the UI is updated the test case must be updated again.

5. Finally to test

   > npm test

6. If there is no any changes in the ui the test is success, otherwise it shows details of the changes in the component.

#### Incase of success

```
Test Suites: 3 passed, 3 total
Tests:       3 passed, 3 total
Snapshots:   2 passed, 2 total
Time:        7.534s
Ran all test suites.
```

#### Incase of failure

```
Test Suites: 2 failed, 1 passed, 3 total
Tests:       2 failed, 1 passed, 3 total
Snapshots:   2 failed, 2 total
Time:        7.299s
Ran all test suites.
npm ERR! Test failed.  See above for more details.
```
