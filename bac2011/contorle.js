function calculer(){
    n=document.getElementById("res").value;;
    res=document.getElementById("res").value;
    if(Number(n)<1){
        alert ("Veuillez saisir un entier strictement supéreur à 1")
    }else{
        res=document.getElementById("res").value;
        
    }

}

function afficher(){
    bi=document.getElementById("bi").value;
    bs=document.getElementById("bs").value;
    if (Number(bi)>=200 || Number(bi)>=300){
        alert ("saise non valide ")
    }
    if (Number(bs)>=200 || Number(bs)>=300){
        alert ("saise non valide !!")
    }
    

}