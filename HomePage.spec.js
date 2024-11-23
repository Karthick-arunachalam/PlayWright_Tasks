
const{chromium,test,expect} = require('@playwright/test');

test('browser launch amazon', async()=>{
    const browser = await chromium.launch({headless : false});

    const page = await browser.newPage();
    await page.goto('https://www.amazon.in/');

    const page_Title = await page.title();
    await expect(page).toHaveTitle(page_Title);
    console.log(page_Title);

    const page_Url = await page.url();
    await expect(page).toHaveURL(page_Url);
    console.log(page_Url);
});