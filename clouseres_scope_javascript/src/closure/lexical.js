const myGlobal = 0;

function myFuntion() {
    const mynumber = 1;
    console.log(myGlobal);

    function parent() { // funcion interna
        const inner = 2;
        console.log(mynumber, myGlobal);

        function child() {
            console.log(inner, mynumber, myGlobal)
        }
        return child();
    }
    return parent();
}

myFuntion();
