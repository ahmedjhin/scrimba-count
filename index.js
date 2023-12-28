let btn = document.getElementById("count");
let counter = document.getElementById("counterel");
let storage = 0
a = 12 + 1
function add(){
storage += 1
counter.textContent = String(storage);
a++
console.log(a);
}
btn.addEventListener("click", add);
