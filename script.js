const pristatymo_kaina = 2.34;

while(true){
  var kaina = prompt("Įveskite prekės kainą");
  if(Number(kaina)){

    var pristatymas = prompt("Ar reikalingas pristatymas į namus? Taip/ne");
    if(pristatymas =="Taip"){



      while(true) {
        var miestas = prompt("Į kurį miestą pristatyti?");
        if(miestas != ""){

          var is_viso = pristatymo_kaina + parseFloat(kaina);
          console.log("Prekes kaina: ", parseFloat(kaina).toFixed(2));
          console.log("Pristatymo kaina: ", parseFloat(pristatymo_kaina).toFixed(2));
          console.log("Is viso: ", parseFloat(is_viso).toFixed(2));
          console.log("Prekę pristatysime į ", miestas + " " + "per" + " " + "1-3dienas");
          break;
        }
      }

    } else {
      console.log("Prekes kaina: ", parseFloat(kaina).toFixed(2));
      console.log("Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a");
      break;
    }

  } else {
    var pristatymas1 = alert("Neteisingai ivesta kaina");
    continue;
  }

  break;
}
