
let weight = 90;
let height = 1.91;

function calculateBMI(weight, height){
    let bmi = weight / (height * height);
    interpretBMI(bmi);
}

function interpretBMI(bmi){
    if(bmi < 18.5){
        console.log("Your bmi is :"+bmi + " Underweight")
    }
    if(bmi > 18.5 && bmi <= 25){
        console.log("Your bmi is :"+bmi + " Normal weight")
    }
    if(bmi > 25 && bmi < 30){
        console.log("Your bmi is :"+bmi + " Overweight")
    }
    if(bmi >= 30){
        console.log("Your bmi is :"+ bmi + " Obese")
    }
}

calculateBMI(weight,height)

