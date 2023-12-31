function valeur1(a1,b1,c1,f1){
    var taux1 = document.getElementById(new String(b1)).value; 
    var nbr1 = document.getElementById(new String(c1)).value;
    var val1 = document.getElementById(new String(a1)).value;
    var somme=0;
    const t1 = new Number (taux1);
    const v1 = new Number (val1);
    const d1 = new Number (nbr1);
    


    for(let i=1;i<v1+1;i++){
        let y=t1/100;
        x+=Math.pow(1+y,i)*d1;
    }

    if(v1<0 || d1<0)
        alert("Il faut inserez un nombre de periodes et un montant positives")
     
    else if (t1>100 || t1<0){
        alert("Corriger le Taux")
    }
    else{    
     
      document.getElementById(new String(f)).innerHTML=x;
 
    }
}

function valeur2(a2,b2,c2,f2){
    var taux2 = document.getElementById(new String(b2)).value; 
    var nbr2 = document.getElementById(new String(c2)).value;
    var val2 = document.getElementById(new String(a2)).value;
    var somme=0;
    const t2 = new Number (taux2);
    const v2 = new Number (val2);
    const d2 = new Number (nbr2);
    


    for(let i=0;i<v2;i++){
        let y=t2/100;
        somme+=Math.pow(1+y,i)*d2;
    }

    if(v2<0 || d2<0)
        alert("Error SVP inserez un nombre de periodes et un montant positive")
     
    else if (t2>100 || t2<0){
        alert("Error! Taux incorrect")
    }
    else{    
     
      document.getElementById(new String(f)).innerHTML=x;
 
    }
}

function valeur3(a,b,c,f){
    var taux1 = document.getElementById(new String(b)).value; 
    var nbr1 = document.getElementById(new String(c)).value;
    var val1 = document.getElementById(new String(a)).value;
    const t1 = new Number (taux1);
    const v1 = new Number (val1);
    const d1 = new Number (nbr1);
    var x=0;


    for(let i=0;i<v1;i++){
        let y=t1/100;
        let z=Math.pow(1+y,i);
        x+=d1*(1/z);
    }

    if(v1<0 || d1<0)
        alert("Il faut inserez un nombre de periodes et un montant positives")
     
    else if (t1>100 || t1<0){
        alert("Corriger le Taux")
    }
    else{    
     
      document.getElementById(new String(f)).innerHTML=x;
 
    }
}

function valeur4(a,b,c,f){
    var taux1 = document.getElementById(new String(b)).value; 
    var nbr1 = document.getElementById(new String(c)).value;
    var val1 = document.getElementById(new String(a)).value;
    const t1 = new Number (taux1);
    const v1 = new Number (val1);
    const d1 = new Number (nbr1);
    var x=0;


    for(let i=1;i<v1+1;i++){
        let y=t1/100;
        let z=Math.pow(1+y,i);
        x+=d1*(1/z);
    }

    if(v1<0 || d1<0)
        alert("Il faut inserez un nombre de periodes et un montant positives")
     
    else if (t1>100 || t1<0){
        alert("Corriger le Taux")
    }
    else{    
     
      document.getElementById(new String(f)).innerHTML=x;
 
    }
}