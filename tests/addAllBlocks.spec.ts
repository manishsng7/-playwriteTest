import { test, expect } from "@playwright/test";
const x = 100;
const y = 100;

test("test", async ({ page }) => {
  await page.goto("http://localhost:8093/editor/newsletters/2");
  await page.waitForTimeout(2000);
  //   await page.getByTestId("sib-button-testId").click();
  //   await page.waitForTimeout(2000);
  //   await page.getByRole("menuitem", { name: "Developer mode" }).click();
  //   await page.waitForTimeout(2000);
  //   await page.locator(".qIZC4FK51UQKyrxe4GvM").click();
  //   await page.waitForTimeout(2000);
  //   await page.getByTestId("primary-action-btn").click();
  //   await page.waitForTimeout(2000);
  //   await page.getByTestId("dev-mode-close-button").click();
  //   await page.waitForTimeout(2000);
  //   await page.locator("#block-svg-Block-60db0e92a6f5e60006eac5ed").click();
  await page.waitForTimeout(2000);
  const scrollContainer = page.locator("#scrollContainer");
  await page.getByTestId("block-Title").dragTo(scrollContainer, {
    targetPosition: { x, y },
  });
  await page.waitForTimeout(2000);
  await page.getByTestId("block-Text").dragTo(scrollContainer, {
    targetPosition: { x, y },
  });
  await page.waitForTimeout(2000);
  await page.getByTestId("block-Image").dragTo(scrollContainer, {
    targetPosition: { x, y },
  });
  await page.waitForTimeout(2000);
  await page.getByTestId("block-Video").dragTo(scrollContainer, {
    targetPosition: { x, y },
  });
  await page.waitForTimeout(2000);
  await page.getByTestId("block-Button").dragTo(scrollContainer, {
    targetPosition: { x, y },
  });

  await page.waitForTimeout(2000);
  await page.getByTestId("block-Logo").dragTo(scrollContainer, {
    targetPosition: { x, y },
  });

  await page.waitForTimeout(2000);
  await page.getByTestId("block-Social").dragTo(scrollContainer, {
    targetPosition: { x, y },
  });

  await page.waitForTimeout(2000);
  await page.getByTestId("block-HTML").dragTo(scrollContainer, {
    targetPosition: { x, y },
  });

  await page.waitForTimeout(2000);
  await page.getByTestId("block-Divider").dragTo(scrollContainer, {
    targetPosition: { x, y },
  });
  await page.waitForTimeout(2000);
  await page.getByTestId("block-Navigation").dragTo(scrollContainer, {
    targetPosition: { x, y },
  });

  await page.waitForTimeout(2000);
  await page.getByTestId("block-Product").dragTo(scrollContainer, {
    targetPosition: { x, y },
  });

  await page.waitForTimeout(2000);
  await page.getByTestId("block-Spacer").dragTo(scrollContainer, {
    targetPosition: { x, y },
  });

  await page.waitForTimeout(2000);
  await page.getByTestId("block-Dynamic content").dragTo(scrollContainer, {
    targetPosition: { x, y },
  });

  await page.waitForTimeout(1000);
});
