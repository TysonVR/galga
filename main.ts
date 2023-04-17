controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .5.4.....................
        e7....e2.e.4.............
        ..e2.75...7..5e7.........
        .4.....e4.e5e..4.........
        .27.e4....2...7..........
        ...e...2...7...e.e.......
        5....5...e..e............
        .e.2..e...5...5..........
        ....7...e...4............
        74...e.4...2..e..........
        ...e.....7...............
        .e.......................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        `, SpaceTaco, 200, 0)
})
info.onCountdownEnd(function () {
    SpaceChicken = sprites.create(img`
        . . . . . . . b b b b b 2 2 . . 
        . . . . . . b 4 4 4 4 4 4 b 2 . 
        . . . . . b 4 4 d d 4 4 4 4 2 2 
        . . . . . b 4 d 4 4 4 4 4 4 b 2 
        . . . . b 4 d 4 4 4 4 4 4 4 b 2 
        . . . . b 4 4 4 4 4 4 4 4 4 b 2 
        . . . . e 4 4 4 4 4 4 4 4 4 b 2 
        . . . . e b 4 4 4 4 4 4 4 b 2 2 
        . . . . e b b b 4 4 4 b b b 2 . 
        . . . . e e b b b b b b b e . . 
        . . . b e e e b 4 4 b e e . . . 
        . b b d b e e e e e e . . . . . 
        b 1 1 1 b . . . . . . . . . . . 
        b d d 1 c . . . . . . . . . . . 
        . c b 1 c . . . . . . . . . . . 
        . . c c . . . . . . . . . . . . 
        `, SpriteKind.Food)
    SpaceChicken.setVelocity(randint(-75, 75), randint(-75, 75))
    SpaceShark.setPosition(100, randint(1, 120))
    info.startCountdown(20)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.hearts, 100)
    info.changeLifeBy(1)
})
info.onScore(5, function () {
    info.setScore(5)
    info.setLife(3)
    info.startCountdown(20)
    scene.setBackgroundColor(8)
    game.showLongText("LEVEL 2", DialogLayout.Center)
    SpaceTaco.setPosition(74, 54)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.ashes, 200)
    otherSprite.destroy(effects.fire, 200)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 200)
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let SpaceShark: Sprite = null
let SpaceChicken: Sprite = null
let projectile: Sprite = null
let SpaceTaco: Sprite = null
SpaceTaco = sprites.create(img`
    . . . . . e e e e . . . . . . . 
    . . . e e 5 5 5 4 e e . . . . . 
    . . e 6 6 7 2 2 6 5 4 e . . . . 
    . e 4 4 4 6 2 2 7 6 6 5 e . . . 
    . 4 5 5 5 5 4 6 6 7 2 2 5 e . . 
    4 5 4 5 5 5 5 5 8 8 2 2 6 5 e . 
    4 5 5 5 5 4 5 4 5 8 7 7 6 5 e . 
    4 5 5 4 5 5 5 5 5 5 6 6 8 5 4 e 
    4 5 5 5 5 5 5 4 5 5 5 8 e c 5 e 
    . e 5 5 5 4 5 5 5 4 5 e c c 5 e 
    . . e 4 5 5 5 5 5 5 5 5 c c 5 e 
    . . . e e 5 5 5 4 5 4 5 c e 5 e 
    . . . . . e 4 5 5 5 5 5 e e 5 e 
    . . . . . . e e 5 5 5 5 e 4 5 4 
    . . . . . . . . e 4 5 5 4 5 4 . 
    . . . . . . . . . e e e 4 4 . . 
    `, SpriteKind.Player)
controller.moveSprite(SpaceTaco, 200, 200)
SpaceTaco.setStayInScreen(true)
info.startCountdown(20)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    SpaceShark = sprites.create(img`
        ...........fffffff...ccff3..........
        ..........fbbbbbbbffcbbbbf..........
        ..........fbb111bbbbbffbf...........
        ..........fb11111ffbbbbff...........
        ..........f1cccc1ffbbbbbcff.........
        ..........ffc1c1c1bbcbcbcccf........
        ...........fcc3331bbbcbcbcccf..ccccc
        ............c333c1bbbcbcbccccfcddbbc
        ............c333c1bbbbbbbcccccddbcc.
        ............c333c11bbbbbccccccbbcc..
        ...........cc331c11bbbbccccccfbccf..
        ...........cc13c11cbbbcccccbbcfccf..
        ...........c111111cbbbfdddddc.fbbcf.
        ............cc1111fbdbbfdddc...fbbf.
        ..............cccfffbdbbfcc.....fbbf
        ....................fffff........fff
        `, SpriteKind.Enemy)
    SpaceShark.setVelocity(-100, 0)
    SpaceShark.setPosition(160, randint(5, 115))
    SpaceShark.setFlag(SpriteFlag.AutoDestroy, true)
})
