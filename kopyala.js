function kopyala(numara){
var copyText = document.getElementById("numara").text;
navigator.clipboard.writeText(copyText);
alert("Numara panoya  kopyalandı");
}

function koppapara(papara){
var copyText = document.getElementById("papara").text;
navigator.clipboard.writeText(copyText);
alert("Papara numarası panoya  kopyalandı");
}

function ziraatkop(ziraat){
var copyText = document.getElementById("ziraat").text;
navigator.clipboard.writeText(copyText);
alert("Ziraat Bankası IBAN numarası panoya  kopyalandı");
}

function enparakop(enpara){
var copyText = document.getElementById("enpara").text;
navigator.clipboard.writeText(copyText);
alert("ENPARA IBAN numarası panoya  kopyalandı");
}