const {
    Builder,
    By
} = require(
    "selenium-webdriver"
);

async function testAddition() {

    let driver =
        await new Builder()

        .forBrowser(
            "chrome"
        )

        .build();


    try {

        await driver.get(
            "http://localhost:5500/q11.html"
        );


        await driver.findElement(
            By.id("num1")
        ).sendKeys("10");


        await driver.findElement(
            By.id("num2")
        ).sendKeys("20");


        await driver.findElement(
            By.tagName("button")
        ).click();


        let result =
            await driver.findElement(
                By.id("result")
            ).getText();


        console.log(
            "Test Result:",
            result
        );

    }

    finally {

        await driver.quit();

    }

}

testAddition();
