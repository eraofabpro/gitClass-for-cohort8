//declare
//functions without parameters
function greetings (){
    console.log("Hello World");
}

greetings()


//functions with parameters
function welcome(name){
     console.log(`Welcome to class MR/MISS/MRS ${name}`)
}


welcome("Jake")

//add
function add (){
    let x = 4;
    let y = 6;
    console.log( x + y , x * y)
    return x + y;
}
console.log(add())

function addition (x , y){
    return x + y;
}
console.log(addition(2 , 3))

function ageCheck(age){
    if(age <= 18){
         return "please GET OUT ...YOU ARE UNDERAGED";
    }else{
        return "Buy one bottle for me Egbon!!"
    }
}
let jakeAge = ageCheck(23);
console.log(jakeAge);


function luckyNumber(number){
    if(number <= 4){
        return "CONGRATULATIONS!!";
    }else{
        return "TRY AGAIN";
    }
}
let lotteryWin = luckyNumber(3);
  console.log(lotteryWin);

  //scope
  //global scope
  let score;

  function gradingSystem(){
    if(score >= 50){
        return "PASSED";
    }else{
        return "FAILED!!!"
    }
  }
  function deliveryFee(){
    let fee = 5000;
    return fee
  }

  function gradingStudent(score){
   if (score >= 70 && score <= 100){
    return "A";
   }else if (score >= 50 && score <= 69){
    return "B";
   }else if (score >= 0 && score <= 49){
    return "F";
   }
  }
console.log(gradingStudent(72));
console.log(gradingStudent(65));
console.log(gradingStudent(36));

//ARROW FUNCTIONS
const minus = (num) =>{
    return num - 50
}
let result = minus(75);