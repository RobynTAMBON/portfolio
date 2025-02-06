import * as THREE from 'three';
export function textSprite(message, x, y, z, fontSize) {	
    var canvas = document.createElement('canvas');

    canvas.width = 512;
    canvas.height = 512;
    var canvasSize = 512;
    var ctx=canvas.getContext("2d");
	ctx.font = fontSize+"px Arial";
    ctx.textAlign = "center";

    var messageW = ctx.measureText(message).width;
    var blank = fontSize/3;

	ctx.fillStyle="rgb(255, 255, 255)";
	ctx.fillRect(
         canvasSize/2-messageW/2-blank,
         canvasSize/2-fontSize,
         messageW+blank*2,
         fontSize+blank
    );

    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillText(message, canvasSize/2, canvasSize/2);

    var texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;

	var spriteMtl = new THREE.SpriteMaterial({
        map: texture, fog: false, depthTest: false
    });
    var sprite = new THREE.Sprite(spriteMtl);
    sprite.scale.set(400, 400, 1);
    sprite.position.set(x, y, z);
    return sprite;
}
