document.getElementById("Withdraw-btn").addEventListener("click", function () {
   const withdrawInputElement = depositInputField("withdraw-input");
   const withdrawTextElement = depositTextField("withdraw-text");

   if (isNaN(withdrawInputElement)) {
      alert("please input is a number");
      return;
   }

   const withdrawTotal = withdrawInputElement + withdrawTextElement;

   const withdrawBalance = depositTextField("balance");
   if (withdrawBalance < withdrawInputElement) {
      alert("balance is low");
      return;
   }
   const withdrawBalanceTotal = withdrawBalance - withdrawInputElement;

   setElement("withdraw-text", withdrawTotal);
   setElement("balance", withdrawBalanceTotal);
});
