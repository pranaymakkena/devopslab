const {
    Builder,
    By
} = require(
    "selenium-webdriver"
);


async function testDockerApp() {

    let driver =
        await new Builder()

        .forBrowser(
            "chrome"
        )

        .build();


    try {

        // Open application
        await driver.get(
            "http://localhost:3000"
        );


        // Get page content
        let body =
            await driver.findElement(
                By.tagName("body")
            ).getText();


        // Display result
        console.log(
            "Application Output:",
            body
        );


        // Check expected content
        if (
            body.includes(
                "Hello from Docker Container!"
            )
        ) {

            console.log(
                "TEST PASSED"
            );

        }

        else {

            console.log(
                "TEST FAILED"
            );

        }

    }

    finally {

        await driver.quit();

    }

}

testDockerApp();
