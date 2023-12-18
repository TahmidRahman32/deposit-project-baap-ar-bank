document.getElementById("deposit-btn").addEventListener("click", function () {
   const depositInputElement = depositInputField("deposit-text");
   const depositTextValue = depositTextField("deposit-value");
   if (isNaN(depositInputElement)) {
      alert("vai number likho");
      return;
   }

   const depositTotal = depositInputElement + depositTextValue;

   setElement("deposit-value", depositTotal);

   const depositBalance = depositTextField("balance");
   const depositBalanceTotal = depositInputElement + depositBalance;

   setElement("balance", depositBalanceTotal);
});
