class Expenses{
    constructor(item, date, total){
        this.item = item;
        this.date = date;
        this.total = total;
    }
}

let listExpenses = [];
let expenses;

var btn = document.getElementById("btn-submit");
var item = document.getElementById("input-item");
var date = document.getElementById("date-exp");
var total = document.getElementById("total-exp");

var arr = document.getElementById("arr");

btn.addEventListener("click", ()=>{
    // alert("test");
    formValidation();
   // arr.innerHTML = JSON.stringify(listExpenses);
   // arr.innerHTML = listExpenses[0].item;
   // alert(listExpenses[0].item)
    displayExpenses();

    item.value = "";
    date.value = "";
    total.value = "";
});

function formValidation(){
    var err = document.getElementsByClassName("err-msg");
    // var errMsg2 = document.getElementById("err-msg2");
    // var errMsg3 = document.getElementById("err-msg3");
    if(!item.value || !date.value || !total.value){
        //alert("Please fill something");
        for(let i = 0; i<err.length; i++){
            err[i].style.display = "block";
        }
        
    }
    // else if(!date.value){
    //     alert("Please insert date");
    // }
    // else if(!total.value){
    //     alert("Please insert total");
    // }
    else{
        for(let i = 0; i<err.length; i++){
            err[i].style.display = "none";
        }
        expenses = new Expenses(item.value, date.value, total.value);
        //alert(expenses.item + ", " + expenses.date + ", RM" + expenses.total);
        listExpenses.push(expenses);
    }
}

function displayExpenses(){
    var tableExp = document.getElementById("table-exp");
    var totalSpend = document.getElementById("total-spend");

    let totalAmount = 0;

    tableExp.innerHTML = "";

    tableExp.innerHTML = `        
    <tr>
        <th>Item</th>
        <th>DateTime</th>
        <th>Amount(RM)</th>
    </tr>`;

    listExpenses.forEach(function(arr,i){
        tableExp.innerHTML += `
        <tr>
            <td>${arr.item}</td>
            <td>${arr.date}</td>
            <td>${arr.total}</td>
        </tr>
        `;
        totalAmount = parseFloat(totalAmount) + parseFloat(arr.total);
    });

    totalSpend.innerHTML = "RM " + totalAmount.toFixed(2);
    //alert(totalAmount);
}