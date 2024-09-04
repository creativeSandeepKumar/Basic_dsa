const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


function countSetBits(){
    let n = 9;
    let count = 0;
    while(n > 0){
        count += n & 1;
        n >>= 1;
    }

    console.log(`Number of Set Bits in ${n} `, count);
}

function isPowerOfTwo(){
    let n = 13;
    let isPower = true;

    if(n <= 0) {
        isPower = false;
    } else {
        isPower = ((n & (n - 1)) === 0);
    }

    console.log(`Is ${n} is a Power of 2 `, isPower);
}

function swap(){
    let a = 3, b = 4;
    c = a ^ b;
    d = a ^ b;
    c = a ^ b;

    console.log(`Swap ${a, b}`, c, d);
}


function gcd(){
    let a = 56, b = 98;
    while( b !== 0){
        let temp = b;
        b = a % b;
        a = temp;
    }

    console.log(`gcp of ${56, 98} `, a);
}

function isPrime(){
    let n = 11;
    let boolean = true;
    if(n <= 1){
        boolean = false;
    } else if(n <= 3){
        boolean = true;
    } else {
        for(let i = 5; i * i <= n; i += 6){
            if(n % i === 0 || n % (i + 2) === 0){
                boolean = false;
                break;
            }
        }
    }

    console.log(`is 11 prime`, boolean);
}

function generateSubsets(){
    let set = [1, 2, 3];
    let subsets = [];
    let total = 1 << set.length;

    for(let i = 0; i< total; i++){
        let subset = [];
        for(let j = 0; j < set.length; j++){
            if(i & (1 << j)){
                subset.push(set[j])
            }
        }
        subsets.push(subset);
    }

    console.log(`All Subsets of Set `, subsets);
}

function permute(){
    let str = "ABC";
    let result = [];

    function permuteHelper(s, l, r){
        if(l === r){
            result.push(s);
        } else {
            for(let i = 1; i <= r; i++){
                s = swapChars(s, l, i);
                permuteHelper(s, l + 1, r);
                s = swapChars(s, l, i);
            }
        }
    }

    function swapChars(s, i, j){
        let arr = s.split('');
        [arr[i], arr[j]] = [arr[j], arr[i]];
        return arr.join('');
    }

    permuteHelper(str, 0, str.length - 1);

    console.log(`All Permutations of String "ABC" `, result);
}

function fibinacci(){
    let n = 10;
    let number = n;
    if(n <= 1) {
        number = n;
    } else {
        let a = 0, b = 1;
        for(let i = 2; i <= n; i++){
            let temp = a + b;
            a = b;
            b = temp;
        }
        number = b;
    }

    console.log(`${n} Fibonacci Number `, number);
}

function knapsack(){
    let values = [60, 100, 120];
    let weights = [10, 20, 30];
    let W = 50;

    let n = values.length;
    let dp = new Array(n + 1).fill(0).map(() => new Array(W + 1).fill(0));

    for(let i = 0; i <= n; i++){
        for(let w = 1; w <= W; w++){
            if(weights[i - 1] <= w){
                dp[i][w] = Math.max(
                    dp[i - 1][w],
                    values[i - 1] + dp[i - 1][w  - weights[i - 1]]
                );
            } else{
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    console.log(`knapsack `, dp[n][W]);
}

function lcs(){
    let X = "AGGTAB";
    let Y = "GXTXAYB";

    let m = X.length;
    let n = Y.length;
    let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

    for(let i = 1; i <= m; i++){
        for(let j = 1; j <= n; j++){
            if(X[i - 1] === Y[j - 1]){
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    console.log(`LCS is: `, dp[m][n]);
}

function minJumps(){
    let arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];
    let jump = 0;
    if(arr.length <= 1) {
        jump = 0;
    } else if(arr[0] === 0) {
        jump = -1;
    } else {
        let maxReach = arr[0];
        let steps = arr[0];
        let jumps = 1;

        for(let i = 1; i < arr.length; i++){
            if(i === arr.length - 1){
                jump = jumps;
                break;
            } else {
                maxReach = Math.max(maxReach, i + arr[i]);
                steps--;

                if(steps === 0){
                    jumps++;
                    if(i >= maxReach){
                        jump = -1;
                        break;
                    }
                    steps = maxReach - 1;
                }
            }
        }
        // jump = -1;
    }

    console.log(`min jump is `, jump);
}

function maxSumIS(){
    let arr = [1, 101, 2, 3, 100, 4, 5];
    let n = arr.length;
    let msis = [...arr];

    for(let i = 1; i < n; i++){
        for(let j = 0; j < 1; j++){
            if(arr[i] > arr[j] && msis[i] < msis[j] + arr[i]){
                msis[i] = msis[j] + arr[i];
            }
        }
    }
    
    console.log(`MaxSum is `, Math.max(...msis));
}

function main() {
  console.log("\nSelect the items which you want to print from below list: \n");
  console.log();
  console.log("\n1. Count the Number of Set Bits in an Integer.\n");
  console.log("\n2.  Check if a Number is a Power of 2.\n");
  console.log("\n3.  Swap Two Numbers Without Using a Temporary Variable.\n");
  console.log("\n4. Find the GCD of Two Numbers. \n");
  console.log("\n5. Check if a Number is Prime. \n");
  console.log("\n6. Generate All Subsets of a Set. \n");
  console.log("\n7. All Permutations of a String. \n");
  console.log("\n8. Find the nth Fibonacci Number. \n");
  console.log("\n9. 0/1 Knapsack Problem. \n");
  console.log("\n10.  Longest Common Subsequence. \n");
  console.log("\n11. Minimum Number of Jumps to Reach the End of an Array. \n");
  console.log("\n12. Maximum Sum Increasing Subsequence. \n");
  rl.question("", function (num_of_item) {
    var selectedItem = parseInt(num_of_item);
    console.log();
    switch (selectedItem) {
      case 1:
        countSetBits();
        rl.close();
        break;
      case 2:
        isPowerOfTwo();
        rl.close();
        break;
      case 3:
        swap();
        rl.close();
        break;
      case 4:
        gcd();
        rl.close();
        break;
      case 5:
        isPrime();
        rl.close();
        break;
      case 6:
        generateSubsets();
        rl.close();
        break;
      case 7:
        permute();
        rl.close();
        break;
      case 8:
        fibinacci();
        rl.close();
        break;
      case 9:
        knapsack();
        rl.close();
        break;
      case 10:
        lcs();
        rl.close();
        break;
      case 11:
        minJumps();
        rl.close();
        break;
      case 12:
        maxSumIS();
        rl.close();
        break;
      default:
        console.log(
          "\nInvalid Number, Please select a number from above given list :)\n"
        );
        rl.close();
        break;
    }
  });
}
main();
