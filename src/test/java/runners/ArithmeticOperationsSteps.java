package runners;

import static org.testng.Assert.assertEquals;
import Operations.Operations;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ArithmeticOperationsSteps {
	Operations operations = new Operations();
	private int Input1, Input2, ActResult;

	@Given("that the user passes NumberOne as {int} and NumberTwo as {int}")
	public void that_the_user_passes_NumberOne_as_and_NumberTwo_as(int Num1, int Num2) {
		Input1 = Num1;
		Input2 = Num2;
	}

	@When("user performs Addition Operation")
	public void user_performs_Addition_Operation() {
		ActResult = operations.additon(Input1, Input2);
	}

	@When("user performs Subtraction Operation")
	public void user_performs_Subtraction_Operation() {
		ActResult = operations.sub(Input1, Input2);
	}

	@When("user performs Multiplication Operation")
	public void user_performs_Multiplication_Operation() {
		ActResult = operations.multiply(Input1, Input2);
	}

	@Then("the sum should be {int}")
	public void the_sum_should_be(int ExpResult) {
		assertEquals(ActResult, ExpResult);
	}
}