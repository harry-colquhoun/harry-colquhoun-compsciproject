namespace SpriteKind {
    export const host = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    bullets = sprites.createProjectileFromSprite(img`
. . 6 6 6 6 . . 
. 6 d 4 4 4 6 . 
6 d 4 4 4 4 d 6 
c 1 b 4 4 4 d c 
. c b 1 1 4 c . 
. . c c c c . . 
`, Monkey, -100, 0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bullets = sprites.createProjectileFromSprite(img`
. . 6 6 6 6 . . 
. 6 d d 4 4 6 . 
6 d 4 4 4 4 d 6 
c b b 4 4 4 d c 
. c b b 4 d c . 
. . c c c c . . 
`, Monkey, 100, 0)
})
let target: Sprite = null
let bullets: Sprite = null
let Monkey: Sprite = null
scene.setBackgroundColor(2)
info.setScore(0)
info.setLife(3)
Monkey = sprites.create(img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f . . . . . . 
. . f d d d d e e e f . . . . . 
. c d f d d f d e e f f . . . . 
. c d f d d f d e e d d f . . . 
c d e e d d d d e e b d c . . . 
c d d d d c d d e e b d c . f f 
c c c c c d d d e e f c . f e f 
. f d d d d d e e f f . . f e f 
. . f f f f f e e e e f . f e f 
. . . . f e e e e e e e f f e f 
. . . f e f f e f e e e e f f . 
. . . f e f f e f e e e e f . . 
. . . f d b f d b f f e f . . . 
. . . f d d c d d b b d f . . . 
. . . . f f f f f f f f f . . . 
`, SpriteKind.Player)
Monkey.setPosition(10, 50)
Monkey.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(Monkey)
game.onUpdateInterval(Math.randomRange(500, 2000), function () {
    target = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
. . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
. . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
. . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
. . . 8 8 8 8 8 3 3 8 8 8 8 8 . 
. . . 8 8 8 8 8 3 3 8 8 8 8 8 . 
. . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
. . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
. . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
. . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    target.setPosition(Math.randomRange(0, 160), 0)
    target.setVelocity(0, 50)
})
