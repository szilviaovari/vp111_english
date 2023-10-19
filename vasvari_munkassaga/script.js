function mutat(hanyadikTemp){    
    switch (hanyadikTemp){
        case 1:
            hanyadik = "elso";
            break;
        case 2:
            hanyadik = "masodik";
            break;
        case 3:
            hanyadik = "harmadik";
            break;
        case 4:
            hanyadik = "negyedik";
            break;
       case 5:
            hanyadik = "otodik";
            break;
       /*  case 6:
            hanyadik = "hatodik";
            break;
        case 7:
            hanyadik = "hetedik";
            break;
        case 8:
            hanyadik = "nyolcadik";
            break;*/
    }
    var currentValue = document.getElementById(hanyadik).value;

    if(hanyadikTemp!=3){
        if(currentValue == "Off"){
            document.getElementById(hanyadik).value="On";
            document.getElementById(hanyadik+"Kartya").style.display = "block";

        }
        else{
            document.getElementById(hanyadik).value="Off";
            document.getElementById(hanyadik+"Kartya").style.display = "none";
        }

        var elem = document.getElementById(hanyadik);

        
        let listak = ["elso", "masodik", "harmadik", "negyedik", "otodik", /*"hatodik", "hetedik", "nyolcadik"*/];
        delete listak[hanyadikTemp-1];

        
        var state = document.getElementById(hanyadik).value;

        for (var i in listak){
            if(state == "On"){
                document.getElementById(listak[i]).style.display = "none";
            }
            else{
                document.getElementById(listak[i]).style.display = "block";

            }
        };        
    }

}
