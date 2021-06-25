
const Client = require("discord.js");
const client = new Client.Client();


client.login(process.env.Tasse);

client.once('ready', () => {

console.log("Online");


})

client.on('message',message =>  {




})