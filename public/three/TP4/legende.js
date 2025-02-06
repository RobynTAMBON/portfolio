import * as THREE from 'three';
export class Legende {
    constructor(point1, point2, couleur, text) {
        this.point1 = point1;
        this.point2 = point2;
        this.couleur = couleur;
        this.text = text;
    }

    createLine() {
        const material = new THREE.LineBasicMaterial({
            color: this.couleur
        });
        const points = [];
        points.push(this.point1);
        points.push(this.point2);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        return (new THREE.Line(geometry, material));
    }
}