
// TC-1: Verify current temp is less than or equals to feel-like temp

it('Verify current temp is less than or equals to feel-like temp', async () => {

    //1. Launch https://www.accuweather.com/
    await browser.url('https://www.accuweather.com/');

    //2. Verify current-temp is in between 45 and 55

    const currentTempElement = await $('//span[@class="recent-location-temp"]');
    let currentTempText = await currentTempElement.getText();
    let currentTemp = currentTempText.substring(0, currentTempText.length - 1);    // 53 (string)
    currentTemp = Number(currentTemp); // add verification of temperature code



})

// TC-2: Verify error on empty login flow
it.only('Verify current temp is less than or equals to feel-like temp', async () => {

    // 1. Launch https:www.facebook.com/
    await browser.url('https://www.facebook.com/');
    //2. Click 'Log In' button
    const LogInLink = await $('//button[contains(text(), "log")]');
    await LoginLink.click();

    // 3. Verify error msg is displayed

    //     The email or mobile number you entered isn’t connected to an account
    const VerifyErrorText = await $("//div[contains(text(),n't conne')']");
    let verifyErrorText = await VerifyErrorText.getText();
    expect(verifyErrorText, 'Login button has different text than expected').to.be.equal("The email or mobile number you entered isn’t connected to an account");


});
// TC-3: Verify the empty messenger login flow


it('Verify the empty messenger login flow', async () => {

    // 1. Launch https:www.facebook.com/
    await browser.url('https:www.facebook.com/');

    // 2. Click on 'Messenger' link
    const messengerLink = await $('//a[text()="Messenger"]');
    await messengerLink.click();
    await browser.pause(1000);

    //3. Verify 'Keep me signed in' checkbox is NOT selected

    const signInCheckbox = await $('//span[@class="ai8"]');
    const isSignInCheckbox = await signInCheckbox.isDisplayed();
    expect(isTitleStartsWith, 'Keep me signed in', 'Title: Checkbox is selected').to.be.true;



    //4. Click 'Log In' button
    const logInBtn = await $('//button[text()="login"]');
    await logInBtn.click();
    await browser.pause(1000);


    //5. Verify link -> "Find your account and log in" is displayed
    // if "Remember password" heading is displayed means we are find account page
    const RememberPasswordbtn = await $('//h2[@class="uiHeaderTitle"]');
    let isRememberPasswordbtn = await pageHeading.isDisplayed();
    expect(isRememberPasswordbtn, ': We are not on Forgot password page').to.be.true;



    //6. Verify 'Continue' button is enabled
    const continueBtnElement = await $('//button[text()="submit"]');
    const loginBtnText = await loginBtnElement.getText();
    expect(loginBtnText, 'Continue button is not enabled').to.be.equal("Continue");


    //7. Verify 'Keep me signed in' checkbox is NOT selected

    // if "Remember password " heading is displayed means keep me signed in checkbox is not selected 
    const pageHeading = await $('//span[@dir="Remember password"]');
    const ispageHeadingDisplayed = await pageHeading.isDisplayed();
    expect(isHeadingDisplayed, 'Heading: Remember password is checked').to.be.true;



    //8. Click 'Keep me signed in' checkbox
    const PageHeading = await $('//span[@dir="Remember password"]');
    await RememberPassword.click();
    await browser.pause(1000);

    // 9. Verify 'Keep me signed in' checkbox is selected



})