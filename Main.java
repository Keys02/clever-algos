package sequentialsearch;

import java.util.Arrays;
import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String args[]) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter all the numbers separated with comma or whitespace");
        String numbers = scanner.nextLine();
        
        String[] numbersToArr = numbers.split("[, \\s+]+"); // Splitting with multiple delimiters
        System.out.println(numbersToArr[3]);
//        ArrayList<Integer> nums = new ArrayList<Integer>(Arrays.asList(4,5,6,7));
//        /*
//            The algorithm with the sentinel appended at the end of list is slightly faster than without sentinel since there exist a simpler check in the loop body, so the                    iteration goes faster.
//        */
//        System.out.println("Search with sentinel: " + SequentialSearch.searchWithSentinel(nums, 10)); // Performance: O(n), Execution time: 12.3804ms
////        System.out.println("Search without sentinel: " + SequentialSearch.searchWithoutSentinel(nums, 6)); // Performance: 0(n), Execution time: 13.2883ms
//        System.out.println((System.nanoTime() - SequentialSearch.start) / 1000000 + "ms") ; // Calculating the execution time.
        scanner.close();
    }
}
