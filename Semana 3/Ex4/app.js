let mesclaObjetos = ((objUm, objDois) => {
    return Object.assign(objUm, objDois);
});

function mesclar() {
    const novoObj = mesclaObjetos({ a: 1, b: 2 }, { c: 3, d: 4 });
    const result = "Novo Objeto: " + novoObj.a + ", " + novoObj.b + ", " + novoObj.c + ", " + novoObj.d;
    document.getElementById("mescla").innerHTML = result;
    console.log(novoObj);
    console.log(result);
}