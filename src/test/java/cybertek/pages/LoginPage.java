package cybertek.pages;

import cybertek.utilities.ConfigurationReader;
import cybertek.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage{

    public LoginPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(name = "USER_LOGIN")
    public WebElement usernameEl;
    @FindBy(name = "USER_PASSWORD")
    public WebElement passwordEl;
    @FindBy(xpath = "//input[@type=\"submit\"]")
    public WebElement loginButton;

    public void Login(){
        String username = ConfigurationReader.getProperty("username");
        String password = ConfigurationReader.getProperty("password");
        usernameEl.sendKeys(username);
        passwordEl.sendKeys(password);


    }
    public void login(String role) {
        String username = "";
        String password = "";
        if (role.equalsIgnoreCase("hr")) {
            username = ConfigurationReader.getProperty("hr");
            password = ConfigurationReader.getProperty("password");
        } else if (role.equalsIgnoreCase("marketing")) {
            username = ConfigurationReader.getProperty("marketing");
            password = ConfigurationReader.getProperty("password");
        } else if (role.equalsIgnoreCase("help_desk")) {
            username = ConfigurationReader.getProperty("help_desk");
            password = ConfigurationReader.getProperty("password");
        }
        usernameEl.sendKeys(username);
        passwordEl.sendKeys(password);
        loginButton.click();
    }

}


