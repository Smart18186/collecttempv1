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
radio.setGroup(26)
basic.showIcon(IconNames.Yes)
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("Tablet", "L0r3t0kk!")
basic.showIcon(IconNames.Heart)
ESP8266_IoT.connectThingSpeak()
basic.showIcon(IconNames.Cow)
ESP8266_IoT.setData(
"your_write_api_key",
input.temperature()
)
ESP8266_IoT.uploadData()
basic.showIcon(IconNames.Asleep)
loops.everyInterval(500, function () {
    basic.clearScreen()
    serial.writeNumber(input.temperature())
})
basic.forever(function () {
    serial.writeNumber(input.temperature())
    serial.writeLine("")
    basic.pause(500)
})
