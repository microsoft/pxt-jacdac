# Jacdac Uploader

## Sim environment setup

To build, run `./build.sh`.
This will run the simulator and compilation in watch mode.

If it detects a local checkout of `pxt-common-packages` in the right spot, it will try to use it
(for freshest version of `azureiot`, `mqtt`, etc.).

To test locally, 

* start a local server from the `docs` folder

```
npx http-server docs -p 3232
```

* head to 
https://microsoft.github.io/jacdac-docs/dashboard/?localhost=1
and spin up "Azure IoT (localhost)" simulator.

To publish a new version to github pages, do the following:

```bash
cp built/binary.js ../../docs/assets/js/binary.js
git add ../../docs/assets/js/binary.js
git commit -m "new build of uploader"
```

## LED modes

* quick fade in/out red = looking for wifi
* quick fade in/out green = connecting to IoT Hub
* slow (~3s) fade in/out green = connected
* blue flash = data sent
* slow fade in/out yellow - proxy mode (not sending data)

Normal state is slow green fade with blue flashes every ~5s (or more often when lots of sensors connected).

## Binary format

All data is little endian.

Offset | Length | Description
-------|--------|------------------------
0      | 4      | "JDBR" - magic
4      | 8      | current device time in milliseconds
8      | 32     | reserved, should be 0
40     | ...    | Data

Data is encoded per-service. For every service with readings, we have
a header consisting of device ID (hex-encoded), followed by byte `':'`,
followed by service name and byte `0`.
For example: `"65394841326b6c71:thermometer2\x00"`

Header is followed by `UINT32` that encode the size of the data for that service,
and 8 bytes for each data point.
Each data point consists of `UINT32` and `FLOAT32`.
The uint encodes time delta (in milliseconds) between
the time the reading was taken and the current device time (from the global header).
The float encodes the reading value.

## JSON format

Example:

```json
{
  "deviceTime": 329273,
  "readings": {
    "BQ87_b8c300f2bb8f922d": {
      "potentiometer": {
        "readings": [
          41.9921875,
          42.0166015625,
          42.0166015625,
          41.9921875,
          42.0166015625,
          42.0166015625,
          46.4599609375
        ],
        "timedelta": [
          -6168,
          -5160,
          -4160,
          -3149,
          -2139,
          -1129,
          -120
        ]
      }
    }
  }
}
```
