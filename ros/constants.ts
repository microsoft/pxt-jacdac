namespace jacdac {
    // Service ROS constants
    export const SRV_ROS = 0x1524f42c
    export const enum RosCmd {
        /**
         * Publishes a JSON-encoded message to the given topic.
         *
         * ```
         * const [node, topic, message] = jdunpack<[string, string, string]>(buf, "z z s")
         * ```
         */
        PublishMessage = 0x81,

        /**
         * Subscribes to a message topic. Subscribed topics will emit message reports.
         *
         * ```
         * const [node, topic] = jdunpack<[string, string]>(buf, "z s")
         * ```
         */
        SubscribeMessage = 0x82,

        /**
         * A message published on the bus. Message is JSON encoded.
         *
         * ```
         * const [node, topic, message] = jdunpack<[string, string, string]>(buf, "z z s")
         * ```
         */
        Message = 0x83,
    }

    export namespace RosCmdPack {
        /**
         * Pack format for 'publish_message' data.
         */
        export const PublishMessage = "z z s"

        /**
         * Pack format for 'subscribe_message' data.
         */
        export const SubscribeMessage = "z s"

        /**
         * Pack format for 'message' data.
         */
        export const Message = "z z s"
    }

}
