const Discord = require("discord.js")

module.exports = {
  
    run: async (client, interaction) => {
        
        if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageGuild)) {
            interaction.reply({ content: `Você não possui permissão para utilizar este comando.`, ephemeral: true })
        } else {
            let embed = new Discord.EmbedBuilder()
                .setAuthor({ name: "Nome | Status", iconURL: client.user.displayAvatarURL({ dynamic: true }) })
                .setTitle(`**STATUS:**`)
                .setDescription(`・Instagram: ✅\n\n ・YouTube: ⭕\n\n ・Tik-Tok: ✅\n\n ・Twitch: ✅\n\n`)
                .setFooter({ text: "All Copyright reserved for © Nome" })
                .setColor("#a40000");
  
            interaction.reply({ embeds: [embed] })
        }
    }
}