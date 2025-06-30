package sequentialsearch;

import java.util.Arrays;
import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String args[]) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Enter all numbers separated with comma or whitespace");
        String numbersInput = scanner.nextLine();
        
        String[] numbersToArr = numbersInput.split("[,\\s+(, )]+"); // Splitting with multiple delimiters
        
//        Double numbers[] = new Double[numbersToArr.length];
        ArrayList<Double> nums = new ArrayList<Double>(numbersToArr.length);
        
        for (int i = 0; i < numbersToArr.length; i++) {
            try {
                  nums.add(Double.parseDouble(numbersToArr[i]));
//                    numbers[i] = Double.parseDouble(numbersToArr[i]);
            } catch(NumberFormatException e) {
                System.out.println("Warning: Enter only integers or decimals\n");
                System.exit(0);
            }
        }
        System.out.println("Enter the number you want to search");
        double numToBeSearched = scanner.nextDouble();
        
        System.out.println("Search with sentinel: The number can be found at index " + SequentialSearch.searchWithSentinel(nums, numToBeSearched)); // Runtime in Big O Notation: O(n)
        
        /*
            The algorithm with the sentinel appended at the end of list is slightly faster than without sentinel since there exist a simpler check in the loop body, so the                    iteration goes faster.
        */
        
//        System.out.println("Search without sentinel: " + SequentialSearch.searchWithoutSentinel(nums, 6)); // Runtime in Big O Notation: O(n), Execution time: 13.2883ms
        scanner.close();
    }
}
