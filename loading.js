// Spine Object 선언
let spineObject = {
    "loading_spine": {
        files: [
            { 
                type: 'scenePlugin',
                key: 'SpinePlugin',
                url: 'plugins/SpinePlugin.js',
                sceneKey: 'spine'
            }
        ]
    }
};

var WASD_LOADING = new Phaser.Class ({

    Extends: Phaser.Scene,

    initialize: function()
    {
        Phaser.Scene.call(this, { "key": "WASD_LOADING" });
    },

    init: function() {},

    preload: function ()
    {
        this.load.pack('loading_pack', spineObject);
        this.load.spine('loading', 'assets/LOADING_SPINE/skeleton.json', ['skeleton.atlas'], true);
    },
    
    create: function ()
    {
        let loading_spine = this.add.spine(400, 300, 'loading.skeleton', 'loading', true);
    },
    
    update: function ()
    {
        
    }

});