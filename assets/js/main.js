function showtxt() {
    let output = document.getElementById("masse")
    let inputValue = Number(document.getElementById("mylist").value)
    switch (inputValue) {
        case 0:
            output.innerHTML = `<b>Brief und Postkarte</b> <br>
            L: 10 - 23,5 cm<br>
            B: 7 - 12,5 cm<br>
            H: bis 1 cm`
            break;
        case 1:
            output.innerHTML = `<b>DHL Paket 5 kg</b> <br>
            bis 120 x 60 x 60 cm`
            break;
        case 2:
            output.innerHTML = `<b>DHL Paket 10 kg</b> <br>
            bis 120 x 60 x 60 cm`
            break;
        case 3:
            output.innerHTML = `<b>Extra große Größe</b>`
            break;
        default:
            output.innerHTML = "Fehler!"
    }
}