let max, min;

let procuraMinMax = (arr) => {
    max = Math.max.apply(null, arr);
    min = Math.min.apply(null, arr);

    if(arr == null || arr == undefined || arr == ""){
        console.log("Não foi possível encontra.\n");
    } else {
        console.log("Maior Valor: " + max + "\nMenor Valor: " + min + "\n");
    }
};

procuraMinMax([56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]);
procuraMinMax([]);
procuraMinMax([1]);
procuraMinMax([1, -1]);
procuraMinMax(null);
procuraMinMax([-2, -2, -2, -2]);
procuraMinMax([20, 10, 30]);
