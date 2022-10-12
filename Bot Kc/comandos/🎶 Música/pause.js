module.exports = {
    name: "pause",
    aliases: ["resume"],
    desc: "Sirve para pausar una canción. Usa -pause para pausar y -resume para reanudar",
    run: async (client, message, args, prefix) => {
        //comprobaciones previas
        const queue = client.distube.getQueue(message)
        if(!message.member.voice?.channel) return message.reply(`❌ **Tienes que estar en un canal de voz para ejecutar este comando!**`);
        if(message.guild.members.me.voice?.channel && message.member.voice?.channel.id != message.guild.members.me.voice?.channel.id) return message.reply(`❌ **Tienes que estar en el mismo canal de voz __QUE YO__ para ejecutar este comando!**`);
        if (!queue) return message.reply(`❌ **No hay nada en la cola para pausar**`)
        if (queue.paused) {
            queue.resume()
            return message.reply('Canciòn Reanudada')
          }
          queue.pause()
          message.reply('Canciòn pausada')
    }
}





  