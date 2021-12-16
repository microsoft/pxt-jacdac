# Jacdac "Out of the Box" experience for micro:bit V2 and basic Jacdac modules

Usage: Drop the `.uf2` generated in [Actions](https://github.com/microsoft/pxt-jacdac/actions) (or from a release) on your micro:bit V2 device.

Currently only works with micro:bit v2

Behavior:
 - when a Jacdac module is added to or removed from the bus, the micro:bit displays the new count of devices on the bus
 - when a Jacdac button module is attached, the micro:bit will respond to the following events as follows
    - Down: display a first icon on 5x5 LEDs and play a note (eight different icons and notes supported, for up to eight buttons)
    - Hold: display a second icon
    - Up: clear display
 - when a Jacdac sensor (slider, rotary encoder, thermometer) is attached and the sensor value changes appreciably, 
   micro:bit will display a bar chart showing the magnitude of the reading register, or will display the value as a number 
 - when a Jacdac actuator (servor, lights) is attached, the micro:bit will send a command to it based
   on which button of micro:bit is pressed (A, B, A+B)
