var WASD_LOGO = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize: function() {
        Phaser.Scene.call(this, { "key": "WASD_LOGO" });
    },

    init: function() {},

    preload: function ()
    {
        this.load.image('logo', 'img/wasd_logo.png'); // logo image preload
    },

    create: function ()
    {
        let logo = this.add.image(400, 300, 'logo'); // logo image create

        // logo image width, height amend
        logo.displayWidth = 400;
        logo.displayHeight = 300;

        // fade in
        this.cameras.main.fadeIn(1200, 0, 0, 0);

        // 2초 후 fade out
        setTimeout(() => this.cameras.main.fadeOut(1200, 0, 0, 0), 2000);

        this.time.addEvent({
            delay: 3000,
            loop: false,
            callback: () => {
                this.scene.start("WASD_LOADING");
            }
        });
    },
    
    update: function ()
    {

    }

});

