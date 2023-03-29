const { expect } = require('chai');

describe('simple-xpath locator strategies', async () => {
    // Verify user lands on forgot your password page after clicking the link
    /**
     * 1. Launch facebook.com
     * 2. Click "Forgot password?"
     * 3. Verify user lands on forgot your password page
     */

    it.only('Verify user lands on forgot your password page after clicking the link', async () => {
        // Launch facebook.com
        await browser.url('https://www.facebook.com');

        //Click "Forgot Password" 
        const forgotPasswordLink = await $('//a[text()="Forgot password?"]');
        await ForgotPasswordLink.click();

        // Verify user lands on forgot your password page
        // if the pagetitle starts with find your account means we are on forgot password page

        const pageHeading = await $('//h2[@class="uiHeaderTitle"]');
        const isHeadingDisplayed = await pageHeading.isDisplayed();
        expect(isHeadingDisplayed, 'Heading: We are not on Forgot password page').to.be.true;

        // if url contains "www.facebook.com/login/identify/" means we are on Forgot your password page
        const currentUrl = await browser.getUrl();
        const isUrlContain = currentUrl.includes('www.facebook.com/login/identify/');
        expect(isUrlContain, 'Url: We are not on Forgot password page').to.be.true;

        // if pageTitle starts with "Forgot password" means we are on Forgot your password page
        const pageTitle = await browser.getTitle();
        const isTitleStartsWith = pageTitle.startsWith('Forgot password');
        expect(isTitleStartsWith, 'Title: We are not on Forgot password page').to.be.true;


    })

})



//Verify the empty login fields
/**
 * 1. Launch facebook.com
 * 2. Verify empty login email says "Email or phone number"
 * 3. Verify empty login password says "Password"
 * 4. Verify login button says "Log In"
 */
it('Verify the empty login fields', async () => {

    // 1. Launch facebook.com
    await browser.url('https://www.facebook.com');

    // Verify empty login email says "Email or phone number"
    const emptyLogin = await $('//input[text()=""Email address or phone number"]');
    const isemptyLoginDisplayed = await pageHeading.isDisplayed();
    expect(emptyLoginDisplayed, 'Login: We are not on empty login page').to.be.true;









})