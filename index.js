function circle(radius) {
    this.radius = radius
    this.draw = function () {
        console.log('draw')
    }
}

circle.call({}, 1)
circle.apply({}, [1, 2, 3])

const another = new circle(1)