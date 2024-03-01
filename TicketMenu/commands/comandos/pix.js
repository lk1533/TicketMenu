const Discord = require("discord.js")

module.exports = {
  name: "pix", // Coloque o nome do comando
  description: "Pix da loja.", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    let embed = new Discord.EmbedBuilder()
    .setAuthor({ name: "Nome | PIX", iconURL: client.user.displayAvatarURL({ dynamic: true }) })
    .setTitle(`**PIX da Loja:**`)
    .setDescription(`・💸 PIX: `)
    .setFooter({ text: "All Copyright reserved for © Nome" })
    .setColor("#a40000");

    interaction.reply({ embeds: [embed] })
  }
}