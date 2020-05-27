const btn = document.querySelector(".btn_currency");
const fromCurrencyDD = document.querySelector("#from-dd");
const toCurrencyDD = document.querySelector("#to-dd");
const amoutText = document.querySelector('input[type="text"]');
btn.addEventListener("click", fetchCurrency);

function fetchCurrency() {
  const fromCurrency = fromCurrencyDD.value;
  const toCurrency = toCurrencyDD.value;
  fetch(
    `https://api.exchangeratesapi.io/latest?base=${fromCurrency}&symbols=${fromCurrency},${toCurrency}`
  )
    .then(res => res.json())
    .then(res => addCurrencyVal(res));
}

function addCurrencyVal(data) {
  console.log(data);
  const responseDiv = document.querySelector(".response");
  const baseAmount = Number(amoutText.value);
  const response = `${baseAmount} ${data.base} = ${(
    baseAmount * data.rates[toCurrencyDD.value]
  ).toFixed(2)} ${toCurrencyDD.value}`;
  responseDiv.textContent = response;
}
