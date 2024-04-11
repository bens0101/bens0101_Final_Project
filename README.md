# Ayoub Bens0101

```js
let weight = 90;
let height = 1.91;

function calculateBMI(weight, height){
    let bmi = weight / (height * height);
    interpretBMI(bmi);
}

function interpretBMI(bmi){
    if(bmi < 18.5){
        console.log("Your bmi is: " + bmi + " Underweight");
    }
    if(bmi > 18.5 && bmi <= 25){
        console.log("Your bmi is: " + bmi + " Normal weight");
    }
    if(bmi > 25 && bmi < 30){
        console.log("Your bmi is: " + bmi + " Overweight");
    }
    if(bmi >= 30){
        console.log("Your bmi is: " + bmi + " Obese");
    }
}

calculateBMI(weight, height);
```



![Xcode](./Screenshot%202024-04-11%20at%2010.41.34 AM.jpg)
![parallels](./Screenshot%202024-04-11%20at%2010.46.34 AM.jpg)
![AndroidStudio](./Screenshot%202024-04-11%20at%2010.58.25 AM.jpg)





