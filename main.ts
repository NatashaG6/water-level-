let water_level = 0
basic.forever(function () {
    water_level = pins.analogReadPin(AnalogPin.P0)
    serial.writeNumber(pins.analogReadPin(AnalogPin.P0))
    serial.writeLine("")
})
