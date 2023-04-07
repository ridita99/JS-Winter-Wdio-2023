// Due date: Mar 15 (eod)
const moment = require("moment");

// TC-1: Verify the current date is select by default in Sign Up dropdown
it('Verify the current date is select by default in Sign Up dropdown', async () => {
    // 1. Launch facebook.com
    await browser.url("https://www.facebook.com");
    await browser.pause(2000);
    //2. Click on Create New Account button

    const newAccountBtn = await $('//a[text() = Create new account]')
    await newAccountBtn.click();
    await browser.pause(2000);
    // 3. Verify current date is displayed in the birthdate dropdowns.

    const selectedMonthElement = await $('//select[@id="month"]//option[@selected]');

    const selectedMonth = selectedMonthElement.getAttribute('');
    const currentMonthAbbr = moment().format('MMM');

    expect(selectedMonth, 'april').to.equal(currentMonthAbbr);



})


// TC-2: Verify the travelers count on homepage

it('Verify the travelers count on homepage', async () => {

    // 1. Launch hotels.com

    await browser.url('https://www.hotels.com');
    await browser.pause(2000)

    //2. Make Adults=4 in Room-1
    const travelerBtn = await $('//*[@data-stid="open-room-picker"]');
    await travelersBtn.click()
    await browser.pause(2000);

    const addTravelers = await $('[//@id= "traveler_selector_adult_step_input-0"]/following-sibling::[button]');
    await addTravelers.click()
    await browser.pause(2000)
    // 3. Click Add another room
    const addAnotherRoom = await $('//tagName[@class="Add another room"]');
    await addAnotherRoom.click()
    await browser.pause(2000);

    // 4. Make Adults=3 in Room-2
    const travelersBtn = await $('//*[@data-stid="open-room-picker"]');
    await travelersBtn.click()
    await browser.pause(2000);

    // 5. Click on Done button

    const doneBtn = await $('//button[@class="Done"]');
    await doneBtn.click(2000);

    // 6. Verify total-travalers is equals to the number of adults mentioned in rooms


})