// statement (condition check)

let vote =prompt("enter your age")

if (vote>=18)
{
    alert("you are able to vote")
}
else{

    alert("you arenot able to vote.")
}

// same as above code 
//vote >=18 ?  alert("you are able to vote") : alert("you arenot able to vote.")



// for result
// __________________________________________________________________________________________________________

let engMarks = Number(prompt("enter your english marks "))

let nepMarks = Number(prompt("enter your nepali marks "))

let sciMarks = Number(prompt("enter your science marks "))

let totalMark = engMarks+nepMarks+sciMarks

let percentage=(totalMark/300)*100

if (percentage>=90)
{
alert(`you got A+ with total marks ${totalMark} and percentage ${percentage}`)
document.write(`you got A+ with total marks ${totalMark} and percentage ${percentage}`)
}
else if (percentage<90 && percentage>=80 )
{
    
 alert(`you got A with total marks ${totalMark} and percentage ${percentage}`)
 document.write(`you got A with total marks ${totalMark} and percentage ${percentage}`)
}
else if (percentage<80 && percentage>=70)
{
 
alert(`you got B+ with total marks ${totalMark} and percentage ${percentage}`)
document.write(`you got A with total marks ${totalMark} and percentage ${percentage}`)

}
else{

    alert(`you are fail with total marks ${totalMark} and percentage ${percentage}`)
    document.write(`you are fail with total marks ${totalMark} and percentage ${percentage}`)
}


//for day
//___________________________________________________________________________________________________________________

let time = prompt("enter the time")


if (time>5 && time<=12)
 {
   alert("good morning")
  }
  else if (time<12 && time<=3){
    alert("good afternoon")
  }
 else if(time>3 && time<=6)
  {
    alert("good evening")
  }


    
