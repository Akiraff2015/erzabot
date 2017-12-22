const fs = require('fs');
const jsonfile = require('jsonfile');
const Discord = require('discord.js');

module.exports = function(message, args, prefix, client) {
	// !suggestion add <type here suggestion>
	if (!args[0].localeCompare('add')) {
		let embed = new Discord.RichEmbed()
				.setTitle("Suggestion by " + message.author.username)
				.setDescription(args.slice(1, args.length).join(" "))
				.addField("Suggestion Status", "Pending")
				.setThumbnail(message.author.avatarURL)
				.setColor(16776960);

		let embedId = function(id) {
			return new Discord.RichEmbed()
				.setTitle("Suggestion by " + message.author.username)
				.setDescription(args.slice(1, args.length).join(" "))
				.addField("Suggestion Status", "Pending")
				.setThumbnail(message.author.avatarURL)
				.setColor(16776960)
				.setFooter(id);
		}

		//message.client.guild.channels.get('391594447273459713').send('new message');
		client.channels.get('391594447273459713').send({embed}).then(function(message) {
			message.react('👍');
			message.react('👎');
			message.edit(embedId(message.id));
		}).catch(function(err) {
			console.log(err);
		});
	}

	function embedBody(title, description, message_id, avaURL, status, color) {
		let test = new Discord.RichEmbed()
			.setTitle(title)
			.setDescription(description)
			.addField("Suggestion Status", status)
			.setFooter(message_id)
			.setThumbnail(avaURL)
			.setColor(color);

		return test;
	}

	// !suggestion approve
	if (!args[0].localeCompare('accept')) {
		if (args.length > 1) {
			client.channels.get('391594447273459713').fetchMessage(args[1]).then(m => {
				m.edit(embedBody(
					m.embeds[0].title,  
					m.embeds[0].description, 
					args[1],
					m.embeds[0].thumbnail.url,
					"Accepted", 
					5570304
				))
				.catch(err => console.trace(err));
			});
		}
	}

	if (!args[0].localeCompare('reject')) {
		if (args.length > 1) {
			client.channels.get('391594447273459713').fetchMessage(args[1]).then(m => {
				m.edit(embedBody(
					m.embeds[0].title, 
					m.embeds[0].description, 
					args[1],
					m.embeds[0].thumbnail.url,
					"Rejected", 
					13565952
				))
				.catch(err => console.trace(err));
			});			
		}
	}

	if (!args[0].localeCompare('pend')) {
		if (args.length > 1) {
			client.channels.get('391594447273459713').fetchMessage(args[1]).then(m => {
				m.edit(embedBody(
					m.embeds[0].title, 
					m.embeds[0].description, 
					args[1],
					m.embeds[0].thumbnail.url,
					"Pending", 
					16776960
				))
				.catch(err => console.trace(err));
			});			
		}
	}