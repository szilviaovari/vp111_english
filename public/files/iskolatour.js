var elmozgas = 0
var aktualkep ="" ;

function teljeskepnyit(kep) {
  var szepkapva = kep.split(".");
  var szetkapva2 = szepkapva[0].split("/");
  var fajlnevszama = szetkapva2.length;

  let imgPath = location.origin + "/public/files/panorama/";
  var imgName = kep.split(imgPath)[1];

  aktualkep = szetkapva2[fajlnevszama - 1];
  if (
    szetkapva2[fajlnevszama - 1] == "folyoso-1" ||
    szetkapva2[fajlnevszama - 1] == "folyoso0" ||
    szetkapva2[fajlnevszama - 1] == "folyoso1" ||
    szetkapva2[fajlnevszama - 1] == "folyoso2" ||
    szetkapva2[fajlnevszama - 1] == "aula"
  ) {
    document.getElementById("teljeskep").src = imgPath + imgName
  } else {
    document.getElementById("teljeskep").src =
      imgPath + imgName.split(".")[0] + "D." + imgName.split(".")[1];
  }
  document.getElementById("teljeskepkeret").style.display = "flex";
  return aktualkep;
}

function teljeskepzar(){
  document.getElementById('teljeskep').style.objectPosition = "0px";
  elmozgas = 0;
    document.getElementById("teljeskepkeret").style.display = "none" ;
}


function kepbalra() {
  balraMozgas();
}

function balraMozgas() {
  
  if(aktualkep != "folyoso-1" && aktualkep != "folyoso0" 
  && aktualkep != "folyoso1" && aktualkep != "folyoso2"  && aktualkep != "aula" && aktualkep != "folyoso3"){
    if (elmozgas < 750) {
      elmozgas+=5;
      var mozgatas = elmozgas + "px";
      document.getElementById('teljeskep').style.objectPosition = mozgatas;


      timeoutID = setTimeout(balraMozgas, 1);
  }}
}

function kepvisszaJ() {
  clearTimeout(timeoutID);
}



function kepjobbra() {
  jobbraMozgas();
}

function jobbraMozgas() {

  if(aktualkep != "folyoso-1" && aktualkep != "folyoso0" 
  && aktualkep != "folyoso1" && aktualkep != "folyoso2" && aktualkep != "aula" && aktualkep != "folyoso3"){
  if (elmozgas > -750) {
    elmozgas-=5;
    var mozgatas = elmozgas + "px";
    document.getElementById('teljeskep').style.objectPosition = mozgatas;


    timeoutID = setTimeout(jobbraMozgas, 1);
  }

}

}

function kepvisszaB() {
  clearTimeout(timeoutID);
}
