package cybertek.runners;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(

        plugin = {"html:target/cucumber_report",
                "json:target/cucumber.json"},
        features = {"C:\\Users\\xayim\\Btrix24_42\\src\\test\\resources\\feature\\menue\\navigate_module_option.feature"},
        glue = {"cybertek.step_definitions"},
        dryRun = false,
        monochrome = true


)
public class runner {
}
