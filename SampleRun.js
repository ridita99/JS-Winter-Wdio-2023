const { describe, it } = require("mocha");

describe('Launch Page', () => {

    it('Verify we can launch a page', () => {

        browser.url('https://www.amazon.com');

        browser.pause(10000);


    })
})