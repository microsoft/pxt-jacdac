/**
  * Class definition for the custom MicroBit UART Service.
  * Provides a BLE service that acts as a UART port, enabling the reception and transmission
  * of an arbitrary number of bytes.
  */

#include "MicroBitConfig.h"

#if CONFIG_ENABLED(DEVICE_BLE)

#include "ExternalEvents.h"
#include "JacdacBLE.h"
#include "MicroBitFiber.h"
#include "ErrorNo.h"
#include "NotifyEvents.h"


const uint8_t  JacdacBLE::base_uuid[ 16] =
{0xf8, 0x53, 0x00, 0x01, 0xa9, 0x7f, 0x49, 0xf5, 0xa5, 0x54, 0x3e, 0x37, 0x3f, 0xbe, 0xa2, 0xd5};
// { 0xd5,0xa2,0xbe,0x3f,0x37,0x3e,0x54,0xa5,0xf5,0x49,0x7f,0xa9,0xf2,0x8a,0x53,0xf8 };

const uint16_t JacdacBLE::serviceUUID               = 0x0001;
const uint16_t JacdacBLE::charUUID[ mbbs_cIdxCOUNT] = { 0x0002, // tx from device to PC
                                                        0x0003, // rx from PC to device
                                                        0x0004 // diagnostics from PHY
                                                      };


/**
 * Constructor for the UARTService.
 * @param _ble an instance of BLEDevice
 * @param rxBufferSize the size of the rxBuffer
 * @param txBufferSize the size of the txBuffer
 *
 * @note defaults to 20
 */
JacdacBLE::JacdacBLE(BLEDevice &_ble, uint8_t rxBufferSize, uint8_t txBufferSize)
{
    txBuffer = (uint8_t *)malloc(JACDAC_BLE_BUFFER_SIZE);
    rxBuffer = (uint8_t *)malloc(JACDAC_BLE_BUFFER_SIZE);
    diagBuffer = (uint8_t *)malloc(sizeof(jd_diagnostics_t));

    // Register the base UUID and create the service.
    RegisterBaseUUID(base_uuid);
    CreateService(serviceUUID);

    // Create the data structures that represent each of our characteristics in Soft Device.
    CreateCharacteristic( mbbs_cIdxRX, charUUID[ mbbs_cIdxRX],
                          rxBuffer,
                          1, JACDAC_BLE_BUFFER_SIZE,
                          microbit_propWRITE | microbit_propWRITE_WITHOUT);

    CreateCharacteristic( mbbs_cIdxTX, charUUID[ mbbs_cIdxTX],
                          txBuffer,
                          1, JACDAC_BLE_BUFFER_SIZE,
                          microbit_propINDICATE);

    // Create the data structures that represent each of our characteristics in Soft Device.
    CreateCharacteristic(mbbs_cIdxDIAG, charUUID[ mbbs_cIdxDIAG],
                          diagBuffer,
                          1, sizeof(jd_diagnostics_t),
                          microbit_propREAD | microbit_propWRITE );
}


/**
  * Invoked when BLE disconnects.
  */
void JacdacBLE::onDisconnect( const microbit_ble_evt_t *p_ble_evt)
{
}


/**
  * A callback function for whenever a Bluetooth device consumes our TX Buffer
  */
void JacdacBLE::onConfirmation( const microbit_ble_evt_hvc_t *params)
{
    if ( params->handle == valueHandle( mbbs_cIdxTX))
        MicroBitEvent(DEVICE_ID_JACDAC_BLE, MICROBIT_JACDAC_S_EVT_TX);
}


/**
  * A callback function for whenever a Bluetooth device writes to our RX characteristic.
  */
void JacdacBLE::onDataWritten(const microbit_ble_evt_write_t *params)
{
    if (params->handle == valueHandle(mbbs_cIdxRX))
    {
        uint16_t bytesWritten = params->len;
        MicroBitEvent(DEVICE_ID_JACDAC_BLE, MICROBIT_JACDAC_S_EVT_RX);
    }

    if (params->handle == valueHandle(mbbs_cIdxDIAG))
    {
        indicateChrValue(mbbs_cIdxDIAG, diagBuffer, sizeof(jd_diagnostics_t));
    }
}

/**
 * Send a Jacdac byte buffer.
 * @param buf pointer to the buffer
 * @param len length of the buffer
 *
 * @return MICROBIT_OK on success or MICROBIT_NO_RESOURCES if tx queue is full
 */
int JacdacBLE::send(uint8_t *buf, int length)
{
    if(length < 1)
        return MICROBIT_INVALID_PARAMETER;

    bool updatesEnabled = indicateChrValueEnabled( mbbs_cIdxTX);

    if( !getConnected() && !updatesEnabled)
        return MICROBIT_NOT_SUPPORTED;

    indicateChrValue(mbbs_cIdxTX, buf, length);
    updatesEnabled = indicateChrValueEnabled(mbbs_cIdxTX);

    return MICROBIT_OK;
}


ManagedBuffer JacdacBLE::read() {
    return ManagedBuffer(rxBuffer, JACDAC_BLE_BUFFER_SIZE);
}
#endif
