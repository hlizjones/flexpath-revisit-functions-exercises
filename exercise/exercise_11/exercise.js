// Using a for loop, schedule console logs of the numbers from 1 to 5 with a 
// delay of 1 second between each using setTimeout. 

// Explain the issue with closures in this context if you use `var` to declare
// your for loop index variable and how to fix it.


function printNumbers () {
    for (var i =1; i <= 5; i++) {
        setTimeout (()=> {
            console.log(i)
        }, i*1000);
}
}

printNumbers()

/*Using var will print 6 each time bc var variables are scoped by function unlike let which is blocked scoped.
This means that with var it's refering to the variable by reference. Each iteration changes the same variable
then after each iteration is complete, it prints the final value. per iteration */