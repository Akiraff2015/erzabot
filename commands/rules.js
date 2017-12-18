/*
*  Created by Akiraff
*  MIT License
*  File: rules.js
*/
const Discord = require('discord.js');

// addField @param2 cannot exceed 1024 characters.
module.exports = function(message, client) {
	let rules = ":bulb: Do not spam in the chats and no advertising!\n\n:bulb: Keep drama out of the server, PM a staff member if someone is bothering you instead of fuelling the fire. Keep in mind that many like to sarcastically insult each other, or joke around.\n\n:bulb: Please avoid using inappropriate emoticons in your name and/or using symbols.\n\n:bulb: No soundboards or voice changing software. Do not play music unless in a Private Lounge with people who are okay with it.\n\n:bulb: Control your microphone; please use push-to-talk when asked.\n\n:bulb: Know your audience, don't talk about uncomfortable or sexual things in a public channel full of people you don't know.\n\n:bulb: English only unless everyone in the channel speaks the language or everyone in the channel is okay with it.\n\n:bulb: Discrimination against race, gender, or LGBT+ is **NOT ALLOWED** - If you want to be a dick, keep it elsewhere.\n\n:bulb: Swearing IS ALLOWED however, **__TO A CERTAIN EXTENT__**";
	
	let embed = new Discord.RichEmbed()
		.addField("SavagePvP Rules", rules)
		.setColor(16711724);

	message.channel.send(embed);
}