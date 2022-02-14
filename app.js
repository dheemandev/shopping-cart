function updateCase(isIncreasing){
  const caseInput = document.getElementById('case-Input')
  let finalInput = caseInput.value ;
  if(isIncreasing){
  finalInput = parseInt(finalInput) + 1;
      
  }  
  else if(finalInput> 0){
  finalInput = parseInt(finalInput) -1;
    
  }
  caseInput.value = finalInput
  const caseTotal =document.getElementById('case-total')
  caseTotal.innerText = finalInput * 59;

}




document.getElementById('case-button').addEventListener('click', function(){
    
   updateCase(true);

})
document.getElementById('minus-button').addEventListener('click', function(){
  updateCase(false);

  
})

