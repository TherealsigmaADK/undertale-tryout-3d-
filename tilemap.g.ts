// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020202020202020202020202020202020303030203030303030304030303020203030302030303030303020303030202070202020303030303030203030302060303030303030303030302030303020603030303030303030303020202020206030303030101010101010303030302060303030301010101010103030303020603030303010101010101030303030206030303030101010101010303030602060303030301010101010103030303020202020202030303030303030303030202030303020303030303030303060306020303030203030303030306030303020203030305030303030303030306030202020202020202020202020206020202`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . 2 . . . . . . . . . . 2 
2 . . . 2 . . . . . . 2 . . . 2 
2 . 2 2 2 . . . . . . 2 . . . 2 
2 . . . . . . . . . . 2 . . . 2 
2 . . . . . . . . . . 2 2 2 2 2 
2 . . . . 2 . . 2 2 2 . . . . 2 
2 . . . . 2 . . . . 2 . . . . 2 
2 . . . . 2 2 2 2 . 2 . . . . 2 
2 . . . . 2 . . 2 . 2 . . . 2 2 
2 . . . . 2 . . 2 . 2 . . . . 2 
2 2 2 2 2 . . . . . . . . . . 2 
2 . . . 2 . . . . . . . . 2 . 2 
2 . . . 2 . . . . . . 2 . . . 2 
2 . . . . . . . . . . . . 2 . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.doorClosedEast,sprites.dungeon.doorOpenWest,sprites.dungeon.floorLight1,sprites.dungeon.doorOpenNorth], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
