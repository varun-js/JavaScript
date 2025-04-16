//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truth, "0", 'false', " ", [], {}, function(){},

//=== checks the type also

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}