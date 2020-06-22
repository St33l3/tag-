namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
info.onCountdownEnd(function () {
    game.over(true)
})
let coin: Sprite = null
game.splash("tag")
info.startCountdown(60)
tiles.setTilemap(tiles.createTilemap(
            hex`1000100001010101010101010101010101010101010102020202020202020202020201010102030404040404040404040403020101020405010101010101010105040201010204080e0e0e0e0e0e0e0e0a0402010102040710101010101010100d0402010102040712131313131313110d0402010102040712151c1d191716110d0402010102040712151b1e1a1816110d0402010102040712141414141414110d040201010204070f0f0f0f0f0f0f0f0d040201010204090b0b0b0b0b0b0b0b0c04020101020405010101010101010105040201010203040404040404040404040302010101020202020202020202020202010101010101010101010101010101010101`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.dungeon.floorLight2,sprites.dungeon.floorDark0,sprites.dungeon.floorMixed,sprites.dungeon.floorLight4,sprites.dungeon.floorDarkDiamond,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.purpleOuterWest2,sprites.dungeon.purpleOuterEast2,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthEast],
            TileScale.Sixteen
        ))
info.setScore(0)
let bat = sprites.create(img`
. . f f f . . . . . . . . f f f 
. f f c c . . . . . . f c b b c 
f f c c . . . . . . f c b b c . 
f c f c . . . . . . f b c c c . 
f f f c c . c c . f c b b c c . 
f f c 3 c c 3 c c f b c b b c . 
f f b 3 b c 3 b c f b c c b c . 
. c b b b b b b c b b c c c . . 
. c 1 b b b 1 b b c c c c . . . 
c b b b b b b b b b c c . . . . 
c b c b b b c b b b b f . . . . 
f b 1 f f f 1 b b b b f c . . . 
f b b b b b b b b b b f c c . . 
. f b b b b b b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
`, SpriteKind.Player)
let tagger = sprites.create(img`
. . . . . . . . . . . . . . f f f f f f . . . . 
. . . . . . . . . . . . . f 2 f e e e e f f . . 
. . . . . . . . . . . . f 2 2 2 f e e e e f f . 
. . . . . . . . . . . . f e e e e f f e e e f . 
. . . . . . . . . . . f e 2 2 2 2 e e f f f f . 
. . . . . . . . . . . f 2 e f f f f 2 2 2 e f . 
. . . . . . . . . . . f f f e e e f f f f f f f 
. . . . . . . . . . . f e e 4 4 f b e 4 4 e f f 
. . . . . . . . . . . . f e d d f 1 4 d 4 e e f 
. . . . . . . . . . . . . f d d d d 4 e e e f . 
. . . . . . . . . . . . . f e 4 4 4 e d d f . . 
. . . . . . . . . . . . . c c c 2 2 e d d f . . 
. . . . . . . . . . . . . c d c 2 2 f e e . . . 
. . . . . . . . . . . . c d d c 4 4 4 4 f . . . 
. . . . . . . . . . . c d d c f f f f f . . . . 
. . . . . . . . . . c d d c . . f f f . . . . . 
. . . . . . . . . . c d c . . . . . . . . . . . 
. . . . . . . . . . c c . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
tagger.setPosition(145, 54)
bat.setPosition(18, 49)
controller.moveSprite(bat)
tagger.follow(bat, 60)
scene.cameraFollowSprite(bat)
game.onUpdateInterval(1000, function () {
    coin = sprites.create(img`
. . b b b b . . 
. b 5 5 5 5 b . 
b 5 d 3 3 d 5 b 
b 5 3 5 5 1 5 b 
c 5 3 5 5 1 d c 
c d d 1 1 d d c 
. f d d d d f . 
. . f f f f . . 
`, SpriteKind.Food)
    coin.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 160))
})
