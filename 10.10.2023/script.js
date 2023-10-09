function triggerError(parameter) {
  if (parameter === "Fehler") {
    throw new Error("Eine Ausnahme wurde ausgelöst!");
  }
}

function main() {
  const outputElement = document.getElementById("output");
  let errorCount = 0;

  for (let i = 0; i < 13; i++) {
    try {
      const randomParameter = Math.random() < 0.5 ? "Fehler" : "Kein Fehler";
      triggerError(randomParameter);
      outputElement.textContent += "Funktion wurde ohne Fehler aufgerufen.\n";
    } catch (error) {
      errorCount++;
      outputElement.textContent +=
        "Fehler aufgetreten: " + error.message + "\n";
    }
  }
 //habe die angabe nicht genau verstanden --> habe mir im Interent hilfe geholt --> können sie morgen herzeigen wie
 // man das Beispiel richtig löst :) 
  if (errorCount === 0) {
    outputElement.textContent += "Keine Fehler aufgetreten.";
  } else {
    outputElement.textContent +=
      "Insgesamt wurden " + errorCount + " Fehler ausgelöst.";
  }
}

document.getElementById("callFunctionButton").addEventListener("click", main);
