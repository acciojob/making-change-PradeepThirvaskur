const makeChange = (amount) => {
  // your code here

        if((typeof amount==="number")&&(amount >0 && amount<100))
            {
                const change={ q: 0, d: 0, n: 0, p: 0 }; 

                change.q=Math.floor(amount/25);
                amount %= 25                                  // long form amount=amount%25;

                change.d=Math.floor(amount/10);
                amount %=10;

                change.n=Math.floor(amount/5);
                amount %=5;

                change.p=amount;
            
                return change;
            }
            else{console.log("Enter the correct amount")}
};

// Do not the change the code below
const amount = prompt("Enter amount: ");
alert(JSON.stringify(makeChange(amount)));