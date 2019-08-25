package cybertek.step_definitions;

import cucumber.api.java.en.Then;
import cybertek.utilities.Pages;
import org.junit.Assert;

public class Navigate_module_options {

    Pages page = new Pages();
    @Then("I click a {string}")
    public void i_click_a(String module) {

        page.modulePage().navigateToModule(module);

    }

    @Then("the title should be {string}")
    public void the_title_should_be(String expected) {
        Assert.assertEquals(expected,page.modulePage().getPageTitle());

    }

}
