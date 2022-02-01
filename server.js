const discord = require("discord.js"}
const client = new discord.Client()

client.on("ready", () => {
	console.log("macus youre so cool i want to suck you so hard omg")
});


client.on("message", message => {
	if(message.content === "!ping") {
		return message.channel.send("Pong " + client.ws.ping)
	}
})

client.login("OTM3OTUzNjI2OTE0MTYwNjYw.YfjPYg.bcRPYA0EGOZ1KoflnemCEdwjJzk")