package cybertek.step_definitions;

import cucumber.api.java.en.Then;
import cybertek.pages.CreateNewTask;
import cybertek.utilities.Driver;
import cybertek.utilities.Pages;

import java.util.concurrent.TimeUnit;

public class Create_new_task_definition {
    Pages page = new Pages();
    @Then("click task and add task {string}")
    public void click_task_and_add_task(String string) {

        string = "create new task";
       page.createNewTask().taskBtn.click();
      page.createNewTask().textSpec.sendKeys(string);
        Driver.getDriver().manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);


    }

    @Then("click send to create task")
    public void click_send_to_create_task() throws InterruptedException {

        page.createNewTask().sendBtn.click();
        Thread.sleep(5000);
        System.out.println("user successfully create new task");
    }
}
