document.getElementById("deposit-btn").addEventListener("click", function () {
   const depositInputElement = depositInputField("deposit-text");
   if (depositInputElement < 0) {
      alert("please input positive value");
      return;
   }
   const depositTextValue = depositTextField("deposit-value");

   if (isNaN(depositInputElement)) {
      alert("vai number likho");
      return;
   }
   // if(depositInputElement == '0'){
   //    alert('')
   // }

   const depositTotal = depositInputElement + depositTextValue;

   setElement("deposit-value", depositTotal);

   const depositBalance = depositTextField("balance");
   const depositBalanceTotal = depositInputElement + depositBalance;

   setElement("balance", depositBalanceTotal);
});
