const {
    Builder
} = require(
    "selenium-webdriver"
);

async function runTest() {

    let driver =
        await new Builder()

        .forBrowser(
            "chrome"
        )

        .build();

    try {

        await driver.get(
            "https://www.google.com"
        );

        console.log(
            "Page opened successfully"
        );

    }

    finally {

        await driver.quit();

    }

}

runTest();
