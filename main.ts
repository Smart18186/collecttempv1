radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == input.temperature()) {
        basic.showString("" + (input.temperature()))
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            . . . . .
            `)
        basic.pause(60000)
    }
    if (receivedNumber == input.temperature()) {
        basic.showString("" + (input.temperature()))
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(60000)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(input.temperature())
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . # # # .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(input.temperature())
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . # # # .
        # . . . #
        `)
})
radio.setGroup(1)
