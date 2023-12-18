function depositInputField(deposit) {
   const depositInputText = document.getElementById(deposit);
   const depositInputTextString = depositInputText.value;
   const newDepositInputText = parseFloat(depositInputTextString);
   depositInputText.value = "";

   return newDepositInputText;
}

function depositTextField(depositText) {
   const depositTextElement = document.getElementById(depositText);
   const depositTextString = depositTextElement.innerText;
   const newDepositText = parseFloat(depositTextString);
   return newDepositText;
}

function setElement(depositId, newValue) {
   const value = document.getElementById(depositId);
   value.innerText = newValue;
}
