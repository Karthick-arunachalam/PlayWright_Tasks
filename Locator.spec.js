//const{chromium,test,expect} = require('@playwright/test');

import{chromium,test,expect} from '@playwright/test';

test('locator',async () => {
const browser =await chromium.launch({headless:false});
    
const page = await browser.newPage();
await page.goto('https://www.facebook.com/');
const getTitle = await page.title();
console.log(getTitle);

const PageText = await page.locator('h2._8eso').textContent();  //classname = tagname(h2).value(_8eso)
console.log(PageText);

const username = await page.locator('input#email');  //id = tagname#idvalue = input#email
await expect(username).toBeVisible();
await username.fill("abc123@gmail.com");

const password = await page.locator('input[name= pass]') ; 
    // attribute name = tagname[attributename = 'attribute value'] = input[name = 'pass']
await expect(password).toBeVisible();
await password.fill("lucknow@01");

await page.getByTestId('royal_login_button').click();

//await page.waitForNavigation();

await page.close();
});