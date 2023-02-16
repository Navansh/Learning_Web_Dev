import java.util.Scanner;

public class RevengeOfOlivia {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int mod = 998244353;

        // read the number of test cases
        System.out.print()"Enter the number of test cases: ");
        int t = input.nextInt();

        for (int i = 1; i <= t; i++) {
            int n = input.nextInt();
            int m = input.nextInt();

            // read the binary matrix
            int[][] matrix = new int[n][m];
            for (int j = 0; j < n; j++) {
                String row = sc.next();
                for (int k = 0; k < m; k++) {
                    matrix[j][k] = row.charAt(k) - '0';
                }
            }

            // compute Fx for x = 0, 1, 2, ..., n*m
            long[] F = new long[n*m+1];
            for (int x = 0; x <= n*m; x++) {
                for (int j = 0; j < n; j++) {
                    int count = 0;
                    for (int k = 0; k < m; k++) {
                        if (matrix[j][k] == 1) {
                            count++;
                        } else {
                            count = 0;
                        }
                        if (count == x) {
                            F[x]++;
                        }
                    }
                }
            }
            for (int x = 0; x <= n*m; x++) {
                for (int k = 0; k < m; k++) {
                    int count = 0;
                    for (int j = 0; j < n; j++) {
                        if (matrix[j][k] == 1) {
                            count++;
                        } else {
                            count = 0;
                        }
                        if (count == x) {
                            F[x]++;
                        }
                    }
                }
            }

            long sum = 0;
            for (int x = 0; x <= n*m; x++) {
                long cube = (long) x * x * x % mod;
                sum = (sum + cube * F[x]) % mod;
            }

            // print the result for each test case
            System.out.println("Test case #" + i + ": " + sum);
        }
    }
}
