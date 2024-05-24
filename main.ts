function fahren () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (onoff == 0) {
        onoff = 1
    } else {
        onoff = 0
    }
})
let onoff = 0
onoff = 0
music.playTone(294, music.beat(BeatFraction.Whole))
basic.forever(function () {
    if (onoff == 1) {
        basic.showIcon(IconNames.ArrowSouth)
        fahren()
    } else {
        maqueen.motorStop(maqueen.Motors.All)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
