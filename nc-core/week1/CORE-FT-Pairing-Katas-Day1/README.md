## Pairing katas

Welcome to your first day of Pairing Katas, and your first sprint!

A lot of the questions you might have about how to handle this repo and npm may have answers on the REFERENCE.md file, so check there first. If you're on GitHub, there's a link to it above here. If you're on VSCode, find it in the Explorer to the left.

The purpose of these exercises is to practice your TDD skills and to adjust to the idea of properly pair programming. 

In your pairs, take turns being driver and navigator. Use git and the command line to handle sharing your repo, and switch to your machine when you are driving.

The goal of your tests in to ensure your functions return the correct output when given a range of inputs.

The most important thing to test is that your function functions in the way it should! When you are confident that your function behaves as any reasonable user would expect it to, you should consider **edge cases** where the function may have to deal with extreme, unexpected, unusual or incorrect inputs - but focus on the 'happy path' first!

You are testing **'interfaces not implementations'** - you care only about what your function returns when given some input. You should not try to test what exactly is happening inside the function or that people are using it in the correct way, just test that it returns the correct results for a range of different inputs.

### Pairing katas tasks

1. Run `npm install` to get necessary testing dependencies
2. In your katas folder you will find a .js file for each problem that needs solving. Write your solution code here.
3. Each kata also has .spec.js file associated with it, in the spec folder. Write tests for your code here! Uncomment the first line to access the functions you have written.
4. A few of the functions can be tested using the Batman dataset in the data folder. Require this into necessary test files using relative paths to the data, just like the code files are required.
4. Run `npm test` to run every test in your spec folder. Whenever you get one or two done, swap your pair roles!

### Resources

If you'd like a primer on Test Driven Development, read [this blog post by Eric Elliott](https://medium.com/javascript-scene/what-every-unit-test-needs-f6cd34d9836d).

[Chai Documentation](http://chaijs.com/api/bdd/)

[What is npm?](https://docs.npmjs.com/getting-started/what-is-npm)

[Using a package.json basics](https://docs.npmjs.com/getting-started/using-a-package.json)

[What is in a package.json file](https://docs.npmjs.com/files/package.json)

[Mocha docs](https://mochajs.org/)
