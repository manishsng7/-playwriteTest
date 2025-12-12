// import { test, expect } from "@playwright/test";

// const DEV_MODE_EDITOR_SELECTOR = ".qIZC4FK51UQKyrxe4GvM";
// const ACTION_WAIT_MS = 500;

// async function waitAfterAction(page) {
//   await page.waitForTimeout(ACTION_WAIT_MS);
// }

// async function backspaceAndRetypeAllDevModeText(page) {
//   const editor = page.locator(DEV_MODE_EDITOR_SELECTOR);

//   // Read the original content of the dev mode editor
//   const originalText = (await editor.textContent()) ?? "";
//   await waitAfterAction(page);

//   // Focus the editor and select all text
//   await editor.click();
//   await waitAfterAction(page);
//   await page.keyboard.press("ControlOrMeta+a");
//   await waitAfterAction(page);

//   // Backspace everything
//   await page.keyboard.press("Backspace");
//   await waitAfterAction(page);

//   // Retype the original text
//   if (originalText.length > 0) {
//     await page.keyboard.type(originalText);
//     await waitAfterAction(page);
//   }
// }

// test("dev mode survives full backspace and retype of all keys/values", async ({
//   page,
// }) => {
//   await page.goto("http://localhost:8093/editor/newsletters/2");
//   await waitAfterAction(page);

//   await page.getByTestId("sib-button-testId").click();
//   await waitAfterAction(page);

//   await page.getByRole("menuitem", { name: "Developer mode" }).click();
//   await waitAfterAction(page);

//   // Open dev mode editor
//   await page.locator(DEV_MODE_EDITOR_SELECTOR).click();
//   await waitAfterAction(page);

//   await page.getByTestId("primary-action-btn").click();
//   await waitAfterAction(page);

//   // Backspace all keys/values and retype them
//   await backspaceAndRetypeAllDevModeText(page);

//   // Basic sanity check: dev mode editor still shows a known key (e.g. "author")
//   await expect(page.locator(DEV_MODE_EDITOR_SELECTOR)).toContainText("author");
// });
