export class SpineObject
{
    constructor(scene, x, y, key, animationName, loop){
        //this.scene = scene;
        this.spine = scene.add.spine(x, y, key, animationName, loop);
    }

    getAttachments(){
        return this.spine.skeleton.skin.attachments;
    }

    getSlots(){
        return this.spine.skeleton.slots;
    }

    setAttachment(slotName, attachmentName){
        this.spine.skeleton.setAttachment(slotName, attachmentName);
    }

    setSkin(skinName){
        this.spine.setSkin(null);
        this.spine.setSkinByName(skinName);
    }

    setAnimation(track = 0, animation, loop = false, delay = 0){
        this.spine.setAnimation(track, animation, loop, delay);
    }

    setScale(x, y){
        this.spine.scaleX = x;
        this.spine.scaleY = y;
    }
}