import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:8093/editor/newsletters/2");
  await page.waitForTimeout(5000);
  await page.getByTestId("sib-button-testId").click();
  await page.waitForTimeout(2000);

  await page.getByRole("menuitem", { name: "Developer mode" }).click();
  await page.waitForTimeout(2000);
  await page.locator(".qIZC4FK51UQKyrxe4GvM").click();

  await page.getByTestId("primary-action-btn").click();

  await page.getByText('author: ""').click();
  await page.waitForTimeout(1000);
  await page.getByText('author: ""body: content: -').press("ControlOrMeta+f");
  await page.waitForTimeout(1000);
  await page.getByTestId("code-editor-search-input").fill("call");
  await page.waitForTimeout(1000);
  await page.getByTestId("code-editor-search-input").press("Enter");
  await page.waitForTimeout(1000);
  await page.getByText("text: <p>Call to action</p>").nth(1).click();
  await page.waitForTimeout(1000);
  try {
    for (let i = 0; i < 100; i++) {
      await page.keyboard.type(` typing burst ${i + 1}`);

      // Check cursor (caret) position after each type
      const caretInfo = await page.evaluate(() => {
        const active = document.activeElement as any;
        return {
          tagName: active?.tagName,
          selectionStart: active?.selectionStart,
          selectionEnd: active?.selectionEnd,
          valueLength: active?.value?.length ?? active?.textContent?.length,
        };
      });
      // Log to test output so you can inspect per-iteration cursor position
      console.log(`Cursor after type ${i + 1}:`, caretInfo);

      await page.waitForTimeout(500);
    }
  } catch (e) {
    await page.pause();
    // Ignore errors in the typing loop so we stay on the page even if it fails.
  }
  await page.waitForTimeout(10000);
});
