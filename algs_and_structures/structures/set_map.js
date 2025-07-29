const map = new Map()

map.set("name", "Javascript")
console.log(map.get("name"))   // Javascript

const set = new Set()

set.add(5)
set.add(5)
set.add(5)
set.add(5)
set.add(4)
set.add(1)
set.add(3)

console.log(set)   // Set(4) {5, 4, 1, 3}