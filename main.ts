let que = ""
input.onButtonPressed(Button.A, function () {
    que = "luz"
})
input.onButtonPressed(Button.B, function () {
    que = "temperatura"
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("" + (input.lightLevel()))
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showString("" + (input.temperature()))
    }
})
