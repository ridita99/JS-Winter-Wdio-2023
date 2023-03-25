// Question - 1: (50-points)
/**
 * Testcase: Verify rewards form is empty and Conitnue button is disabled
 * Steps:
 * 1. Launch hotels.com
 * 2. Click on Learn about Hotels.com Rewards
 * 3. -> Verify Hotels Rewards opened in a new window
 * 4. Click on Join Now
 * 5. -> Verify Form is blank
 * 6. -> Verify Continue button is NOT enabled
 */

const { SUPPORTED_BROWSER_RUNNER_PRESETS } = require("@wdio/cli/build/constants");
const { expect } = require("chai");




describe('WebDriver IO Code Test', () => {

    it.only('Verify rewards form is empty and Conitnue button is disabled', async () => {

        // Launch hotels.com
        await browser.url('https://www.hotels.com');

        // Click on Learn about Hotels.com Rewards
        const rewardBtn = await $('href*= eward');
        await rewardBtn.click();




        //-> Verify Hotels Rewards opened in a new window
        const hotelReward = await $('#hotelRewards');
        const ishotelRewardsOpened = await hotelrewards.isOpened();
        expect(ishotelRewardsOpened, 'hotelRewards is NOT opened').to.be.true;


        //Click on Join Now
        const joinNowBtn = await $('= Join Now');
        await joinNowBtn.click();


        // Verify Form is blank

        //if url contains "www.hotels.com/signup/&intlid" means we are on creat an account is opened and blank 

        const currentUrl = await browser.getUrl();
        const isUrlContainBlank = currentUrl.includes('https://www.hotels.com/signup?&intlid=Overview%20page%20%3A%3A%20Join%20Now%20at%20top%20of%20page')
        expect(isUrlContainBlank, 'Url: We are not on Create account page').to.be.true;





        //  Verify Continue button is NOT enabled

        const continueBtn = await $('#Continue');
        const iscontinueBtnNotEnabled = await loginEmail.isnotEnabled();
        expect(iscontinueBtnNotEnabled, 'Continue Button is enabled').to.be.true;



        await browser.pause(1000);

    });



    // Question - 2: (50-points)
    /**
     * Testcase: Verify past dates are disabled in Calendar
     * Steps:
     * 1. Launch hotels.com
     * 2. Click on Dates section
     * 3. If not already, go to current month
     * 4. -> Verify all past dates are disabled
     */


    it.only('Verify past dates are disabled in Calendar', async () => {

        //  1. Launch hotels.com
        await brwoser.url('https://www.hotels.com');

        // Click on Dates section
        const DatesBtn = await $('//button[@aria-label="Dates March 24, 2023"]');
        await DatesBtn.click();

        //If not already, go to current month
        const currentMonth = await $('=March');
        await currentMonth.click();

        //Verify all past dates are disabled
        const pastDateBtn = await $('//button[contains(text(),sabl')
        const ispastDateBtnDisabled = await pastDateBtnBtn.ispastDateBtnDisabled();
        expect(ispastDateBtnDisabled, 'Past Date button is enabled').to.be.false;


        await browser.pause(1000)

    });



})