
/**
 * Created by Rajendra on 6/22/17.
 */
function Sex(){
  var Entrsex =document.getElementById("EntrSex");
  document.getElementById("Sex").value=Entrsex.options[Entrsex.selectedIndex].text;
}
function Age(){
  var EntrAge =document.getElementById("EntrAge");
  document.getElementById("Age").value=EntrAge.options[EntrAge.selectedIndex].text;
}
function Race(){
  var EntrRace =document.getElementById("EntrRace");
  document.getElementById("Race").value=EntrRace.options[EntrRace.selectedIndex].text;
}
function NSAIDS(){
  var EntrNSAIDS =document.getElementById("EntrNSAIDS");
  document.getElementById("NSAIDS").value=EntrNSAIDS.options[EntrNSAIDS.selectedIndex].text;
}
