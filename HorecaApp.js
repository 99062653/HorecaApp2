var loop = true;
const prijsFris = 1.25;
const prijsBier = 2;
const prijsWijn = 3.15;
const prijsbalAcht = 3.50;
const prijsbalZestien = 7;
var totaalFris = 0;
var totaalBier = 0;
var totaalWijn = 0;
var totaalbalAcht = 0;
var totaalbalZestien = 0;

function Bestelling(){
    var toevoeging = prompt("Hallo wat wilt u toevoegen aan de bestelling?");
    //Foutmelding en stoppen
    if(toevoeging == ""){
        alert("U moet wel wat invullen A.U.B");
    }
    if(toevoeging == "stop"){
        loop = false;
    }
    //drank kiezen
    if(toevoeging == "fris"){
       hoeveel = parseInt(prompt("Hoeveel fris wilt u toevoegen aan de bestelling?"));
       if(hoeveel != 0){
           alert(hoeveel + " Fris toegevoegd aan bestelling.");
           totaalFris = hoeveel + totaalFris; //YYYYYYYYYYYYYYYYEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH EINDELIJk! 
       }else{
        alert("Geen fris toegevoegd.");
       }
    }
    if(toevoeging == "bier"){
         hoeveel = parseInt(prompt("Hoeveel bier wilt u toevoegen aan de bestelling?"));
        if(hoeveel != 0){
            alert(hoeveel + " Bier toegevoegd aan bestelling.");
            totaalBier = hoeveel + totaalBier;
        }else{
         alert("Geen bier toegevoegd.");
        }
     }
     if(toevoeging == "wijn"){
         hoeveel = parseInt(prompt("Hoeveel wijn wilt u toevoegen aan de bestelling?"));
        if(hoeveel != 0){
            alert(hoeveel + " Wijn toegevoegd aan bestelling.");
            totaalWijn = hoeveel + totaalWijn;
        }else{
         alert("Geen wijn toegevoegd.");
        }
     }
     //snacks kiezen
     if(toevoeging == "snack"){
        var snack = prompt("Wat voor schaal bitterballen wilt u? 8 of 16?");
        if(snack == "8"){
            hoeveel = parseInt(prompt("Hoeveel schalen van acht stuks wilt u?"));
            if(hoeveel != 0){
            alert(hoeveel + " Schalen bitterballen (8) toegevoegd.");
            totaalbalAcht = hoeveel + totaalbalAcht;
            }else{
                alert("Geen bitterballen toegevoegd.");
            }
        }
        if(snack == "16"){
            hoeveel = parseInt(prompt("Hoeveel schalen van zestien stuks wilt u?"));
            if(hoeveel != 0){
                alert(hoeveel + " Schalen bitterballen (16) toegevoegd.");
                totaalbalZestien = hoeveel + totaalbalZestien;
            }else{
                alert("Geen bitterballen toegevoegd.")
            }
        }
     }
      
    console.log(totaalFris);
    console.log(totaalBier);
    console.log(totaalWijn);
    console.log(totaalbalAcht);
    console.log(totaalbalZestien);
    console.log("-------");
}

function Kassabon(){
    var totaalprijsFris = totaalFris * prijsFris;
    var totaalprijsBier = totaalBier * prijsBier;
    var totaalprijsWijn = totaalWijn * prijsWijn;
    var totaalprijsbalAcht = totaalbalAcht * prijsbalAcht;
    var totaalprijsbalZestien = totaalbalZestien * prijsbalZestien;
    var totaalprijsDrank = totaalprijsFris + totaalBier + totaalWijn;
    var totaalprijsSnacks = totaalprijsbalAcht + totaalprijsbalZestien;
    var totaalprijsVolledig = totaalprijsDrank + totaalprijsSnacks;
    document.write("<br><br>")
     document.write("<h1>Kassabon" + "</h1><br><br>");
     document.write("<p><span>Drank</span>" + "<br>");
     document.write(totaalFris + " Fris = " + totaalprijsFris + " Euro <br>");
     document.write(totaalBier + " Bier = " + totaalprijsBier + " Euro <br>");
     document.write(totaalWijn + " Wijn = " + totaalprijsWijn + " Euro </p><br>");
     document.write("<p><span id=>Snacks</span>" + "<br>");
     document.write(totaalbalAcht + " Schalen bitterballen(8) = " + totaalprijsbalAcht + " Euro <br>" );
     document.write(totaalbalZestien + " Schalen Bitterballen(16) = " + totaalprijsbalZestien + " Euro </p><br><br>");
     document.write("<h2>Totaal prijs = " + totaalprijsVolledig + " Euro </h2>")
}

while(loop){
    Bestelling();
}

Kassabon();