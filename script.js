
const result = document.querySelector(".Result");

const buttons = document.querySelectorAll(".Number");


result.innerText = "";


buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.innerText;

    
    if (value === "=") {
      try {
        result.innerText=result.innerText.replace('x','*');
        let m = eval(result.innerText);
        m=m.toFixed(4);
        result.innerText=m;
      } catch (e) {
        result.innerText = "Error";
      }
    }
  
    else if (value === "Remove") {
      result.innerText = "";
    }
    
    else {
      result.innerText += value;
    }
  });
});


