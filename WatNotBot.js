const projects = [
                  {projName:"Website", femPerspectiveScore:3, sciTechScore:4, dialogueScore:4, heartScore:3, url:"website.html" }, 
                  {projName:"Risen", femPerspectiveScore:2, sciTechScore:2, dialogueScore:5, heartScore:2, url:"risen.html" }, 
                  {projName:"Periodical", femPerspectiveScore:5, sciTechScore:5, dialogueScore:5, heartScore:2, url:"periodical.html" }, 
                  {projName:"Knitwitter", femPerspectiveScore:3, sciTechScore:4, dialogueScore:3, heartScore:5, url:"knitwitter.html" }, 
                  {projName:"Pocket Manifesto", femPerspectiveScore:4, sciTechScore:1, dialogueScore:5, heartScore:4, url:"pocket_manifesto.html" }, 
                  {projName:"Mrs Somerville's Monument", femPerspectiveScore:5, sciTechScore:3, dialogueScore:2, heartScore:3, url:"mrs_somerville.html" }, 
                  {projName:"Moonbrella", femPerspectiveScore:5, sciTechScore:3, dialogueScore:4, heartScore:4, url:"moonbrella.html" }, 
                  {projName:"The Redemption of the Magic Cone Snail", femPerspectiveScore:1, sciTechScore:5, dialogueScore:1, heartScore:5, url:"cone_snail.html" }, 
                  {projName:"About us", femPerspectiveScore:4, sciTechScore:5, dialogueScore:5, heartScore:5, url:"about.html" }
                  ];

let selectedProjectsArr=[];
var timerVar1 = 0;
var timerVar1 = 0;
var timerVar1 = 0;
var timerVar1 = 0;

function initialiseWatNotBot(){
  //alert("WatNotBot triggered")
  document.getElementById("WatNotBot").style.visibility="visible";
  timerVar1 = setTimeout(function(){document.getElementById("BotText1").style.visibility="visible";},1000);
  timerVar2 = setTimeout(function(){document.getElementById("BotText2").style.visibility="visible";},3000);
  timerVar3 =setTimeout(function(){document.getElementById("BotText3").style.visibility="visible";},5000);
  timerVar4 =setTimeout(function(){document.getElementById("BotText4").style.visibility="visible";},7000);
}





function closeWatNotBot(){
  //clear the timers - otherwise divs continue to appear NB: There might be a better way of doing this by nesting bot text divs as child attributes
  // of bot. But timer might work independently. Also, might want to stop it regardless cos it'll do a weird mess when it's visible again. 
  clearInterval(timerVar1);
  clearInterval(timerVar2);
  clearInterval(timerVar3);
  clearInterval(timerVar4);
  //see above re not having to specify hiding of child elements because they're hidden with parent element.
  document.getElementById("WatNotBot").style.visibility="hidden";
  document.getElementById("BotText1").style.visibility="hidden";
  document.getElementById("BotText2").style.visibility="hidden";
  document.getElementById("BotText3").style.visibility="hidden";
  document.getElementById("BotText4").style.visibility="hidden";
  

}

function buttonClicked(buttonName){

  let slider_feminist = document.getElementById("range1");
  let slider_ST = document.getElementById("range2");
  let slider_dialogic = document.getElementById("range3");
  let output = document.getElementById("demo");


//buttonName parameter is just to test different logic for selecting projects based on slider positions. 
  // it can be removed once a decision about logic is made.
selectedProjectsArr=[];
    
    let pLen = projects.length;
    let text = buttonName + "<ul>";
    
    for (let i = 0; i < pLen; i++) {
      switch (buttonName){
        case "And":
          //if all three values for project match, 
          if(projects[i].femPerspectiveScore >= slider_feminist.value && 
            projects[i].sciTechScore >= slider_ST.value 
            && projects[i].dialogueScore>= slider_dialogic.value)
          {
            selectedProjectsArr.push(projects[i])
          }
          break;
        case "Or":
          if(projects[i].femPerspectiveScore >= slider_feminist.value || 
        projects[i].sciTechScore >= slider_ST.value 
        || projects[i].dialogueScore >= slider_dialogic.value)
      {
        selectedProjectsArr.push(projects[i])
      }
          break;
        case "Or=":
              if(projects[i].femPerspectiveScore == slider_feminist.value || 
            projects[i].sciTechScore == slider_ST.value 
            || projects[i].dialogueScore == slider_dialogic.value)
          {
            selectedProjectsArr.push(projects[i])
          }
          break;
        }
    

      }

      //document.getElementById("demo").innerHTML = text +"</ul>";
      createMenu(selectedProjectsArr);
      closeWatNotBot();
   
}


function createMenu(selectedProjectsArr)
{

//populate chart with selected projects
document.getElementById("yourMenu").innerHTML="<ul>";
  for (let i = 0; i < selectedProjectsArr.length; i++) {

document.getElementById("yourMenu").innerHTML += "<li>" + selectedProjectsArr[i].projName + "</li>";



  }
document.getElementById("yourMenu").innerHTML+="</ul>";

}

