const fs = require('fs');
const puppeteer = require('puppeteer');

(async () => {
  const url = process.env.URL || 'http://localhost:1235';
  const outPath = process.env.OUT || 'screenshots/header.png';

  if (!fs.existsSync('screenshots')) {
    fs.mkdirSync('screenshots');
  }

  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 200 });
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

    // Wait for header to render
    await page.waitForSelector('header', { timeout: 10000 });

    // Select header element and screenshot it
    const header = await page.$('header');
    if (!header) {
      console.error('Header element not found');
      process.exitCode = 2;
      return;
    }

    await header.screenshot({ path: outPath });
    console.log('Saved header screenshot to', outPath);
  } catch (err) {
    console.error('Error taking screenshot:', err);
    process.exitCode = 1;
  } finally {
    await browser.close();
  }
})();
