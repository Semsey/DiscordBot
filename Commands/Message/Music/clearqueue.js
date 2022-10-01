const { Message } = require("discord.js");
const WUMPUSBOT = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "clearqueue",
  aliases : ['clq','clearq'],
  description: `clear current queue of server`,
  userPermissions: ["CONNECT"],
  botPermissions: ["CONNECT"],
  category: "Music",
  cooldown: 5,
  inVoiceChannel: true,
  inSameVoiceChannel: true,
  Player: true,
  djOnly: true,

  /**
   *
   * @param {WUMPUSBOT} client
   * @param {Message} message
   * @param {String[]} args
   * @param {String} prefix
   * @param {Queue} queue
   */
  run: async (client, message, args, prefix, queue) => {
    // Code
    queue.delete();
    client.embed(message, `${client.config.emoji.SUCCESS} Queue Cleared !!`);
  },
};