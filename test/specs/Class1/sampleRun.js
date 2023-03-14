
describe // comes from mocha framework 
describe('launch page', () => {

    it('Verify we can lauch a page ', async () => { // it cmae ofrom mocha

        await browser.url('https://www.cnn.com');

        browser.pause(10000)



    })
})