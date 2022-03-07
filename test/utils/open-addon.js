const openAddon = async page => {
  await page.setViewport({
    width: 800,
    height: 800,
    deviceScaleFactor: 1,
  });

  await page.goto(process.env.SHEET_URL);
  await page.waitForTimeout(5000);

  await page.click('a:nth-child(2)'); // click on signin button
  await page.waitForTimeout(3000);
  await page.type('input[name="identifier"]', process.env.EMAIL); // type email
  await page.click('#identifierNext'); // click "next" button
  await page.waitForTimeout(3000);

  await page.type('input[name="password"]', process.env.PASSWORD); // type pass
  await page.waitForTimeout(3000);
  await page.click('#passwordNext'); // click "next" button
  await page.waitForTimeout(3000);

  if (
    await page.evaluate(() =>
      document.querySelector('h1#headingText')?.innerText.includes('erify')
    )
  ) {
    try {
      await page.click('div[data-accountrecovery]');
      await page.waitForTimeout(6000);
    } catch {
      console.log('The "choose account recovery method" page isn\'t shown');
    }

    await page.type(
      'input[name="knowledgePreregisteredEmailResponse"]',
      process.env.TEST_RECOVERY_EMAIL
    ); // type recovery email
    await page.waitForTimeout(6000);
    await page.click('button'); // click "next" button
    await page.waitForTimeout(5000);
  }

  await page.waitForTimeout(25000); // wait long enough for onopen to be called

  // open new addon menubar item
  await page.evaluate(() => {
    const addOnMenuButton = document.querySelector(
      'div.menu-button.goog-control.goog-inline-block:nth-child(11)'
    );
    addOnMenuButton.dispatchEvent(
      new MouseEvent('mousedown', { bubbles: true })
    );
    addOnMenuButton.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
  });

  await page.waitForTimeout(6000);

  // open "bootstrap" menu item
  await page.evaluate(() => {
    const bootstrapMenuButton = document.querySelector(
      'div.goog-menu.goog-menu-vertical.apps-menu-hide-mnemonics:last-child > div:nth-child(2) > div'
    );
    bootstrapMenuButton.dispatchEvent(
      new MouseEvent('mousedown', { bubbles: true })
    );
    bootstrapMenuButton.dispatchEvent(
      new MouseEvent('mouseup', { bubbles: true })
    );
    bootstrapMenuButton.dispatchEvent(
      new MouseEvent('mousedown', { bubbles: true })
    );
    bootstrapMenuButton.dispatchEvent(
      new MouseEvent('mouseup', { bubbles: true })
    );
  });
  await page.waitForTimeout(10000);
};

module.exports = { openAddon };
