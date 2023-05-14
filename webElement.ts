import { chromium, Browser, Page } from'@playwright/test'

async function automate() {
  // Launching the browser
  const browser: Browser = await chromium.launch();

  // Creating a new page
  const page: Page = await browser.newPage();

  // Navigating to the web page
  await page.goto('https://the-internet.herokuapp.com/');

  //Click on Broken Images link and verify page heading.
    const brokenImages = await page.getByText('Broken Images').click;
    await page.isVisible("text='Broken Images'");
    await page.goBack();

    //Click on Checkboxes link and verify page heading
    const checkBoxes = await page.getByText('Checkboxes');
    await page.isVisible("text='Checkboxes'");
    await page.goBack();

    //Click on context menu and verify page heading
    const contextMenu = await page.getByText('Context Menu');
    await page.isVisible("text='Context Menu'");
    await page.goBack();

    //Click on Dropdown link and verify title
    const dropdown = await page.getByText('Dropdown');
    await page.isVisible("text='Dropdown'");
    await page.goBack();

    //Click on Dynamic content link and verify title
    const dynamicContent = await page.getByText('Dynamic Content');
    await page.isVisible("text='Dynamic content'");
    await page.goBack();

  // Close the browser
  await browser.close();
}