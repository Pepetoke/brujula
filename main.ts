basic.forever(function () {
    if (input.compassHeading() > 350 || input.compassHeading() < 10) {
        basic.showArrow(ArrowNames.North)
    } else if (input.compassHeading() > 80 && input.compassHeading() < 100) {
        basic.showArrow(ArrowNames.East)
    } else if (input.compassHeading() > 170 && input.compassHeading() < 190) {
        basic.showArrow(ArrowNames.South)
    } else if (input.compassHeading() > 260 && input.compassHeading() < 280) {
        basic.showArrow(ArrowNames.West)
    } else if (input.compassHeading() > 10 && input.compassHeading() < 80) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (input.compassHeading() > 100 && input.compassHeading() < 170) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (input.compassHeading() > 190 && input.compassHeading() < 260) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (input.compassHeading() > 280 && input.compassHeading() < 350) {
        basic.showArrow(ArrowNames.NorthWest)
    } else {
        basic.showIcon(IconNames.No)
    }
})
