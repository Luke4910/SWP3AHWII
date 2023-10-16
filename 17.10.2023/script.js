
function zufälligerErfolg() {
    return Math.random() < 0.5;
  }
  

  function asynchroneAktion() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (zufälligerErfolg()) {
          resolve('Erfolg!');
        } else {
          reject('Fehler!');
        }
      }, 1000); 
    });
  }
  
  const button = document.getElementById('button');
  const output = document.getElementById('output');
  
  
  button.addEventListener('click', () => {
   
    output.innerHTML = '';
    output.classList.remove('error');
  
   
    asynchroneAktion()
      .then(result => {
        output.textContent = result;
      })
      .catch(error => {
        output.textContent = error;
        output.classList.add('error'); 
      });
  });
  