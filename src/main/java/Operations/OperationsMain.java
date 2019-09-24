package Operations;

/**
 * Sample Arithmetic Operations App!
 *
 */
public class OperationsMain 
{
    
    public static void main( String[] args )
    {
    	Operations operations = new Operations();
    	int a=10;
    	int b = 20;
    	
    	int AddResult = operations.additon(a, b);
    	System.out.println("Sum of " + a + "," + b + " is " + AddResult);
    	
    	int subResult = operations.sub(a, b);
    	System.out.println("Subtraction of " + a + "," + b + " is " + subResult);
    	
    	int mulResult = operations.additon(a, b);
    	System.out.println("Multiplication of " + a + "," + b + " is " + mulResult);
    	
    }
}