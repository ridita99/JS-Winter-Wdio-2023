//to get the current url in the window
//function: getUrl()
//returns the current url as a string
// to get the boolean value = to be true/to be false



//const { expect } = require("chai");


it('To get the current url', async () => {
    //steps
    // launch facebook.com
    await browser.url('https://www.facebook.com/');

    //get the current url
    const currentUrl = await browser.getUrl();

    //verify the current-url ends with '.com/'
    const result = await browser.getUrl();
    expect(result, 'Url does not ends with .com/').to.equal(true);



})
