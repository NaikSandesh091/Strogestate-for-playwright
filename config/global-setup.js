const { test, expect, chromium } = require('@playwright/test');

module.exports = async config =>{
    const browser = await chromium.launch({headless: false})
    const page = await browser.newPage()
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator("[name='username']").fill("admin")
    await page.locator("[name='password']").fill("admin123")
    await page.locator('button').click()
    const dashboard = await page.locator("//h6")
    await expect(dashboard).toHaveText("Dashboard")
    //session storage
    await page.context().storageState({path: "user.json"})
    await browser.close()

}