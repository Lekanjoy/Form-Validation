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

/*
const lexy = {
    firstName: 'Alabi',
    lastName: 'Olalekan',
    age: 22,
    school: 'FUNAAB',
    address: {
        street: 'FUNIS, Isolu',
        city: 'Abeokuta',
        state: 'Ogun State',
        country: 'Nigeria'
    },
    hobbies: ['Gaming', 'Music', 'Football']
};

lexy.hobbies.unshift('Organising');

console.log(lexy.hobbies);
console.log(lexy.address.street);
console.log(lexy.address);
console.log(Array.isArray(lexy.address));


const toDos = [
  {
    id: 1,
    task: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    task: "Meeting with Team",
    isCompleted: true,
  },
  {
    id: 3,
    task: "Chelsea Match",
    isCompleted: true,
  }
];

console.log(toDos[1].task);

// LOOPING THE VARIOUS TASKS IN THE ARRAY
for(let toDo of toDos) {
    console.log(toDo.task)
}


//CONDITIONALS

const ofAge = 18;
var age = [
    ['mary', 12],
    ['james', 19],
    ['paul', 22]
];
const text = age >= ofAge ? 'Youre welcome' : 'Access Denied'; // If age is greater or equal  to ofAge, "Youre welcome" is displayed else "Acess Denied"
console.log(age[1][0]);
console.log(age.length);
//console.log(text(age[1][1]));

const x ='19';
if(x === 19) {
    console.log('x is 19')
}
else{
    console.log('x is not 19')
}


const age = 13;
const country = 'Nigeria'; 

if (age >= 18 && country === "Nigeria") {
  console.log("You are of legal age in Nigeria");
} else {
  console.log("Sorry, you are not of legal age and not also a Nigerian!");
}


const label = document.querySelector("#my-form label");
label.innerHTML = 'First Name'

const sub = document.querySelector("#sub-btn");
sub.style.background = 'red';

const sub = document.querySelector("#sub-btn");
sub.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e);

})


//Switch Statement with default value set.
function switchTest (arg) {
  var answer = '';
  switch(arg){
    case 1: 
    answer = "Alpha";
    break;
    case 2: 
    answer = "Beta";
    break;
    case 3: 
    answer = "Gamma";
    break;
    case 4: 
    answer = "Delta";
    break;
    default:
      answer = 'Not allocated'
      break;
  }
  return 'This wave is - ' +  answer ;
} 

//console.log(switchTest(1));
function functionWithArg(a,b,c,d) {
  console.log(a+b+c*d/2)
  
}
functionWithArg(2,6,2,5);


for (let num = 1; num <=26; num++)
{
  console.log(num);
}
*/
