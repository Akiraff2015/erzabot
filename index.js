const request = require('request');
const Discord = require('discord.js');
const client = new Discord.Client();

const settings = require('./settings.json');
const suggestion = require('./suggestion.json');
const prefix = "-";

client.on('ready', () => {
	console.log('I am online\n');
});


client.on('message', message => {
	if (message.author === client.user) return;
	if (!message.content.startsWith(prefix)) return;
	let args = message.content.split(' ').slice(1);

	if (message.content.startsWith(prefix + 'alive')) {
		message.channel.send('```Still alive!```');
	}else

	if (message.content.startsWith(prefix + 'help')) {
		helpCommand(message);
	}else

	if (message.content.startsWith(prefix + 'rules')){
		require('./commands/rules.js')(message, client);
	}

	if (message.content.startsWith(prefix + 'cry')) {
		cryCommand(message);
	}else

	if (message.content.startsWith(prefix + 'money') || message.content.startsWith(prefix + 'bal')) {
		require('./commands/currency.js')(message, args, prefix, client);
	}

	if (message.content.startsWith(prefix + 'suggestion')) {
		//suggestCommand(message, args, client);
		require('./commands/suggestion.js')(message, args, prefix, client);
	}else

	if (message.content.startsWith(prefix + 'application') || message.content.startsWith(prefix + 'app')) {
		require('./commands/application.js')(message, args, prefix);
	}else

	if (message.content.startsWith(prefix + 'info') || message.content.startsWith(prefix + 'i')) {	
		let embed = new Discord.RichEmbed()
			.addField("Bot Information", "**Name:** ErzaBot\n**Maintained by:** Akiraff#0434\n**Current Version:** 0.01")
			.setThumbnail("https://cdn.discordapp.com/avatars/145174269834428416/23c110c1944fb78648d7d4a0b035dafb.png?size=2048")
			.setColor(16776960);

		message.channel.send(embed);
	} else

	if (message.content.startsWith(prefix + 'todo') || message.content.startsWith(prefix + 't')) {
		message.channel.send('Personal reminded\n+ Organize commands within modules\n+ Change suggestion embed color');
	} else

	if (message.content.startsWith(prefix + 'admin')) {
		let modRole = message.guild.roles.find("name", "Mod");

		if (message.member.roles.has(modRole.id)) {
			message.channel.send("Hello mod.");
		}

		else {
			message.channel.send("Sorry you're not privilaged enough.");
		}
	}
});

client.login(settings.token);

function helpCommand(message) {
	let embed = new Discord.RichEmbed()
		.addField("List of Commands", prefix + "help\n" + prefix + "suggestion\n" + prefix + "application\n" + prefix + "rules\n" + prefix + "cry");
	message.channel.send(embed);
}

function testCommand(message, args) {
	let embed = new Discord.RichEmbed()
		.addField("This is a title", "So much wow", true)
		.setColor(16711680)
	return message.channel.send(embed);
}

function cryCommand(message) {
	return message.channel.send('', {
		files: ['./img/cry.gif']
	});
}