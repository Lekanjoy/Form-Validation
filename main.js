const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "<h4> &#9888 Please Enter all Fields</h4>";

    //Removes error after 4 seconds
    setTimeout(() => msg.remove(), 4000);
  } else {
    msg.classList.add("success");
    msg.innerHTML = "<h4>Form Submition Successful &#128077</h4>";

    //Clear all fields after Completion
    nameInput.value = "";
    emailInput.value = "";
  }
}


