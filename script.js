// const expressionEl = document.getElementById("expression");
// const resultEl = document.getElementById("result");
// const keys = document.getElementById("keys");
// const themeToggle = document.getElementById("themeToggle");

// let expression = "";
// let result = "";

// function updateDisplay() {
//   expressionEl.textContent = expression || " ";
//   resultEl.textContent = result || "0";
// }

// function calculate() {
//   try {
//     result = eval(expression.replace(/÷/g, "/").replace(/×/g, "*")) || "";
//   } catch {
//     result = "Error";
//   }
//   updateDisplay();
// }

// keys.addEventListener("click", (e) => {
//   const key = e.target;
//   if (!key.classList.contains("key")) return;

//   const value = key.dataset.value;
//   const action = key.dataset.action;

//   if (value) {
//     expression += value;
//   } else if (action) {
//     if (action === "all-clear") {
//       expression = "";
//       result = "";
//     } else if (action === "clear") {
//       expression = "";
//     } else if (action === "backspace") {
//       expression = expression.slice(0, -1);
//     } else if (action === "equals") {
//       calculate();
//       expression = result.toString();
//     } else if (action === "percent") {
//       expression = (parseFloat(expression) / 100).toString();
//     } else if (action === "sign") {
//       if (expression) {
//         expression = (-parseFloat(expression)).toString();
//       }
//     }
//   }
//   updateDisplay();
// });

// document.addEventListener("keydown", (e) => {
//   if (/^[0-9]$/.test(e.key)) {
//     expression += e.key;
//   } else if ("+-*/.".includes(e.key)) {
//     expression += e.key;
//   } else if (e.key === "Enter") {
//     calculate();
//     expression = result.toString();
//   } else if (e.key === "Backspace") {
//     expression = expression.slice(0, -1);
//   } else if (e.key === "Escape") {
//     expression = "";
//     result = "";
//   }
//   updateDisplay();
// });

// themeToggle.addEventListener("click", () => {
//   document.body.classList.toggle("light");
//   themeToggle.textContent =
//     document.body.classList.contains("light") ? "🌞 Light" : "🌙 Dark";
// });

// updateDisplay();







// selecting elements from the DOM
const expressionDisplay = document.getElementById('expression');
const resultDisplay = document.getElementById('result');
const keys = document.getElementById('keys');
const themeToggle = document.getElementById('themeToggle');

// initializing variables to store the current expression, result and theme state 
let expression = '';
let result = '';
let isDarkTheme = true;

// function to update the display
function updateDisplay() {
    expressionDisplay.textContent = expression || ' ';
    resultDisplay.textContent = result || '0';
}

// function to evaluate the expression
function calculate() {
    try{
        result = eval(expression.replace(/÷/g, '/').replace(/×/g, '*')) || '';  // g = “global,” meaning replace all occurrences, not just the first and eval() is a js in-built function that evaluates a string as JavaScript code
    }
    catch{
        result = 'Error'; // in case of invalid expression js throws an error instead of crashing the program and we catch that error and display 'Error' as result
    }
    updateDisplay(); // updating the display after calculation and showing the result
    };

    // event listener for button clicks
    keys.addEventListener('click', function(e){  // 'e' is the event object(it stores info about the click, like where it happened)
        const key = e.target; // the actual element that was clicked and store the clicked button in a variable called key
        if(!key.classList.contains('key')) return; // if the clicked element doesn't have the class 'key', we ignore the click and return from the function

        const value = key.dataset.value;  // Looks at the clicked button (key).If that button has a data-value attribute, value will store it.
        const action = key.dataset.action;  //Looks for the data-action attribute of the clicked button.If the button has it, action will store it.

        if(value) {
            expression += value;  // if value is present, we append it to the expression as a string
        }
        else if(action) {
            if(action === 'all-clear') {  // clears both expression and result
                expression = '';
                result = '';
            }
            else if(action === 'clear') {  // clears only the expression, keeps result
                expression = '';
            }
            else if(action === 'backspace') {
                expression = expression.slice(0, -1); // removes the last character from the expression 
            }
            else if(action === 'equals') {
                calculate(); // evaluates the expression and updates the result
                expression = result.toString();  // Converts the result into a string, sets it as the new expression to allow further calculations
            }
            else if(action === 'percent') {
                expression = (parseFloat(expression) / 100).toString();  // Converts the expression to a float, divides it by 100, converts it back to a string, and sets it as the new expression    
            }
            else if(action === 'sign') {
                if (expression) {  // checks if expression is not empty
                    expression = (-parseFloat(expression)).toString();  // Converts the expression to a float, negates it (changes its sign), converts it back to a string, and sets it as the new expression
                }
            }
        }
        updateDisplay(); // updates the display after processing the button click 
    })

    // event listener for keyboard input
    document.addEventListener('keydown', function(e) {
        if (/^[0-9]$/.test(e.key)) {
            expression += e.key;  // if a number key (0-9) is pressed, append it to the expression 
        }
        else if ('+-*/.'.includes(e.key)) {
            expression += e.key; // if an operator key (+, -, *, /, .) is pressed, append it to the expression
        }
        else if(e.key === 'Enter') {
            e.preventDefault();
                calculate(); // evaluates the expression and updates the result
                if (result !== 'Error' && result !== ''){
                expression = result.toString();  // Converts the result into a string, sets it as the new expression to allow further calculations
            }}
        else if (e.key === 'Backspace') {
            expression = expression.slice(0, -1);
        }
        else if (e.key === 'Escape') {  // if Escape key is pressed, clear both expression and result
            expression = '';
            result = '';
        }
        updateDisplay();

    });

    // event listener for theme toggle button
    themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
  themeToggle.textContent =
    document.body.classList.contains("light") ? "🌞 Light" : "🌙 Dark";
});


