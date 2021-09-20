input.onButtonPressed(Button.A, function () {
    binair = "" + binair + "1"
})
function converteer (BinairGetal: string) {
    totaal = 0
    for (let index = 0; index <= BinairGetal.length - 1; index++) {
        totaal = totaal + 2 ** index * parseFloat(BinairGetal.charAt(index))
    }
    return totaal
}
input.onButtonPressed(Button.AB, function () {
    omgekeerdetekst = draaiOm(binair)
    basic.showNumber(converteer(omgekeerdetekst))
})
input.onButtonPressed(Button.B, function () {
    binair = "" + binair + "0"
})
function draaiOm (input2: string) {
    omgekeerd = ""
    for (let waarde of input2) {
        omgekeerd = "" + waarde + omgekeerd
    }
    return omgekeerd
}
function som (getal1: number, getal2: number) {
    uitkomst = getal1 + getal2
    return uitkomst
}
let uitkomst = 0
let omgekeerd = ""
let omgekeerdetekst = ""
let totaal = 0
let binair = ""
binair = ""
