let max, min;

let procuraMinMax = () => {
    let arr = [1, -1];
    max = Math.max.apply(null, arr);
    min = Math.min.apply(null, arr);

    if(arr == null || arr == undefined || arr == ""){
        console.log("Não foi possível encontra.");
    } else {
        console.log("Maior valor: " + max);
        console.log("Menor valor: " + min);
    }
};
procuraMinMax();