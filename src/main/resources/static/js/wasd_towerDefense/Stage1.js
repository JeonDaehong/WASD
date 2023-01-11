import { EnemyObject } from "./EnemyObject.js"

// Stage1 Scene
export class STAGE_1 extends Phaser.Scene
{
    constructor(STAGE_1, map, cursors, controls, selectedTile, layer, marker, enemy)
    {
        super({ key: 'STAGE_1' });
        this.map = map;
        this.cursors = cursors;
        this.controls = controls;
        this.selectedTile = selectedTile;
        this.layer = layer;
        this.marker = marker;
        this.enemy = enemy;
    }

    updateMaker() {
        this.marker.x = this.layer.getTileX(game.input.activePointer.worldX) * 80;
        this.marker.y = this.layer.getTileY(game.input.activePointer.worldY) * 80;
    }
    preload()
    {
        this.load.image('tiles', '/assets/TowerDefense/Tiles/MAP_SHEET.png');
        this.load.setPath('/assets/TowerDefense/Enemy/Enemy_1/');
        this.load.spine('enemy_1', 'enemy1.json', ['enemy1.atlas'], true);
    }

    create()
    {
        // 타일 맵
        const level = [
            [  17,  42,   15,   31,   31,   16,   42,   15,   31,   31,   31,   31,   31,   31,  31,  16,  42,  15,  31,  31,  31,  31,  31,  31,  31,  31,  31,  31,  31,  31,  31,  16 ],
            [  17,   3,   13,   11,   13,   13,    3,   13,   11,   13,   13,   13,   11,   13,  13,  13,   3,  13,  13,  11,  13,  13,  13,  11,  13,  13,  13,  11,  13,  13,  13,  13 ],
            [  17,   3,    8,    8,    8,    8,   29,    2,    2,    2,    2,    2,    2,    2,   2,   2,  41,   2,   2,   2,   2,   2,   2,   2,   2,   2,  39,   2,   2,   2,   2,  42 ],
            [  17,   3,    8,    8,    8,    8,    3,    8,    8,    8,    8,    8,    8,    8,   8,   8,   8,   8,   8,   8,   8,   8,   8,   8,   8,   8,   3,   8,   8,   8,   8,  10 ],
            [  17,   3,    8,    8,    8,    8,    3,    8,    8,    8,    8,    8,    8,    8,   8,   8,   8,   8,   8,   8,   8,   8,   8,   8,   8,   8,   3,   8,   8,   8,   8,  19 ],
            [  17,   3,    8,    8,    8,    8,    3,    8,    8,   22,   23,    8,    8,    7,   2,   2,   2,   2,   2,   4,   8,   8,  22,  23,   8,   8,   3,   8,   8,   8,   8,  19 ],
            [  17,   3,    8,    8,    8,    8,    3,    8,    8,   33,   34,    8,    8,    3,  10,  32,  32,  32,  18,   3,   8,   8,  33,  34,   8,   8,   3,   8,   8,   8,   8,  19 ],
            [  17,   3,    8,    8,    8,    8,    3,    8,    8,   33,   34,    8,    8,    3,  19,  14,  14,  14,  17,   3,   8,   8,  33,  34,   8,   8,   3,   8,   8,   8,   8,  19 ],
            [  17,   3,    8,    8,    8,    8,    3,    8,    8,   33,   34,    8,    8,    3,  15,  31,  31,  31,  16,   3,   8,   8,  33,  34,   8,   8,   3,   8,   8,   8,   8,  19 ],
            [  17,   3,    8,    8,    8,    8,    3,    8,    8,   24,   25,    8,    8,    3,  13,  13,  11,  13,  13,   3,   8,   8,  33,  34,   8,   8,   3,   8,   8,   8,   8,  19 ],
            [  17,   3,    8,    8,    8,    8,    3,    8,    8,    8,    8,    8,    8,    5,   2,   2,  39,   2,   2,   6,   8,   8,  33,  34,   8,   8,   3,   8,   8,   8,   8,  19 ],
            [  17,   3,    8,    8,    8,    8,    3,    8,    8,    8,    8,    8,    8,    8,   8,   8,   3,   8,   8,   8,   8,   8,  33,  34,   8,   8,   3,   8,   8,   8,   8,  19 ],
            [  17,   5,   39,    2,    2,    2,   41,    2,    2,    2,    2,    2,    2,    2,   2,   2,  40,   8,   8,  22,  21,  21,  36,  34,   8,   8,   3,   8,   8,   8,   8,  19 ],
            [  16,   8,    3,    8,    8,    8,    8,    8,    8,    8,    8,    8,    8,    8,   8,   8,   3,   8,   8,  24,  26,  26,  26,  25,   8,   8,   3,   8,   8,   8,   8,  19 ],
            [  11,   8,    3,    8,    8,    8,    8,    8,    8,    8,    8,    8,    8,    8,   8,   8,   3,   8,   8,   8,   8,   8,   8,   8,   8,   8,   3,   8,   8,   8,   8,  19 ],
            [   2,   2,   41,    2,    2,    2,    2,    2,    2,    2,    2,    2,    2,    2,   2,   2,   1,   2,   2,   2,   2,   2,   2,   2,   2,   2,  40,   8,   8,   8,   8,  19 ],
            [  18,  10,   32,   32,   32,   32,   32,   32,   32,   32,   32,   32,   32,   32,  32,  18,   3,  10,  32,  32,  32,  32,  32,  32,  32,  32,   3,  32,  32,  32,  18,  15 ],
            [  17,  15,   31,   31,   31,   31,   31,   31,   31,   31,   31,   31,   31,   31,  31,  16,  42,  15,  31,  31,  31,  31,  31,  31,  31,  31,  42,  31,  31,  31,  16,  13 ]
        ];

        // 맵 전체 크기
        this.cameras.main.setBounds(0, 0, 2560, 1440);

        // 맵 생성
        this.map = this.make.tilemap({ data: level, tileWidth: 80, tileHeight: 80 }); // 타일 1개당 80 x 80
        const tiles = this.map.addTilesetImage("tiles");
        this.layer = this.map.createLayer(0, tiles, 0, 0);
        this.layer.setInteractive();

        this.marker = this.add.graphics();
        this.marker.lineStyle(2, 0xffffff, 1);
        this.marker.strokeRect(0, 0, this.map.tileWidth, this.map.tileHeight);

        // 최초 카메라 크기
        this.cameras.main._zoomX = 1;
        this.cameras.main._zoomY = 1;

        // 카메라 최대 줌 인, 줌 아웃 크기
        this.cameras.main.maxZoom = 1.5;
        this.cameras.main.minZoom = 0.5;

        // Key Cursor 선언
        this.cursors = this.input.keyboard.createCursorKeys();

        // Key 동작
        let controlConfig = {
            camera: this.cameras.main,
            left: this.cursors.left,
            right: this.cursors.right,
            up: this.cursors.up,
            down: this.cursors.down,
            acceleration: 0.06,
            drag: 0.0005,
            maxSpeed: 1.0
        };

        // 마우스 휠 줌인 줌아웃
        this.input.on('wheel', function (pointer, gameObjects, deltaX, deltaY) {

            if (deltaY > 0) {
                this.cameras.main._zoomX -= 0.1;
                this.cameras.main._zoomY -= 0.1;
            } else {
                this.cameras.main._zoomX += 0.1;
                this.cameras.main._zoomY += 0.1;
            }

        });

        // Key 가동
        this.controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);


        // enemy
        this.enemy =  new EnemyObject(this, 40, 1250, 'enemy_1.enemy_1', 'enemy1_walk_R', true);

    }



    update(time, delta)
    {
        // Key Cursor Update
        this.controls.update(delta);

        this.enemy.move(-5); // Temp Enemy Move

        // Min Zoom Out Check
        if (this.cameras.main.zoom < this.cameras.main.minZoom) {
            this.cameras.main.zoom = 0.5;
        }

        // Max Zoom In Check
        if (this.cameras.main.zoom > this.cameras.main.maxZoom) {
            this.cameras.main.zoom = 1.5;
        }

        // 현재 마우스 위치가, 몇 번째 Tile 인지 확인하는 코드
        //let mouseX = this.input.mousePointer.worldX;
        //let mouseY = this.input.mousePointer.worldY;
        //let tile = this.map.getTileAtWorldXY(mouseX, mouseY, true, this.cameras.main, this.layer);

        let worldPoint = this.input.activePointer.positionToCamera(this.cameras.main);
        let pointerTileX = this.map.worldToTileX(worldPoint.x);
        let pointerTileY = this.map.worldToTileY(worldPoint.y);

        this.marker.x = this.map.tileToWorldX(pointerTileX);
        this.marker.y = this.map.tileToWorldY(pointerTileY);

    }

}

