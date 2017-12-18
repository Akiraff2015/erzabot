const request = require('request');
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = function(message, args, prefix) {
	let embedDeveloper = new Discord.RichEmbed()
		.addField("Developers Applications", ":small_blue_diamond: Minimum of age fifteen (15) or above is required to apply this position.\n:small_blue_diamond: Must have past experience\n:small_blue_diamond: **Must be 15+ and over**\n:small_blue_diamond: Must have past experience\n:small_blue_diamond: Must be able to do ADD ONS, and downgrade/upgrade plugins\n:small_blue_diamond: Portfolios/proof are needed of past experience/networks\n:small_blue_diamond: Needs to be able to commit at least **6 HOURS a week** (Unless you have a reason)\n:small_blue_diamond: Activity, leadership and so forth are required of a developer\n:small_blue_diamond: Understand the fundamentals needed\n:small_blue_diamond: Must be able to continue the work of another developer")
		.setColor(10682195);

	let embedBuilder = new Discord.RichEmbed()
		.addField("Builders Application", ":small_blue_diamond: Must be able to work in a team\n:small_blue_diamond: Must be able to work solo\n:small_blue_diamond: **Needs to be 15+ and over**\n:small_blue_diamond: Must have portfolio and past experience\n:small_blue_diamond: Needs to spend 5 hours per week, unless given a reason")
		.setColor(10682195);

	let embedGeneral = new Discord.RichEmbed()
		.addField("General Staff Application: (Helper, Moderator, Administrator, etc.)", ":small_blue_diamond: **14+ and over** (Exceptions can be made)\n:small_blue_diamond: Have past experience and proof of those experiences (If possible)\n:small_blue_diamond: Spend at least 6hours+ Discord a week and contribute ideas\n:small_blue_diamond: Need to be able to moderate and know the server\n:small_blue_diamond: Be mature and professional\n:small_blue_diamond: Need to be able to work as a team")
		.setColor(10682195);

	let embedOther = new Discord.RichEmbed()
		.addField("Requirements for other positions", ":small_blue_diamond: Must have a resume, portfolio, and client contacts ready\n:small_blue_diamond: **16+ and over**\n:small_blue_diamond: Spend over 10hours+ on network when possible\n:small_blue_diamond: Must agree to TOS (Given to those who want")
		.setColor(10682195);

	console.log(args);

	if (args.length === 0) {
		return message.channel.send('The following commanda are available:\n`' + prefix + 'application <developer | builder | staff | other>`');
	}

	if (args.length >= 1) {
		if (args[0].localeCompare('developer') === 0 || args[0].localeCompare('dev') === 0 || args[0].localeCompare('d') === 0) {
			return message.channel.send(embedDeveloper);
		}

		if (args[0].localeCompare('builder') === 0 || args[0].localeCompare('b') === 0) {
			return message.channel.send(embedBuilder);
		}
		
		if (args[0].localeCompare('staff') === 0 || args[0].localeCompare('s') === 0) {
			return message.channel.send(embedGeneral);
		}
		
		if (args[0].localeCompare('other') === 0 || args[0].localeCompare('o') === 0) {
			return message.channel.send(embedOther);
		}
	}
}