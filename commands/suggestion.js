const fs = require('fs');
const jsonfile = require('jsonfile');
const Discord = require('discord.js');
const client = new Discord.Client()

module.exports = function(message, args, prefix) {
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
		client.channels.get("391594447273459713").send(embed).then(function(m) {
					m.react('👍');
					m.react('👎');
				}).catch(function(err) {
					console.log(err);
				});

		// return message.channel.send(embed).then(m => {
		// 	m.edit(embedId(m.id));
		// 	m.react('👍');
		// 	m.react('👎');
		// });

		//return message.channel.send(embed).then(message => console.log(message.id));
	}
	// if (!args[0].localeCompare('add')) {
	// 	if (args.length > 1) {
	// 		//console.log(message.author.id);
	// 		let tempArr;
	// 		let temp = {userId: message.author.id, suggestion: args.slice(1, args.lenth).join(" ")};

	// 		fs.readFile('./suggestion.json', (err, data) => {
	// 			var json = JSON.parse(data);
	// 			json.pending.push(temp);
	// 			fs.writeFile('./suggestion.json', JSON.stringify(json));
	// 		});

	// 			let embed = new Discord.RichEmbed()
	// 				.setTitle("Suggestion by " + client.users.get(message.author.id).username)
	// 				.setDescription(args.slice(1, args.lenth).join(" "))
	// 				.addField("Suggestion Status", "Pending")
	// 				.setThumbnail(message.author.avatarURL)
	// 				.setColor(16776960)
	// 				.setFooter(message.id);
				
	// 			return client.channels.get('391594447273459713').send(embed).then(function(message) {
	// 				message.react('👍');
	// 				message.react('👎');
	// 			}).catch(function(err) {
	// 				console.log(err);
	// 			});
	// 	}
	// 	return message.channel.send('`' + prefix + 'suggestion add <type in your suggestion>`');
	// }

	// !suggestion list
	if (!args[0].localeCompare('list')) {
		// !suggestion list <args> (invalid @args)
		if (args.length > 1) {
			message.channel.send('Did you mean to type: `' + prefix + 'suggestion list`?');
		}
		message.channel.send('List of suggestions.');
	}

	// !suggestion pending
	if (!args[0].localeCompare('pending')) {
		jsonfile.readFile('./suggestion.json', (err, data) => {
			data.pending.forEach((val, index) => {
				return message.channel.send(index+1 + '. ' + 'Suggested by: ' + bold(client.users.get(val.userId).username) + '\n\
' + bold('Description: ') + val.suggestion + '\n\n');
			});
		});
	}

	// !suggestion approve
	if (!args[0].localeCompare('approve')) {
		// !suggestion approve list
		// if (message.channel.id === '391594447273459713') {
		// 	let a = client.TextChannel.fetchMessage('391976704475922433');
		// 	return message.channel.send(a);

		// return message.channel.fetchMessage('391843406835482625')
		// 	.then(messsage => message.edit("new content"))
		// 	.catch(err => console.log(err));
			let embed = new Discord.RichEmbed()
				.setTitle("Suggestion by ")
				// .setDescription(args.slice(1, args.lenth).join(" "))
				// .addField("Suggestion Status", "Approved")
				// .setThumbnail(message.author.avatarURL)
				// .setColor(16776960)
				// .setFooter(message.id);

		message.guild.channels.get('391594447273459713').fetchMessage("391976705767505932")
			.then(message => message.edit(embed))
			.catch(err => {
				if (err) {
					console.log(err);
				}
			});
		//return message.channel.fetchMessage('391976705767505932').then(m => m.update(m.content, "test")).catch(err => console.log(err));
		//console.log(client.channels.get("391594447273459713").fetchMessage("391976704475922433"));
		// }
		if (args.lenth > 1) {
			//TextChannel.fetchMessage('message id').then(m => m.edit('new message content'))
			//return message.channel.send('This is a list of approved suggestions.');
		}
		//return message.channel.send('What are you trying to approve?');
	}

	if (!args[0].localeCompare('disapprove')) {
		message.channel.send('Why did you disapprove?');
	}

	if (!args[0].localeCompare('remove')) {
		if (!args[1].localeCompare('all')) {
			message.channel.send(':no_entry: You have removed all the suggestion! :no_entry:');
		}
		message.channel.send("You have removed: `" + args.slice(1, args.length).join(" ") + '`');
	}

	else {
		message.channel.send('Dont be stupid! The following commands that are available:\n`' + prefix + 'suggestion <add | list | remove | approve | disapprove>`');
	}
}
// Suggestion command
// function suggestCommand(message, args, client) {
// 	// !suggestion add <type here suggestion>
// 	if (!args[0].localeCompare('add')) {
// 		if (args.length > 1) {
// 			//console.log(message.author.id);
// 			let tempArr;
// 			let temp = {userId: message.author.id, suggestion: args.slice(1, args.lenth).join(" ")};

// 			fs.readFile('./suggestion.json', (err, data) => {
// 				var json = JSON.parse(data);
// 				json.pending.push(temp);
// 				fs.writeFile('./suggestion.json', JSON.stringify(json));
// 			});

// 				let embed = new Discord.RichEmbed()
// 					.setTitle("Suggestion by " + client.users.get(message.author.id).username)
// 					.setDescription(args.slice(1, args.lenth).join(" "))
// 					.addField("Suggestion Status", "Pending")
// 					.setThumbnail(message.author.avatarURL)
// 					.setColor(16776960)
// 					.setFooter('id: ' + message.id);
				
// 				return client.channels.get('391594447273459713').send(embed).then(function(message) {
// 					message.react('👍');
// 					message.react('👎');
// 				}).catch(function(err) {
// 					console.log(err);
// 				});
// 		}
// 		return message.channel.send('`' + prefix + 'suggestion add <type in your suggestion>`');
// 	}

// 	// !suggestion list
// 	if (!args[0].localeCompare('list')) {
// 		// !suggestion list <args> (invalid @args)
// 		if (args.length > 1) {
// 			return message.channel.send('Did you mean to type: `' + prefix + 'suggestion list`?');
// 		}
// 		return message.channel.send('List of suggestions.');
// 	}

// 	// !suggestion pending
// 	if (!args[0].localeCompare('pending')) {
// 		jsonfile.readFile('./suggestion.json', (err, data) => {
// 			data.pending.forEach((val, index) => {
// 				return message.channel.send(index+1 + '. ' + 'Suggested by: ' + bold(client.users.get(val.userId).username) + '\n\
// ' + bold('Description: ') + val.suggestion + '\n\n');
// 			});
// 		});
// 		return;
// 	}

// 	// !suggestion approve
// 	if (!args[0].localeCompare('approve')) {
// 		// !suggestion approve list
// 		if (!args[1].localeCompare('list')) {
// 			return message.channel.send('This is a list of approved suggestions.');
// 		}
// 		return message.channel.send('What are you trying to approve?');
// 	}

// 	if (!args[0].localeCompare('disapprove')) {
// 		return message.channel.send('Why did you disapprove?');
// 	}

// 	if (!args[0].localeCompare('remove')) {
// 		if (!args[1].localeCompare('all')) {
// 			return message.channel.send(':no_entry: You have removed all the suggestion! :no_entry:');
// 		}
// 		return message.channel.send("You have removed: `" + args.slice(1, args.length).join(" ") + '`');
// 	}

// 	else {
// 		return message.channel.send('Dont be stupid! Type in:\n`' + prefix + 'suggestion <add | list | remove | approve | disapprove>`');
// 	}
// }