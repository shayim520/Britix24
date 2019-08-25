package cybertek.step_definitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cybertek.pages.LoginPage;
import cybertek.utilities.ConfigurationReader;
import cybertek.utilities.Driver;
import org.openqa.selenium.WebDriver;

import java.util.concurrent.TimeUnit;

public class Hook {





    @Before
    public static void setUp(){

        Driver.getDriver().manage().window().maximize();
        Driver.getDriver().get(ConfigurationReader.getProperty("url"));
        Driver.getDriver().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

//        LoginPage page = new LoginPage();

//        page.Login();
//        page.loginButton.click();

    }
    @After
    public static void teardown(){
        Driver.closeDriver();
    }
}
