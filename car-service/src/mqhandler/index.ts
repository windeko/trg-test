const mq = require('amqplib');

export class MQHandler {
    private connection;
    private channel;

    private constructor(connection, channel) {
        this.connection = connection;
        this.channel = channel;
    }

    public static async factory(link): Promise<MQHandler> {
        const connection = await mq.connect(link);
        const channel = await connection.createChannel();

        return new MQHandler(connection, channel)
    }

    public async sendMessage(queue: string, msg: string){
        await this.channel.assertQueue(queue);
        return await this.channel.sendToQueue(queue, Buffer.from(msg));
    }

    public async consumeMessage(queue: string){
        await this.channel.assertQueue(queue);
        // here might be other realization
        // https://www.npmjs.com/package/amqplib
        this.channel.consume(queue, (msg) => {
            console.log(msg.content.toString());
            this.channel.ack(msg);
            return msg.content.toString()
        })
    }
}
