import { STAGE_1 } from "./Stage1.js"

const SpinePlugin = {
    scene: [
        {key: 'SpinePlugin', plugin: window.SpinePlugin, mapping: 'spine'}
    ]
};

// Main Game (WASD)
const gameConfig = {
    type: Phaser.AUTO,
    scale: {
        _mode: Phaser.Scale.FIT,
        parent: 'wasd',
        width: 800,
        height: 600
    },
    backgroundColor: "#ffffff",
    scene: [
        //WASD_LOGO,
        //WASD_LOADING,
        STAGE_1
    ],
    dom: {
        createContainer: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: { y: 50 }
        }
    },
    plugins: SpinePlugin,
    autoCenter: Phaser.Scale.CENTER_BOTH // Phaser Canvas를 Center에 위치.
};

// 게임 불러오기
const game = new Phaser.Game(gameConfig);
