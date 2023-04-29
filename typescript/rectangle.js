"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    move(xMove, yMove) {
        this.x += xMove;
        this.y += yMove;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
}
class Rectangle {
    constructor(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
    move(xMove, yMove) {
        this.a.move(xMove, yMove);
        this.b.move(xMove, yMove);
        this.c.move(xMove, yMove);
        this.d.move(xMove, yMove);
    }
    getArea() {
        const a = Math.abs(this.a.getX() - this.b.getX());
        const b = Math.abs(this.b.getY() - this.c.getY());
        return a * b;
    }
}
const rectangle = new Rectangle(new Point(0, 0), new Point(2, 0), new Point(2, 2), new Point(0, 2));
console.log(rectangle.getArea());
exports.default = {
    Point: Point,
    Rectangle: Rectangle
};
