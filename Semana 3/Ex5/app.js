let parametros = ((...valores) => {
    let total = 0;

    for (const item of valores){
        total += parseInt(item);
    }
    return total;
});

function params() {
    let newTotal = parametros(1, 2, 3, 4);
    let result = "Total = " + newTotal;
    document.getElementById("prm").innerHTML = result;
    console.log("Total = " + newTotal);
}