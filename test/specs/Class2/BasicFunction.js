//const { SUPPORTED_BROWSER_RUNNER_PRESETS } = require("@wdio/cli/build/constants")

//const { expect } = require("chai");

//describe(`launch page`, () => {

// it(`Verify we can launch a webpage`, async () => {
/**
 * To launch a webpage
 * function: url()
 * input : url-address    // url function is launch 
 */
//   await browser.url("https://cnn.com/");

//  await browser.pause(1000); // await is used to to stay webpage for a certain tie
// }) // pause is the function to pause x mili second, supply the nummber in ms

//})



it('To get page title', async () => {
    /**
     * to get the page title
     * function : getTitle()
     * returns the title as a string
     */

    /**
     * launch facebook.com
     * get the title of the page
     * print the title into console
     * verify page title equals to "facebook- log in or sign up"
     */

    //launch facebook.com
    await browser.url(`https://www.facebook.com/`);

    //get the title of the page
    const pageTitle = await browser.getTitle();

    //console.log(`pageTitle -> ${pageTitle}`);

    //verify page title equals to "facebook- og in or sign up"
    expect(pageTitle, 'Page title is not as expected').to.equal('Facebook - log in or sign u');


})



