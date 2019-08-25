package cybertek.step_definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cybertek.pages.LoginPage;
import cybertek.utilities.ConfigurationReader;

import cybertek.utilities.Driver;
import cybertek.utilities.Pages;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class Login_step_definition{

Pages page = new Pages();



    @Given("verify user access home page {string}")
    public void verify_user_access_home_page(String expected) {

         page.loginPage().Login();
         page.loginPage().loginButton.click();
        Driver.getDriver().manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        System.out.println(Driver.getDriver().getTitle());
        expected = "Portal";
        Assert.assertEquals(Driver.getDriver().getTitle(),expected);

    }
    @Given("I log in as {string}")
    public void i_log_in_as(String role) {
        page.loginPage().login(role);

    }


}
