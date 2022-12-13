document.getElementById("trigger").addEventListener("click", msg)

function msg(){
    const name = "Olá, " + document.getElementById("name").value + "!";
    document.getElementById("texto").innerHTML = name;
}