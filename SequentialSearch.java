package sequentialsearch;

import java.util.ArrayList;
import java.util.List;

public class SequentialSearch {
    
   public static double start = System.nanoTime();

   public static int searchWithSentinel(List arr, int key) {
        int arrayLength = arr.size();
        arr.add(key);
        int i = 0;
        
        while ((int) arr.get(i) != key) { i++; }
        
        arr.remove(arr.size() - 1);
        
        return (i == arrayLength) ? -1 : i;
   }
   
   public static int searchWithoutSentinel(List arr, int key) {
       for (int i = 0; i < arr.size(); i++) {
          if ((int) arr.get(i) == key) { return i; }
       }
       return -1;
   }
}
