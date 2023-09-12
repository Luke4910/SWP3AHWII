const url = "https://innolab.spengergasse.at/misc/swp/currencies.json";

function showResult(inputValue) {
  const ausgabeBereich = document.getElementById("ausgabe-bereich");
  ausgabeBereich.innerHTML = ""; // Clear previous results

  if (inputValue.trim() === "") {
    ausgabeBereich.innerHTML = "<p>Please enter a valid number</p>";
    return;
  }

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const resultList = document.createElement("ul");
      resultList.classList.add("list-group", "mt-3");
      data.forEach(currency => {
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        listItem.innerHTML = `${currency.currency}: ${currency.rate * inputValue} €`;
        resultList.appendChild(listItem);
      });
      ausgabeBereich.appendChild(resultList);
    })
    .catch(error => {
      console.log("Error fetching data: ", error);
      ausgabeBereich.innerHTML = "<p>Error fetching data. Please try again later.</p>";
    });
}
