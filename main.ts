namespace SpriteKind {
    export const host = SpriteKind.create()
    export const bomb = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.bomb, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
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
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.rings, 500)
    info.changeScoreBy(1)
    music.baDing.playUntilDone()
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
let duck: Sprite = null
let bullets: Sprite = null
let Monkey: Sprite = null
scene.setBackgroundColor(2)
info.setScore(0)
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
Monkey.setPosition(80, 60)
Monkey.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(Monkey)
if (info.life() == 0) {
    music.wawawawaa.playUntilDone()
}
game.onUpdateInterval(Math.randomRange(500, 1000), function () {
    duck = sprites.create(img`
. . . . . . . . . b 5 b . . . . 
. . . . . . . . . b 5 b . . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. . . . b b 5 b c 5 5 d 4 c . . 
. b b b b 5 5 5 b f d d 4 4 4 b 
. b d 5 b 5 5 b c b 4 4 4 4 b . 
. . b 5 5 b 5 5 5 4 4 4 4 b . . 
. . b d 5 5 b 5 5 5 5 5 5 b . . 
. b d b 5 5 5 d 5 5 5 5 5 5 b . 
b d d c d 5 5 b 5 5 5 5 5 5 b . 
c d d d c c b 5 5 5 5 5 5 5 b . 
c b d d d d d 5 5 5 5 5 5 5 b . 
. c d d d d d d 5 5 5 5 5 d b . 
. . c b d d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
`, SpriteKind.bomb)
    duck.setPosition(0, Math.randomRange(0, 120))
    duck.setVelocity(Math.randomRange(-100, 100), Math.randomRange(-100, 100))
})
game.onUpdateInterval(Math.randomRange(500, 1000), function () {
    duck = sprites.create(img`
. . . . . . . . . . b 5 b . . . 
. . . . . . . . . b 5 b . . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. . . . b b 5 d 1 f 5 d 4 c . . 
. . . . b 5 5 1 f f d d 4 4 4 b 
. . . . b 5 5 d f b 4 4 4 4 b . 
. . . b d 5 5 5 5 4 4 4 4 b . . 
. b b d d d 5 5 5 5 5 5 5 b . . 
b d d d b b b 5 5 5 5 5 5 5 b . 
c d d b 5 5 d c 5 5 5 5 5 5 b . 
c b b d 5 d c d 5 5 5 5 5 5 b . 
c b 5 5 b c d d 5 5 5 5 5 5 b . 
b b c c c d d d 5 5 5 5 5 d b . 
. . . . c c d d d 5 5 5 b b . . 
. . . . . . c c c c c b b . . . 
`, SpriteKind.bomb)
    duck.setPosition(160, Math.randomRange(-100, 100))
    duck.setVelocity(Math.randomRange(-100, 100), Math.randomRange(-100, 100))
})
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
