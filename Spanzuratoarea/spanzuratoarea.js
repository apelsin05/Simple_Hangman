var cuvinte = ['pisica', 'pescarus', 'cartita', 'cheie'];
//alegerea unui cuvant aleator
var cuvant = cuvinte[Math.floor(Math.random() * cuvinte.length)];
var vector_raspuns = [];
for (let i = 0; i < cuvant.length; i++) {
    vector_raspuns[i] = '-';
}
// bucla jocului
var litere_ramase = cuvant.length;
//numar de incercari:
var incercari = 3;
while (litere_ramase > 0 && incercari > 0) {
    //ii arat jucatorului progresul (afisez vector raspuns)
    alert('Ai ' + incercari + ' incercari ramase. \n' + vector_raspuns.join(' ')); //join(" ") uneste toate elementele care se afla in vectorul raspuns la un moment dat
    //fac o metoda de alegere a literei
    var litera = prompt('Alege o litera, sau apasa CANCEL ca sa termini jocul.');
    if (litera == null) {
        //daca jucatorul nu mai vrea sa joace
        break;
    } else if (litera.length !== 1) {
        alert('Introdu o singura litera!');
    } else {
        litera = litera.toLowerCase();
        var ok=false;
        // verific daca este litera corecta si modific vectorulraspuns
        for (var j = 0; j < cuvant.length; j++) {
            console.log(litera);
            if (cuvant[j] === litera) {
                vector_raspuns[j] = litera;
                litere_ramase--;
                ok=true;
            }
            
        }
        if(!ok){
            incercari--;
        }
    }
}
//dupa ce se termina procesul, afisez toata solutia si felicit jucatorul
if (litera == null || incercari==0) {
    alert(
        'Ai pierdut. \n Reimprospateaza pagina pentru a incepe din nou.'
    );
} else {
    alert(vector_raspuns.join(' '));
    alert('Bravo! Raspunsul este ' + cuvant);
}
