let timeoutid
function coord() {
    var name = prompt("username->")
<<<<<<< HEAD
    while (name==""){name = prompt("username->")}
=======
>>>>>>> main
    document.getElementById("name").innerHTML = name
}
function verif(x) {
    var choix = document.getElementById(x).value
<<<<<<< HEAD
    if (choix > 20 || 5 > choix ) {
=======
    if (choix > 20 || 5 > choix) {
>>>>>>> main
        alert("Your number must be between 5 and 20. You entered: " + choix + " (Invalid).")
        document.getElementById(x).value = ""
    }
}
function test() {
<<<<<<< HEAD
    var nb=0
    tab = document.getElementsByName('inp')
    for (let i = 0; i < 6; i++) {
        if (tab[i].value > 5 && tab[i].value < 20) { nb++ }
    }
    return nb==6
=======
    tab = document.getElementsByName('inp')
    for (let i = 0; i < 6; i++) {
        if (tab[i].value > 5 && tab[i].value < 20) { return true }
        else { return false }
    }
>>>>>>> main
}
function lottery() {
    if (test()) {
        out = document.getElementsByName('out')
        document.getElementById("stop").disabled = false
        document.getElementById("start").disabled = true
        let i = 0
        while (i < 6) {
            out[i].value = Math.trunc(Math.random() * (21 - 5) + 5)
            i++
        }
        timeoutid = setTimeout(lottery, 50)
        return out
    }
}

function calc() {
    stop()
    res = document.getElementById("res")
    tab = document.getElementsByName('inp')
    ans = document.getElementsByName('out')
    nb = 0
    for (let i = 0; i < 6; i++) {
        if (tab[i].value == ans[i].value) { nb++ }
    }
    if (nb == 0) { res.innerHTML = "😥sorry😥" }
    else { res.innerHTML = "🤑congratulation🤑 with: " + nb + " answer" }

}
function stop() {
    clearTimeout(timeoutid)
    document.getElementById("stop").disabled = true
    document.getElementById("start").disabled = true
}
