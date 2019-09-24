package runners;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = "classpath:featureFiles", monochrome = true, 
	plugin = {"pretty","json:target/Report/cucumber-report.json","html:target/Report"},tags = { "@Sanity"}
)

public class TestRunner extends AbstractTestNGCucumberTests {
	
}
