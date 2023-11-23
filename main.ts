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
})
serial.redirectToUSB()
basic.forever(function () {
    serial.writeNumber(input.temperature())
    serial.writeLine("")
    basic.pause(500)
})
