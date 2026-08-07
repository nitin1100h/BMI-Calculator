const button = document.querySelector('.dark');
const form = document.querySelector('.card');
// console.log(button);

button.addEventListener('click',function(e){
  
  if(e.target.id === "dark"){
  button.style.backgroundColor = "black"
  button.innerHTML = "Light mode"
  document.body.style.backgroundColor = "#222831"
  form.style.backgroundColor = "#006D5B"
  document.querySelector('h1').style.backgroundColor="#1faa59"; 
  button.id="light"
  }

  else{
  document.body.style.color = "";
  button.style.backgroundColor = ""
  button.innerHTML = ""
  document.body.style.backgroundColor = ""
  form.style.backgroundColor = ""
  document.querySelector('h1').style.backgroundColor=""; 
  button.innerHTML = "Dark mode";
  button.id="dark"
  }
})

form.addEventListener('submit', function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results =document.querySelector('#results');


  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = "please give a valid height";
  }

  else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = "please give a valid weight";
  }

  else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if(bmi<18.6){
      results.innerHTML = `<span> BMI : ${bmi} <br> Status : Under weight</span>`;
    }

    else if(bmi>24.9){
      results.innerHTML = `<span> BMI : ${bmi} <br> Status : Over weight</span>`;
    }

    else{
      results.innerHTML = `<span> BMI : ${bmi} <br> Status : Normal</span>`;
    }
  }
})