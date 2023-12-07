// Write your code here!
let main = document.getElementById("main")
main.remove(main)
let newHeader = document.createElement('h1')
newHeader.id = 'victory'
let yourname = 'Don'
newHeader.textContent = `${yourname} is the champion`
