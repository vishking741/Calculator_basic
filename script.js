let expression = "";
      const buttons = document.querySelectorAll(".button");
      const display = document.querySelector(".display");
      const text = document.querySelector(".text");

      const clear = document.querySelector("#clear");

      Array.from(buttons).forEach((button) => {
        button.addEventListener("click", (e) => {
          const value = e.target.innerText;
          const historyelement = document.createElement("div");
          historyelement.classList.add("history-element");
          const now = new Date();
          const time = now.toLocaleTimeString();
          const dateString = now.toLocaleDateString();
          const para1 = document.createElement("p");
          para1.classList.add("para1");
          const para2 = document.createElement("p");
          para2.classList.add("para2");
          text.scrollTop = text.scrollHeight;
          if (value === "AC") {
            expression = "";
            display.innerText = "";
            return;
          } else if (value === "DEL") {
            expression = expression.slice(0, -1);
            display.innerText = expression;
            return;
          } else if (value === "=") {
            try {
              const result = eval(
                expression.replace(/×/g, "*").replace(/÷/g, "/")
              );
              para1.innerText = `${expression} = ${result} `;
              historyelement.appendChild(para1);
              para2.innerText = `calculation done at ${time} , ${dateString}`;
              historyelement.appendChild(para2);
              text.appendChild(historyelement);
              display.innerText = result;
              expression = result.toString();
            } catch (err) {
              para1.innerText = `${expression} ==>> Error`;
              historyelement.appendChild(para1);
              para2.innerText = `calculation done at ${time} , ${dateString}`;
              historyelement.appendChild(para2);
              text.appendChild(historyelement);
              display.innerText = "Error";
              expression = "";
            }
            return;
          }
          expression += value;
          display.innerText = expression;
        });
      });
      clear.addEventListener("click", (e) => {
        text.innerHTML = "";
      });