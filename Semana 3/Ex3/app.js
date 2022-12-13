let concatenar = ((arr1, arr2) => {
    return arr1.concat(arr2);
});

function concat () {
    const newArr = concatenar([1, 2, 3], [4, 5, 6]);  
    document.getElementById("concat").innerHTML = newArr; 
    console.log("Novo Array:" + newArr);
}