import { STAGE_1 } from "./Stage1.js"

const SpinePlugin = {
    scene: [
        {key: 'SpinePlugin', plugin: window.SpinePlugin, mapping: 'spine'}
    ]
};

// Main Game (WASD)
const gameConfig = {
    type: Phaser.AUTO,
    parent: "wasd",
    width: 1280,
    height: 800,
    backgroundColor: "#ffffff",
    scene: [
        //WASD_LOGO,
        //WASD_LOADING,
        STAGE_1
    ],
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