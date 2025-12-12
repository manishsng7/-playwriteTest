## Playwrite – Playwright Test Suite

This repo contains a small Playwright test suite for exercising the email editor at  
`http://localhost:8093/editor/newsletters/2`.

### 1. Prerequisites

- **Node.js** 18+ (check with `node -v`)
- **npm** (comes with Node, check with `npm -v`)
- The editor app running locally at `http://localhost:8093` before you run tests.

### 2. Install dependencies

From the project root (`/Users/manishsingh/Desktop/P/playwrite`):

```bash
npm install
```

Install Playwright browsers (only needed once per environment):

```bash
npx playwright install
```

### 3. Running tests

- **Run all tests (headless):**

```bash
npx playwright test
```

- **Run all tests in headed mode (see the browser UI):**

```bash
npx playwright test --headed
```

- **Run a single spec file:**

```bash
npx playwright test tests/devMode.spec.ts
npx playwright test tests/addAllBlocks.spec.ts
npx playwright test devModeKeys --headed   # uses testMatch to find devModeKeys.specs.ts
```

### 4. HTML report & videos

Tests are configured with the **HTML reporter** and to **keep video on failure**.

- After a run, open the last report with:

```bash
npx playwright show-report
```

In the report, click a test to see details, including:

- **Trace** (on first retry)
- **Video** (for failed tests)

### 5. Useful debug options

- **Debug a single test with inspector:**

```bash
PWDEBUG=1 npx playwright test tests/devMode.spec.ts
```

- You can also use `await page.pause();` inside a test to stop at that line and inspect the page.
