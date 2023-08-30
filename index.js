const cats = ["Milo","Otis","Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}
function appendCat(name) {
    const copyCat = cats.slice();
    copyCat.push(name);
    return copyCat
}
function prependCat(name) {
    const copyCat = cats.slice();
    copyCat.unshift(name);
    return copyCat
}
function removeLastCat(name) {
    const copyCat = cats.slice();
    copyCat.pop();
    return copyCat
}
function removeFirstCat(name) {
    const copyCat = cats.slice();
    copyCat.shift();
    return copyCat
}