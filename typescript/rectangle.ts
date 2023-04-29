class Point {

    constructor(private x: number, private y: number) {
    }

    public move(xMove: number, yMove: number) {
        this.x += xMove;
        this.y += yMove;
    }

    public getX() {
        return this.x;
    }

    public getY() {
        return this.y;
    }

}

class Rectangle {

    constructor(private a: Point, private b: Point, private c: Point, private d: Point) {
    }

    public move(xMove: number, yMove: number) {
        this.a.move(xMove, yMove);
        this.b.move(xMove, yMove);
        this.c.move(xMove, yMove);
        this.d.move(xMove, yMove);
    }

    public getArea() {
        const a = Math.abs(this.a.getX() - this.b.getX());
        const b = Math.abs(this.b.getY() - this.c.getY());
        return a * b;
    }

}

const rectangle = new Rectangle(new Point(0, 0), new Point(2, 0),
    new Point(2, 2), new Point(0, 2));
console.log(rectangle.getArea());

export default {
    Point: Point,
    Rectangle: Rectangle
};
