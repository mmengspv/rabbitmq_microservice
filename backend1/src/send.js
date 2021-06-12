import amqp from "amqplib/callback_api.js";

export default function connectRabbitMQ() {
  amqp.connect("amqps://frkhpmjv:g4kMHjnyH02VplPkaLe7wPeKCivANF6F@beaver.rmq.cloudamqp.com/frkhpmjv", function (error0, connection) {
    if (error0) {
      throw error0;
    }
    connection.createChannel(function (error1, channel) {
      if (error1) {
        throw error1;
      }
      const exchange = "logs";
      const msg = JSON.stringify({name: "Saac"})

      channel.assertExchange(exchange, "fanout", {
        durable: false,
      });
      channel.publish(exchange, "", Buffer.from(msg));
      console.log(" [x] Sent %s", msg);
    });

  });
}
