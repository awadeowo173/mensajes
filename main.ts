namespace SpriteKind {
    export const energia = SpriteKind.create()
    export const sin_energia = SpriteKind.create()
    export const nuevo_nivel = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (arma == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . 2 4 1 1 2 . . . . . 
            . . . . . . 2 4 1 5 2 . . . . . 
            . . . . . . 2 4 5 5 2 . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, claus, 0, -300)
    } else if (arma == 2) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . 2 5 5 1 1 1 2 . . . . 
            . . . . . 2 1 4 1 1 5 2 . . . . 
            . . . . . 2 4 4 1 5 5 2 . . . . 
            . . . . . 2 4 4 5 5 1 2 . . . . 
            . . . . . 2 1 1 5 4 4 2 . . . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, claus, 0, -300)
    } else {
    	
    }
})
function Nivel_1 () {
    cartel1(504, 216)
    jugador1(8, 136, 3, 0)
    puerta1(8, 8)
    nivel = 1
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (arma == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . 2 4 1 1 2 . . . . . 
            . . . . . . 2 4 1 5 2 . . . . . 
            . . . . . . 2 4 5 5 2 . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, claus, -300, 0)
    } else if (arma == 2) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . 2 5 5 1 1 1 2 . . . . 
            . . . . . 2 1 4 1 1 5 2 . . . . 
            . . . . . 2 4 4 1 5 5 2 . . . . 
            . . . . . 2 4 4 5 5 1 2 . . . . 
            . . . . . 2 1 1 5 4 4 2 . . . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, claus, -300, 0)
    } else {
    	
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.energia, function (sprite, otherSprite) {
    otherSprite.setKind(SpriteKind.sin_energia)
    if (nivel == 1) {
        energia_jugador += 1
        arma += 1
        info.changeLifeBy(2)
        sprite.setImage(img`
            . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
            . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 f f f 4 4 4 4 4 4 f f f 4 4 
            4 4 f f f 4 4 4 4 4 4 f f f 4 4 
            4 4 f f f 4 4 4 4 4 4 f f f 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 f f 4 4 4 4 4 4 f f 4 4 4 
            4 4 4 4 4 f f f f f f 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
            . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
            `)
        otherSprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . b b b 9 9 b b b . . . . 
            . . . 9 9 9 9 b b b b b b . . . 
            . . b 9 9 9 9 f f f d d b b . . 
            . . 9 9 9 9 9 f f f d d 9 b . . 
            . b 9 9 9 9 f f f f f 9 9 b b . 
            . b 9 9 9 f f f b b b b 9 b b . 
            . b b 9 9 f f b b b b b b b b . 
            . b f 9 9 f f b b b b b b b b . 
            . . b f 9 9 f b b b b b f b . . 
            . . b f f 9 f f b b b f b b . . 
            . . . b f f f f f f f f b . . . 
            . . . . b b f f f f b b . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        bicho_1(214, 213, 1)
    } else if (nivel == 2) {
        info.changeLifeBy(5)
        otherSprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . b b b 9 9 b b b . . . . 
            . . . 9 9 9 9 b b b b b b . . . 
            . . b 9 9 9 9 f f f d d b b . . 
            . . 9 9 9 9 9 f f f d d 9 b . . 
            . b 9 9 9 9 f f f f f 9 9 b b . 
            . b 9 9 9 f f f b b b b 9 b b . 
            . b b 9 9 f f b b b b b b b b . 
            . b f 9 9 f f b b b b b b b b . 
            . . b f 9 9 f b b b b b f b . . 
            . . b f f 9 f f b b b f b b . . 
            . . . b f f f f f f f f b . . . 
            . . . . b b f f f f b b . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        arma = 2
        energia_jugador = 2
        sprite.setImage(img`
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 f f f 6 6 6 6 6 6 f f f 6 6 
            6 6 f f f 6 6 6 6 6 6 f f f 6 6 
            6 6 f f f 6 6 6 6 6 6 f f f 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 f f 6 6 6 6 6 6 f f 6 6 6 
            6 6 6 6 6 f f f f f f 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            `)
        bicho_1(214, 213, 2)
    } else {
    	
    }
    otherSprite.destroy(effects.disintegrate, 200)
})
function cartel1 (x: number, y: number) {
    energia_1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . 6 6 6 5 5 6 6 6 . . . . 
        . . . 7 7 7 7 6 6 6 6 6 6 . . . 
        . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
        . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
        . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
        . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
        . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
        . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
        . . . 6 8 8 8 8 8 8 8 8 6 . . . 
        . . . . 6 6 8 8 8 8 6 6 . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.energia)
    energia_1.setPosition(x, y)
}
function cartel2 (x: number, y: number) {
    energia_2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . 8 8 8 4 4 8 8 8 . . . . 
        . . . 5 5 5 5 8 8 8 8 8 8 . . . 
        . . 8 5 5 5 5 a a a d d 8 8 . . 
        . . 5 5 5 5 5 a a a d d 4 8 . . 
        . 8 5 5 5 5 a a a a a 4 4 8 8 . 
        . 8 5 5 5 a a a 8 8 8 8 4 8 8 . 
        . 8 8 5 5 a a 8 8 8 8 8 8 8 8 . 
        . 8 2 5 5 a a 8 8 8 8 8 8 8 8 . 
        . . 8 a 5 5 a 8 8 8 8 8 2 8 . . 
        . . 8 a a 5 a a 8 8 8 a 8 8 . . 
        . . . 8 a a a a a a a a 8 . . . 
        . . . . 8 8 a a a a 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.energia)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (arma == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . 2 4 1 1 2 . . . . . 
            . . . . . . 2 4 1 5 2 . . . . . 
            . . . . . . 2 4 5 5 2 . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, claus, 300, 0)
    } else if (arma == 2) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . 2 5 5 1 1 1 2 . . . . 
            . . . . . 2 1 4 1 1 5 2 . . . . 
            . . . . . 2 4 4 1 5 5 2 . . . . 
            . . . . . 2 4 4 5 5 1 2 . . . . 
            . . . . . 2 1 1 5 4 4 2 . . . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, claus, 300, 0)
    } else {
    	
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.nuevo_nivel, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 200)
    Nivel_2()
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    if (poder_bicho1 >= energia_jugador) {
        if (nivel == 1) {
            sprite.setImage(img`
                . . . . . c c c c c c c . . . . 
                . . . . c 6 7 7 7 7 7 6 c . . . 
                . . . c 7 c 6 6 6 6 c 7 6 c . . 
                . . c 6 7 6 f 6 6 f 6 7 7 c . . 
                . . c 7 7 7 7 7 7 7 7 7 7 c . . 
                . . f 7 8 1 f f 1 6 7 7 7 f . . 
                . . f 6 f 1 f f 1 f 7 7 7 f . . 
                . . . f f 2 2 2 2 f 7 7 6 f . . 
                . . c c f 2 2 2 2 7 7 6 f c . . 
                . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
                c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
                f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
                f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
                f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
                . f 6 1 1 1 1 1 6 6 6 6 c . . . 
                . . f f c c c c c c c c . . . . 
                `)
            pause(100)
            sprite.setImage(img`
                . . . . . . c c c c c c c . . . 
                . . . . . c f f 6 6 f f 7 c . . 
                . . . . c 7 6 6 6 6 6 6 7 6 c . 
                . . . c 7 7 7 7 7 7 7 7 7 7 c . 
                . . . c 7 8 1 f f 1 6 7 7 7 c . 
                . . . f 6 f 1 f f 1 f 7 7 7 f . 
                . . . f 6 f 2 2 2 2 f 7 7 7 f . 
                . . c c 6 f 2 2 2 2 f 7 7 6 f . 
                . c 7 7 7 7 2 2 2 2 7 7 f c . . 
                c 7 1 1 1 7 7 7 7 7 c c 7 7 c . 
                f 1 1 1 1 1 7 7 7 f c 6 7 7 7 c 
                f 1 1 1 1 1 1 6 f c c 6 6 6 c c 
                f 6 1 1 1 1 1 6 6 c 6 6 6 c . . 
                f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
                . f 6 1 1 1 1 6 6 6 6 6 c . . . 
                . . f f c c c c c c c c . . . . 
                `)
            pause(100)
            info.changeLifeBy(-1)
            info.changeScoreBy(-2)
            music.pewPew.play()
            if (info.life() == 0) {
                game.over(false, effects.melt)
            }
            sprite.setImage(img`
                . . . . . . . . . . . c c c c c 
                . . . . . . . . . c c 7 7 7 6 c 
                . . . . . . . . c c 7 7 7 c c . 
                . . . . . . . . c 6 7 7 c . . . 
                . . . . . . . . c 6 6 6 c . . . 
                . . . . . . . . c 6 6 6 c c . . 
                . . . c c c c c c c 6 6 6 c c . 
                . . c 6 7 7 7 7 6 c c 6 6 6 c . 
                . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
                c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
                c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
                f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
                f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
                . f 7 7 7 7 7 7 7 7 6 f 6 6 c . 
                . c 1 c f f 1 c 7 6 f 6 6 c c . 
                . c c c c c c c c c c c c . . . 
                `)
            pause(100)
            sprite.setImage(img`
                . . . . c c c c c c . . . . . . 
                . . . c 6 7 7 7 7 6 c . . . . . 
                . . c 7 7 7 7 7 7 7 7 c . . . . 
                . c 6 7 7 7 7 7 7 7 7 6 c . . . 
                . c 7 c 6 6 6 6 c 7 7 7 c . . . 
                . f 7 6 f 6 6 f 6 7 7 7 f . . . 
                . f 7 7 7 7 7 7 7 7 7 7 f . . . 
                . . f 7 7 7 7 6 c 7 7 6 f c . . 
                . . . f c c c c 7 7 6 f 7 7 c . 
                . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
                . c 7 7 2 7 7 c f c 6 7 7 6 c c 
                c 1 1 1 1 7 6 f c c 6 6 6 c . . 
                f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
                f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
                . f 6 1 1 1 1 1 1 6 6 6 f . . . 
                . . c c c c c c c c c f . . . . 
                `)
            pause(200)
        } else if (nivel == 2) {
            sprite.setImage(img`
                . . . . . a a a a a a a . . . . 
                . . . . a 8 9 9 9 9 9 8 a . . . 
                . . . a 9 a 8 8 8 8 a 9 8 a . . 
                . . a 8 9 8 f 8 8 f 8 9 9 a . . 
                . . a 9 9 9 9 9 9 9 9 9 9 a . . 
                . . f 9 8 1 f f 1 8 9 9 9 f . . 
                . . f 6 f 1 f f 1 f 9 9 9 f . . 
                . . . f f 4 4 4 4 f 9 9 6 f . . 
                . . a a f 4 4 4 4 9 9 6 f a . . 
                . a 9 9 9 9 9 9 9 9 a a 9 9 a . 
                a 9 1 1 1 9 9 9 9 f a 8 9 9 9 a 
                f 1 1 1 1 1 9 8 f a a 8 8 8 a a 
                f 1 1 1 1 1 1 8 8 a 8 8 8 a . . 
                f 8 1 1 1 1 1 8 8 8 8 8 8 a . . 
                . f 8 1 1 1 1 1 8 8 8 8 a . . . 
                . . f f a a a a a a a a . . . . 
                `)
            pause(100)
            sprite.setImage(img`
                . . . . . . a a a a a a a . . . 
                . . . . . a f f 8 8 f f 9 a . . 
                . . . . a 9 8 8 8 8 8 8 9 8 a . 
                . . . a 9 9 9 9 9 9 9 9 9 9 a . 
                . . . a 9 8 1 f f 1 8 9 9 9 a . 
                . . . f 8 f 1 f f 1 f 9 9 9 f . 
                . . . f 8 f 4 4 4 4 f 9 9 9 f . 
                . . a a 8 f 4 4 4 4 f 9 9 8 f . 
                . a 9 9 9 9 4 4 4 4 9 9 f a . . 
                a 9 1 1 1 9 9 9 9 9 a a 9 9 a . 
                f 1 1 1 1 1 9 9 9 f a 8 9 9 9 a 
                f 1 1 1 1 1 1 8 f a a 8 8 8 a a 
                f 8 1 1 1 1 1 8 8 a 8 8 8 a . . 
                f 8 1 1 1 1 1 8 8 8 8 8 8 a . . 
                . f 8 1 1 1 1 8 8 8 8 8 a . . . 
                . . f f a a a a a a a a . . . . 
                `)
            pause(100)
            info.changeLifeBy(-1)
            info.changeScoreBy(-2)
            music.pewPew.play()
            if (info.life() == 0) {
                game.over(false, effects.melt)
            }
            sprite.setImage(img`
                . . . . . . . . . . . a a a a a 
                . . . . . . . . . a a 9 9 9 8 a 
                . . . . . . . . a a 9 9 9 a a . 
                . . . . . . . . a 8 9 9 a . . . 
                . . . . . . . . a 8 8 8 a . . . 
                . . . . . . . . a 8 8 8 a a . . 
                . . . a a a a a a a 8 8 8 a a . 
                . . a 8 9 9 9 9 8 a a 8 8 8 a . 
                . a 9 9 9 9 9 9 9 9 a 8 8 8 a a 
                a 8 9 9 9 9 9 9 9 9 8 a 8 8 8 a 
                a 9 a 8 8 8 8 a 9 9 9 a 8 8 8 a 
                f 9 a a 8 8 a a 9 9 9 f 8 8 8 a 
                f 9 8 f 8 8 f 8 9 9 9 f 8 8 8 a 
                . f 9 9 9 9 9 9 9 9 8 f 8 8 a . 
                . a 1 a f f 1 a 9 8 f 8 8 a a . 
                . a a a a a a a a a a a a . . . 
                `)
            pause(100)
            sprite.setImage(img`
                . . . . a a a a a a . . . . . . 
                . . . a 8 9 9 9 9 8 a . . . . . 
                . . a 9 9 9 9 9 9 9 9 a . . . . 
                . a 8 9 9 9 9 9 9 9 9 8 a . . . 
                . a 9 c 8 8 8 8 c 9 9 9 a . . . 
                . f 9 8 f 8 8 f 8 9 9 9 f . . . 
                . f 9 9 9 9 9 9 9 9 9 9 f . . . 
                . . f 9 9 9 9 6 c 9 9 8 f a . . 
                . . . f c c c c 9 9 8 f 9 9 a . 
                . . c 9 4 9 9 9 6 a f 9 9 9 9 a 
                . c 9 9 4 9 9 a f a 8 9 9 8 a a 
                c 1 1 1 1 9 8 f a a 8 8 8 a . . 
                f 1 1 1 1 1 8 8 a 8 8 8 8 f . . 
                f 8 1 1 1 1 1 8 8 8 8 8 a f . . 
                . f 8 1 1 1 1 1 1 8 8 8 f . . . 
                . . c c c c c c c c c f . . . . 
                `)
            pause(200)
        } else {
        	
        }
    }
})
function puerta1 (x: number, y: number) {
    puerta_1 = sprites.create(img`
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
        6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
        6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6 
        6 6 6 9 9 9 9 c 6 6 9 9 9 6 6 6 
        6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6 
        6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6 
        6 9 c 6 6 6 9 9 9 6 9 c c c 9 6 
        6 9 c c c 9 6 9 9 9 6 6 6 c 9 6 
        6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6 
        6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6 
        6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6 
        6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6 
        6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
        6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        `, SpriteKind.nuevo_nivel)
    puerta_1.setPosition(x, y)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (arma == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . 2 4 1 1 2 . . . . . 
            . . . . . . 2 4 1 5 2 . . . . . 
            . . . . . . 2 4 5 5 2 . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, claus, 0, 300)
    } else if (arma == 2) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . 2 5 5 1 1 1 2 . . . . 
            . . . . . 2 1 4 1 1 5 2 . . . . 
            . . . . . 2 4 4 1 5 5 2 . . . . 
            . . . . . 2 4 4 5 5 1 2 . . . . 
            . . . . . 2 1 1 5 4 4 2 . . . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, claus, 0, 300)
    } else {
    	
    }
})
function jugador1 (x: number, y: number, vida: number, energia: number) {
    claus = sprites.create(img`
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 f f f 2 2 2 2 2 2 f f f 2 2 
        2 2 f f f 2 2 2 2 2 2 f f f 2 2 
        2 2 f f f 2 2 2 2 2 2 f f f 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 f f 2 2 2 2 2 2 f f 2 2 2 
        2 2 2 2 2 f f f f f f 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        `, SpriteKind.Player)
    claus.setPosition(x, y)
    controller.moveSprite(claus)
    scene.cameraFollowSprite(claus)
    info.setLife(vida)
}
function Nivel_2 () {
    nivel = 2
    claus = sprites.create(img`
        . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
        . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 f f f 4 4 4 4 4 4 f f f 4 4 
        4 4 f f f 4 4 4 4 4 4 f f f 4 4 
        4 4 f f f 4 4 4 4 4 4 f f f 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 f f 4 4 4 4 4 4 f f 4 4 4 
        4 4 4 4 4 f f f f f f 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
        . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
        `, SpriteKind.Player)
    claus.setPosition(8, 8)
    controller.moveSprite(claus)
    scene.cameraFollowSprite(claus)
    scene.setBackgroundColor(9)
    tiles.setTilemap(tiles.createTilemap(hex`1000100000000000000000000000000000000000010101010400000000000000000002010000000000000000000000000000000000000000000000000201040000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000002010104000002010400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020104000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002010101010101010101010101010101`, img`
        . . . . . . . . . . . . . . . . 
        2 2 2 2 2 . . . . . . . . . 2 2 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 2 2 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . . . . . . . 2 2 2 2 . 
        . 2 2 2 . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 2 2 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, [myTiles.transparency16,sprites.builtin.forestTiles2,sprites.builtin.forestTiles1,sprites.builtin.forestTiles4,sprites.builtin.forestTiles3], TileScale.Sixteen))
    cartel2(24, 280)
}
function bicho_1 (x: number, y: number, energia: number) {
    bicho = sprites.create(img`
        . . . . c c c c c c . . . . . . 
        . . . c 6 7 7 7 7 6 c . . . . . 
        . . c 7 7 7 7 7 7 7 7 c . . . . 
        . c 6 7 7 7 7 7 7 7 7 6 c . . . 
        . c 7 c 6 6 6 6 c 7 7 7 c . . . 
        . f 7 6 f 6 6 f 6 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 6 c 7 7 6 f c . . 
        . . . f c c c c 7 7 6 f 7 7 c . 
        . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
        . c 7 7 2 7 7 c f c 6 7 7 6 c c 
        c 1 1 1 1 7 6 f c c 6 6 6 c . . 
        f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
        f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
        . f 6 1 1 1 1 1 1 6 6 6 f . . . 
        . . c c c c c c c c c f . . . . 
        `, SpriteKind.Enemy)
    bicho.follow(claus, 50)
    bicho.setPosition(x, y)
    poder_bicho1 = energia
    if (nivel == 2) {
        bicho.setImage(img`
            . . . . a a a a a a . . . . . . 
            . . . a 8 9 9 9 9 8 a . . . . . 
            . . a 9 9 9 9 9 9 9 9 a . . . . 
            . a 8 9 9 9 9 9 9 9 9 8 a . . . 
            . a 9 c 8 8 8 8 c 9 9 9 a . . . 
            . f 9 8 f 8 8 f 8 9 9 9 f . . . 
            . f 9 9 9 9 9 9 9 9 9 9 f . . . 
            . . f 9 9 9 9 6 c 9 9 8 f a . . 
            . . . f c c c c 9 9 8 f 9 9 a . 
            . . c 9 4 9 9 9 6 a f 9 9 9 9 a 
            . c 9 9 4 9 9 a f a 8 9 9 8 a a 
            c 1 1 1 1 9 8 f a a 8 8 8 a . . 
            f 1 1 1 1 1 8 8 a 8 8 8 8 f . . 
            f 8 1 1 1 1 1 8 8 8 8 8 a f . . 
            . f 8 1 1 1 1 1 1 8 8 8 f . . . 
            . . c c c c c c c c c f . . . . 
            `)
    }
}
function bicho2 (x: number, y: number, energia: number) {
    bicho = sprites.create(img`
        . . . . a a a a a a . . . . . . 
        . . . a 8 9 9 9 9 8 a . . . . . 
        . . a 9 9 9 9 9 9 9 9 a . . . . 
        . a 8 9 9 9 9 9 9 9 9 8 a . . . 
        . a 9 c 8 8 8 8 c 9 9 9 a . . . 
        . f 9 8 f 8 8 f 8 9 9 9 f . . . 
        . f 9 9 9 9 9 9 9 9 9 9 f . . . 
        . . f 9 9 9 9 6 c 9 9 8 f a . . 
        . . . f c c c c 9 9 8 f 9 9 a . 
        . . c 9 4 9 9 9 6 a f 9 9 9 9 a 
        . c 9 9 4 9 9 a f a 8 9 9 8 a a 
        c 1 1 1 1 9 8 f a a 8 8 8 a . . 
        f 1 1 1 1 1 8 8 a 8 8 8 8 f . . 
        f 8 1 1 1 1 1 8 8 8 8 8 a f . . 
        . f 8 1 1 1 1 1 1 8 8 8 f . . . 
        . . c c c c c c c c c f . . . . 
        `, SpriteKind.Enemy)
    poder_bicho_2 = energia
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (arma >= poder_bicho1) {
        music.pewPew.play()
        otherSprite.destroy(effects.disintegrate, 200)
        info.changeScoreBy(5)
        bicho_1(randint(0, 300), randint(0, 300), nivel)
    }
})
let poder_bicho_2 = 0
let bicho: Sprite = null
let puerta_1: Sprite = null
let poder_bicho1 = 0
let energia_2: Sprite = null
let energia_1: Sprite = null
let energia_jugador = 0
let nivel = 0
let claus: Sprite = null
let projectile: Sprite = null
let arma = 0
tiles.setTilemap(tiles.createTilemap(hex`200010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101010101010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010101010101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101010101000000000000000000000000000000000000000000000000000000000000000000000101010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101010000000000000000000001010101000000000000000000000000000000000000000000000101010100000000000001010000000101010100000101010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101010000000000000000000000000000000000000000000000000000000000000000`, img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . 
    . . . . . . 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . 
    2 2 2 2 . . . . . . 2 2 . . . 2 2 2 2 . . 2 2 2 . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    `, [myTiles.tile2,sprites.builtin.forestTiles0], TileScale.Sixteen))
scene.setBackgroundColor(9)
Nivel_1()
forever(function () {
    claus.vy = 100
    if (nivel == 2 && info.score() >= 100) {
        tiles.setTilemap(tiles.createTilemap(hex`1000100000000000000000000000000000000000010101010400000000000000000002010505050505000000000000000000050500000000000000000201040000000000000000000000000005050500000000000000000000000000000000000000000000000000000003000000000000000000000000000000050000000002010104000002020400000000000000050505050000050505000000000000000000000000000000000000000000000000000000000000000000000000020104000000000000000000000000000505050000000000000000000000000000000000000000000000000000000000000000000000000002010101010101010101010101010101`, img`
            . . . . . . . . . . . . . . . . 
            2 2 2 2 2 . . . . . . . . . 2 2 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 2 2 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 . . . . . . . . . 
            . . . . . . . . . . . 2 2 2 2 . 
            . 2 2 2 . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 2 2 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `, [myTiles.transparency16,sprites.builtin.forestTiles2,sprites.builtin.forestTiles1,sprites.builtin.forestTiles4,sprites.builtin.forestTiles3,sprites.builtin.forestTiles6], TileScale.Sixteen))
        scene.setBackgroundColor(15)
        pause(30000)
        if (info.score() >= 150) {
            game.over(true, effects.confetti)
        } else {
            game.over(false, effects.melt)
        }
    }
})
