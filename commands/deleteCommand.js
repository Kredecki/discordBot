const { clientId, guildId, token } = require('../config.json');
const { SlashCommandBuilder, Routes } = require('discord.js')
const { REST } = require('@discordjs/rest');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('deletecommands')
		.setDescription('Replies with delete!')
        .addStringOption(option => option.setName('input').setDescription('Enter a string').setRequired(true)),
	async execute(interaction) {
        const commandId = interaction.options.getString('input');

        const rest = new REST({ version: '10' }).setToken(token);

		rest.delete(Routes.applicationGuildCommand(clientId, guildId, commandId))
            .then(() => console.log('Successfully deleted guild command'))
            .catch(console.error);

            if(console.error = null){
                await interaction.reply('Successfully deleted guild command');
            } else{
                await interaction.reply('An unexpected error has occurred. [#001]');
            }
	},
};
console.log('deleteCommands.js is ready!');