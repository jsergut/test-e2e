package microservices.book;



import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;

/**
 * @author moises.macero
 */
@RunWith(Cucumber.class)
@io.cucumber.junit.CucumberOptions(plugin = { "pretty", "html:target/cucumber/report.html", "junit:target/junit-report.xml" },
features = "src/test/resources/multiplication.feature")

public class MultiplicationFeatureTest {
	
}