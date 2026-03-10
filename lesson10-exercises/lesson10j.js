  let calculation = localStorage.getItem("calculation") || "";

      if (calculation) {
        displayCalculation();
      }

      function updateCalculation(value) {
        calculation += value;
        localStorage.setItem("calculation", calculation);
        displayCalculation();
        console.log(calculation);
      }

      function displayCalculation() {
        document.querySelector("p").innerText = calculation;
      }