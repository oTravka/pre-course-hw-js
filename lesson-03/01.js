const colors =["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function checkColor(colors) {
    return (colors === "черный") || (colors === "красный")|| (colors === "желтый");
}

function createColorString() {
    return colors.filter(checkColor).join('-')
}

console.log(createColorString());