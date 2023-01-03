// Stage1 Scene
export class STAGE_1 extends Phaser.Scene
{
    constructor(STAGE_1, map, cursors, controls, selectedTile)
    {
        super({ key: 'STAGE_1' });
        this.map = map;
        this.cursors = cursors;
        this.controls = controls;
        this.selectedTile = selectedTile;
    }

    preload()
    {
        this.load.image('tiles', '/assets/TowerDefense/Tiles/MAP_SHEET.png');
    }

    create()
    {
        // 타일 맵
        const level = [
            [  0,   0,   0,   0,   0,   6,   0,   0,   0,   0,   0,  0,  0,  0,  0,  0,  6,  0,  0,  0,  0,  0 ],
            [  0,   0,   0,   0,   0,   6,   0,   0,   0,   0,   0,  0,  0,  0,  0,  0,  6,  0,  0,  0,  0,  0 ],
            [  0,   0,   0,   0,   0,   6,   0,   0,   0,   0,   0,  0,  0,  0,  0,  0,  6,  0,  0,  0,  0,  0 ],
            [  0,   0,   0,   0,   0,   6,   0,   0,   0,   0,   0,  0,  0,  0,  0,  0,  6,  0,  0,  0,  0,  0 ],
            [  0,   0,   0,   0,   0,   6,   0,   0,   0,   0,   0,  0,  0,  0,  0,  0,  6,  0,  0,  0,  0,  0 ],
            [  0,   0,   0,   0,   0,   6,   0,   0,   0,   0,   0,  0,  0,  0,  0,  0,  6,  0,  0,  0,  0,  0 ],
            [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,  0,  0,  0,  0,  0,  6,  0,  0,  0,  0,  0 ],
            [  0,   0,   0,   0,   0,   6,   0,   0,   0,   0,   0,  0,  0,  0,  0,  0,  6,  0,  0,  0,  0,  0 ],
            [  0,   0,   0,   0,   0,   6,   0,   0,   0,   0,   0,  0,  0,  0,  0,  0,  6,  0,  0,  0,  0,  0 ],
            [  0,   0,   0,   0,   0,   6,   0,   0,   0,   0,   0,  0,  0,  0,  0,  0,  6,  0,  0,  0,  0,  0 ],
            [  0,   0,   0,   0,   0,   6,   0,   0,   0,   0,   0,  0,  0,  0,  0,  0,  6,  0,  0,  0,  0,  0 ]
        ];

        // 맵 전체 크기
        this.cameras.main.setBounds(0, 0, 2000, 2000);

        // 맵 생성
        this.map = this.make.tilemap({ data: level, tileWidth: 80, tileHeight: 80 });
        const tiles = this.map.addTilesetImage("tiles");
        const layer = this.map.createLayer(0, tiles, 0, 0);
        layer.setInteractive();


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

        this.controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);

        this.input.on('pointerover', function (event, gameObjects) {

            gameObjects.tiles.setTint(0xff0000);

        });

        this.input.on('pointerout', function (event, gameObjects) {

            gameObjects.tiles.clearTint();

        });


    }



    update(time, delta)
    {
        // Key Cursor Update
        this.controls.update(delta);

    }

}

