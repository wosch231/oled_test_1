input.onButtonPressed(Button.A, function () {
    kitronik_VIEW128x64.setPixel(64 + xn, 32 + yn)
    oled_z.oled_Line1(64 + xn, 0 + yn, 82 + xn, 57 + yn)
    oled_z.oled_Line1(82 + xn, 57 + yn, 34 + xn, 22 + yn)
    oled_z.oled_Line1(34 + xn, 22 + yn, 94 + xn, 22 + yn)
    oled_z.oled_Line1(94 + xn, 22 + yn, 46 + xn, 57 + yn)
    oled_z.oled_Line1(46 + xn, 57 + yn, 64 + xn, 0 + yn)
})
input.onButtonPressed(Button.B, function () {
    oled_z.oled_Line1(54 + xn, 32 + yn, 74 + xn, 32 + yn)
    oled_z.oled_Line1(64 + xn, 22 + yn, 64 + xn, 42 + yn)
    oled_z.oled_Line1(57 + xn, 25 + yn, 71 + xn, 39 + yn)
    oled_z.oled_Line1(57 + xn, 39 + yn, 71 + xn, 25 + yn)
})
let yn = 0
let xn = 0
basic.showIcon(IconNames.Surprised)
kitronik_VIEW128x64.clear()
kitronik_VIEW128x64.refresh()
xn = -30
yn = 0
oled_z.oled_Kreis(64 + xn, 32 + yn, 20)
kitronik_VIEW128x64.drawRect(50, 50, 8, 8)
