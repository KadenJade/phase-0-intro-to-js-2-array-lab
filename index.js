// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
//1
function destructivelyAppendCat(name){
    return cats.push(name);
}
destructivelyAppendCat()
//2
function destructivelyPrependCat(name){
    return cats.unshift(name);
}
destructivelyPrependCat()
//3
function destructivelyRemoveLastCat(name){
    return cats.pop(name);
}
destructivelyRemoveLastCat()
//4
function destructivelyRemoveFirstCat(name){
    return cats.shift(name);
}
destructivelyRemoveFirstCat()
//5
function appendCat(name){
    return [...cats, name]
}
appendCat()
//6
function prependCat(name){
    return [name, ...cats]
}
prependCat()
//7
function removeLastCat(name){
    return cats.slice(0,2)
}
removeLastCat()
function removeFirstCat(name){
    return cats.slice(1)
}
removeFirstCat()