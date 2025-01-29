#Projects related to DOM

##Project Link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#Solution Code

##project 1

```javascript

const buttons=document.querySelectorAll('.button');
const body=document.querySelector("body")


buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target);
    if(e.target.id=='grey'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id=='white'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id=='blue'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id=='yellow'){
      body.style.backgroundColor=e.target.id;
    }
  })
});


```

##Project 2

```javascript

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please enter a valid height`;
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please enter a valid weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    
    let category = "";
    if (bmi < 18.6) {
      category = "Underweight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      category = "Normal Range";
    } else {
      category = "Overweight";
    }

    results.innerHTML = `<span>Your BMI is ${bmi} - ${category}</span>`;
  }
});



```
