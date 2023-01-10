import { SpineObject } from "./SpineObject.js"

export class EnemyObject extends SpineObject
{
    constructor(scene, x, y, key, animationName = '', loop = false) {
        super(scene, x, y, key, animationName, loop);
        this.nowAnimationName = animationName;
        this.playerSpeed = 40;
    }

    move(x = 0, y = 0){
        //this.spine.body.velocity.x = x;
        this.spine.y += y;
        this.spine.skeleton.bones[1].data.x += x;
        //console.log(this.spine.skeleton.bones[1].data.x)
    }
    attack(){
        this.setAnimation(1, 'melee_attack', true, 0);
    }
    setNowAnimationName(animationName){
        this.nowAnimationName = animationName;
    }
    getNowAnimationName(){
        return this.nowAnimationName;
    }
    setPlayerMoveSpeed(speed){
        this.playerSpeed = speed;
    }
    getPlayerMoveSpeed(){
        return this.playerSpeed;
    }
    setOffset(x, y){
        this.spine.body.setOffset(x, y);
    }
    setVelocity(x, y){
        this.spine.body.setVelocity(x, y);
    }
    setBounce(x, y){
        this.spine.body.setBounce(x, y);
    }
    setCollideWorldBounds(flag = true){
        this.spine.body.setCollideWorldBounds(flag);
    }
    reverseDirection(direction) {
        if (direction === "left") {
            this.spine.setScale(playerScaleX, playerScaleY);
        } else if (direction === "right") {
            this.spine.setScale(-playerScaleX, playerScaleY);
        }
    }
}