let valor = 0
input.onButtonPressed(Button.A, function () {
    valor = 0
})
input.onGesture(Gesture.Shake, function () {
    valor = randint(0, 3)
})
input.onButtonPressed(Button.AB, function () {
    valor = 2
})
input.onButtonPressed(Button.B, function () {
    valor = 1
})
basic.forever(function () {
    if (valor == 0) {
        basic.showIcon(IconNames.Diamond)
    } else if (valor == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    }
})
