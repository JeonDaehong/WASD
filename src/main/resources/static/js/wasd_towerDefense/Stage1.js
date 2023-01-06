// Stage1 Scene
export class STAGE_1 extends Phaser.Scene
{
    constructor(STAGE_1, map, cursors, controls, selectedTile, layer, marker)
    {
        super({ key: 'STAGE_1' });
        this.map = map;
        this.cursors = cursors;
        this.controls = controls;
        this.selectedTile = selectedTile;
        this.layer = layer;
        this.marker = marker;
    }

    updateMaker() {
        this.marker.x = this.layer.getTileX(game.input.activePointer.worldX) * 80;
        this.marker.y = this.layer.getTileY(game.input.activePointer.worldY) * 80;
    }
    preload()
    {
        this.load.image('tiles', '/assets/TowerDefense/Tiles/MAP_SHEET.png');
    }

    create()
    {
        // 타일 맵
        const level = [
            [  7,   2,   7,   7,   7,   7,   7,   7,   7,   7,   7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7 ],
            [  7,   2,   7,   7,   7,   7,   7,   7,   7,   7,   7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7 ],
            [  7,   4,   1,   3,   7,   7,   7,   7,   7,   7,   7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  1 ],
            [  7,   7,   7,   2,   7,   7,   7,   7,   7,   7,   7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7 ],
            [  7,   7,   7,   2,   7,   7,   7,   7,   7,   7,   7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7 ],
            [  7,   7,   7,   2,   7,   7,   7,   7,   7,   7,   7,  9,  9,  9,  9,  9,  9,  9,   9,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7 ],
            [  7,   7,   7,   2,   7,   7,   6,   1,   3,   7,   7,  9,  10,  10,  10,  10,  10,  9,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7 ],
            [  7,   7,   7,   2,   7,   7,   2,   7,   2,   7,   7,  9,  10,  14,  14,  14,  10,  9,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7 ],
            [  7,   7,   7,   2,   7,   7,   2,   7,   4,   1,   1,  9,  10,  14,  14,  14,  10,  9,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7 ],
            [  7,   7,   7,   2,   7,   7,   2,   7,   7,   7,   7,  9,  13,  13,  13,  13,  13,  9,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7 ],
            [  7,   7,   7,   2,   7,   7,   2,   7,   7,   7,   7,  9,  12,  12,  12,  12,  12,  9,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7 ],
            [  7,   7,   7,   4,   1,   1,   5,   7,   7,   7,   7,  9,  9,   9,   9,   9,   9,   9,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7 ],
            [  7,   7,   7,   7,   7,   7,   7,   7,   7,   7,   7,  7,  7,   7,   7,   7,   7,   7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7 ],
            [  7,   7,   7,   7,   7,   7,   7,   7,   7,   7,   7,  7,  7,   7,   7,   7,   7,   7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7 ],
            [  7,   7,   7,   7,   7,   7,   7,   7,   7,   7,   7,  7,  7,   7,   7,   7,   7,   7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7 ],
            [  1,   1,   1,   1,   1,   1,   1,   1,   3,   7,   7,  7,  7,   7,   7,   7,   7,   7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7 ],
            [  7,   7,   7,   7,   7,   7,   7,   7,   4,   1,   1,  1,  1,   1,   1,   7,   7,   7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7 ],
            [  7,   7,   7,   7,   7,   7,   7,   7,   7,   7,   7,  7,  7,   7,   7,   7,   7,   7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  2,  7,  7 ]
        ];

        // 맵 전체 크기
        this.cameras.main.setBounds(0, 0, 2560, 1440);

        // 최초 카메라 크기
        this.cameras.main._zoomX = 0.5;
        this.cameras.main._zoomY = 0.5;

        // 카메라 최대 줌 인, 줌 아웃 크기
        this.cameras.main.maxZoom = 1.5;
        this.cameras.main.minZoom = 0.5;

        // 맵 생성
        this.map = this.make.tilemap({ data: level, tileWidth: 80, tileHeight: 80 }); // 타일 1개당 80 x 80
        const tiles = this.map.addTilesetImage("tiles");
        this.layer = this.map.createLayer(0, tiles, 0, 0);
        this.layer.setInteractive();

        this.marker = this.add.graphics();
        this.marker.lineStyle(2, 0xffffff, 1);
        this.marker.strokeRect(0, 0, this.map.tileWidth, this.map.tileHeight);

        // Key Cursor 선언
        this.cursors = this.input.keyboard.createCursorKeys();

        // Key 동작
        let controlConfig = {
            camera: this.cameras.main,
            left: this.cursors.left,
            right: this.cursors.right,
            up: this.cursors.up,
            down: this.cursors.down,
            zoomIn: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q),
            zoomOut: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E),
            acceleration: 0.06,
            drag: 0.0005,
            maxSpeed: 1.0
        };

        this.input.on('wheel', function (pointer, gameObjects, deltaX, deltaY) {

            if (deltaY > 0) {
                this.cameras.main._zoomX -= 0.1;
                this.cameras.main._zoomY -= 0.1;
            } else {
                this.cameras.main._zoomX += 0.1;
                this.cameras.main._zoomY += 0.1;
            }

        });

        this.controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);

    }



    update(time, delta)
    {
        // Key Cursor Update
        this.controls.update(delta);

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

