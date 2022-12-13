document.getElementById("trigger").addEventListener("click", palin);

let palindromo = ((str) => {
    return str == str.split('').reverse().join('');
})

function palin(){
    let pv = palindromo(document.getElementById("name").value);
    let ps = "A palavra " + document.getElementById("name").value + " é um palíndromo!";
    let pn = "A palavra " + document.getElementById("name").value + " não é um palíndromo!";
    
    if(pv == true){
        document.getElementById("plm").innerHTML = ps;
        console.log(ps);
    } else {
        document.getElementById("plm").innerHTML = pn;
        console.log(pn);
    }
}