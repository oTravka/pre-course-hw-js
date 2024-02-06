let passport = {
    name: "Petr",
    surname: "Petrov",
};
let clonePassport = {};
for (let key in passport){
    clonePassport[key] = passport[key];
}
clonePassport = {
    name: 'Ivan',
}
console.log(passport.name)
console.log(clonePassport.name)