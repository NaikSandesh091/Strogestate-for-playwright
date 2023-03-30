const { test, expect } = require('@playwright/test');
//const path = require('path');

test.describe("Authentication", ()=>{
   test ('Capture session', async ({page})=>{
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.locator("[name='username']").fill("admin")
        await page.locator("[name='password']").fill("admin123")
        await page.locator('button').click()
        const dashboard = await page.locator("//h6")
        await expect(dashboard).toHaveText("Dashboard")
        //session storage
        await page.context().storageState({path: "user.json"})
        
  })

//   test ('authenticate orange hrm', async ({page})=>{
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
//     const dashboard = await page.locator("//h6")
//     await expect(dashboard).toHaveText("Dashboard")
// })


//passing test cases
    test ('authenticate Orange Hrm', async ({browser})=>{
       
        const context = await browser.newContext({storageState:"user.json"})
        const page = await context.newPage()
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const dashboard = await page.locator("//h6")
        await expect(dashboard).toHaveText("Dashboard")
        
    })

 })