import inquirer from "inquirer";

// initialize user balance and Pin code
let myBalance = 5000;
let myPin = 2542;

// print wellcome message 
console.log("welcome to code with yasir - ATM Machine");

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message:"Enter your pin code:"
    }
])
if (pinAnswer.pin === myPin){
    console.log("pin is Correct, Login successfully!");
    console.log(`Current Account Balance is:"${myBalance}`)

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operation:",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ])

    if(operationAns.operation === "Withdraw Amount"){
        let WithdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "select a withdrawl methode",
                choices: ["fast cash", "Enter Amount",]
            }
        ])
        if(WithdrawAns.withdrawMethod === "fast cash"){
            let fastCashAns = await inquirer.prompt([
                {
                    name:"fastCash",
                    type: "list",
                    message: "select Amount:",
                    choices: [1000, 2000, 5000, 10000]
                }
            ])
            if(fastCashAns.fastCash > myBalance){
                console.log("Insufficient Balance");
            }
            else{
                myBalance -= fastCashAns.fastCash
                console.log(`${fastCashAns.fastCash} withdraw Successfully`)
                console.log(`your remaining Balance is:${myBalance}`);
            }

        }
        else if(WithdrawAns.withdrawMethod === "Enter Amount"){
            let amuntAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter the amount to Withdraw:"
                }
            ])
            if(amuntAns.ammount > myBalance){
                console.log("Insufficient Balance");
            }
            else{
                myBalance -= amuntAns.amount;
                console.log(`${amuntAns.amount} Withdraw successfully`);
                console.log(`Your Remaining Balance is:${myBalance}`);
            }
        }
       
    }
    else if (operationAns.operation === "Check Balance"){
        console.log(`Your Account Balance is:${myBalance}`);
    }
}
else{
    console.log("pin is Incorrect, Try Again!");
}