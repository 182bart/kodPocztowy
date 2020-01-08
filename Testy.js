// string
// sprawdzic dglugosc- max 5 znakówar
// czy sa tylko liczby
// akcetacjia znaków specjalnych
// frltrem usunąć  znaki specjalen


function pocztowy() {
  var tab = [];
  var zle = "nie prawidlowy zapis kodu, Poprawny zais kodu to np: 32-212 lub 21 123"
  var x = document.getElementById("code").value;
  var y= x.length;





  if (y!=6) {
    document.getElementById("wynik").innerHTML= zle;
  }
  else {
    var i =0;
    while (i<=5) {
      var z =x.charAt(i);

       var tab1 = tab.push(z);
      i++;
    }
      var a=tab[2];


      if (a=="-"|| a==" ") {
        var tab2 = tab.splice(2,1);
        console.log(tab);

        function test(x) {
          if (isNaN(x)) {

          }
          else {
            return x;
          }


        }

        if (tab.every(test)) {
            document.getElementById("wynik").innerHTML= "kod jest poprawny";
        }
        else {
          document.getElementById("wynik").innerHTML= zle;
        }
      }
      else {
        document.getElementById("wynik").innerHTML= zle;
      }








  }


}
document.getElementById("but").addEventListener("click", pocztowy);
