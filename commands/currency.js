module.exports = function(message, args, prefix, client) {
	if (args.length === 0) {
		message.channel.send(':moneybag: $0.00');
	}

	if (!args[0].localeCompare('help')) {
		message.channel.send("`-bal help`");
	}

	if (!args[0].localeCompare('top')) {
		message.channel.send("`-bal top`");
	}

	if (!args[0].localeCompare('reset')) {
		message.channel.send("`-bal reset <username>`");
	}

	if (!args[0].localeCompare('add')) {
		message.channel.send("`-bal add <username");
	}

	if (!args[0].localeCompare('help')) {

	}
}