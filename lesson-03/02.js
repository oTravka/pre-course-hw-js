const words = ["яблоко", "банан", "апельсин", "манго", "киви"];

function isOrangeHear(words){
    if(words.indexOf("апельсин") >= 0){
        console.log ("Ура! нашел")
    }else{
        console.log("Придется поискать в другом магазине…")
    }
}
isOrangeHear(words);