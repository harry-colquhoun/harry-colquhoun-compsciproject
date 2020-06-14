namespace SpriteKind {
    export const host = SpriteKind.create()
    export const bomb = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeLifeBy(1)
    music.powerUp.playUntilDone()
})
sprites.onOverlap(SpriteKind.bomb, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeLifeBy(-1)
    music.powerDown.play()
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
let healer: Sprite = null
let target: Sprite = null
let duck: Sprite = null
let bullets: Sprite = null
let Monkey: Sprite = null
scene.setBackgroundColor(2)
info.setScore(0)
info.setLife(3)
game.showLongText("Mr Monkey, you must shoot as many of the blue boxes as possible!", DialogLayout.Bottom)
game.showLongText("However, watch out for the ducks, as if a duck hits you you will lose a life...", DialogLayout.Bottom)
game.showLongText("If you manage to eat a burger you will gain a life", DialogLayout.Bottom)
game.showLongText("Use the arrows to move about and A to shoot right and B to shoot left", DialogLayout.Bottom)
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
    music.magicWand.playUntilDone()
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
game.onUpdateInterval(60000, function () {
    healer = sprites.create(img`
. . . . . . . . . . . c c c c c 6 6 6 6 6 . . . . . . . . . . . 
. . . . . . . . c c c 4 4 4 4 4 4 4 4 4 4 6 6 6 . . . . . . . . 
. . . . . . c c 4 4 4 4 4 4 4 4 4 b b 4 4 4 4 4 6 6 . . . . . . 
. . . . . c b 4 4 4 4 b b 4 4 4 4 b 5 b 4 4 4 4 4 4 b . . . . . 
. . . . e b 4 4 4 4 b 5 b 4 4 4 4 4 b 4 4 4 4 4 4 4 4 b . . . . 
. . . e b b 4 4 4 4 4 b 4 4 4 4 4 4 4 4 4 4 b 4 4 4 4 4 6 . . . 
. . e b 6 b b 4 4 4 4 4 4 4 4 4 b b 4 4 4 b 5 b 4 4 4 4 4 6 . . 
. . e 6 b b 5 b 4 4 4 4 4 4 4 4 b 5 b 4 4 4 b 4 4 b b 4 4 e . . 
. e 6 6 b 4 b 4 4 4 4 4 4 4 4 4 4 b 4 4 4 4 4 4 4 b 5 b 4 4 e . 
. e 6 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b 4 4 e . 
e b 6 6 b 4 4 4 4 4 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b e 
e b 6 6 b b 4 4 4 b 5 b 4 4 4 4 4 4 4 4 b b 4 4 4 4 4 4 4 4 b e 
f b 6 6 6 b 4 4 4 b b 4 4 4 4 4 4 4 4 4 b 5 b 4 4 4 4 4 4 4 b f 
f c b 6 6 6 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b 4 4 4 4 4 4 b c f 
. f b b 6 6 6 6 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b f . 
. e f b b 6 6 6 6 6 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b f e . 
. 8 6 f c b b 6 6 6 6 6 b b b 4 4 4 4 4 4 4 4 4 4 4 b c c 6 8 8 
8 7 7 2 e f f c b b b b b b b b b b b b b b b b c f c 2 2 7 7 8 
8 7 7 2 2 2 2 2 c c c c c c c c c c c c c c c c 2 2 2 2 6 6 7 8 
f 8 6 6 6 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 7 6 6 8 6 f 
f e f 8 6 6 6 7 7 7 6 6 6 6 7 7 7 7 7 7 6 6 6 7 7 7 7 f f f e f 
f b f f 8 7 7 7 6 8 f 8 6 7 7 7 7 7 7 6 6 6 7 7 6 f f f f f b f 
f b e f f e e f f f e f f 7 7 6 6 6 8 8 e f f e e e e f e b 6 f 
f 6 b f f f e f f e e e e e e e e e e e e e f e e e e e b b 6 e 
f 6 6 d d f f f f f e e e f f e f f e e e e e f f e e d b 4 6 e 
. c 6 6 d d d 4 e f f f f f f e e e e e f f f f 4 d d b 4 6 e . 
. f c 6 b 4 d d d d d d d d d d d d d d d d d d d b 4 4 4 e e . 
. . f f 6 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e . . 
. . . . f f b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e . . . . 
. . . . . . f f e b b b b b b 4 4 4 4 4 4 4 4 e e e . . . . . . 
. . . . . . . . . f f f f f f f c c c c c e e . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
    healer.setPosition(0, Math.randomRange(0, 120))
    healer.setVelocity(Math.randomRange(75, 150), 0)
})
