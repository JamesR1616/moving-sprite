input.onButtonPressed(Button.A, function () {
    sprite.move(-1)
})
input.onGesture(Gesture.LogoUp, function () {
    sprite.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    sprite.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    sprite.move(1)
})
input.onGesture(Gesture.LogoDown, function () {
    sprite.change(LedSpriteProperty.Y, -1)
})
let sprite: game.LedSprite = null
basic.showIcon(IconNames.Heart)
sprite = game.createSprite(2, 2)
basic.forever(function () {
	
})
