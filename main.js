const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')

const welkom = JSON.parse(fs.readFileSync('./lib/welkom.json'))
const { banner, start, success } = require('./lib/functions')
const moment = require("moment-timezone")
const { color } = require('./lib/color')
const { getBuffer } = require('./lib/functions')
require('./index.js')
nocache('./index.js', module => console.log(`${module} is now updated!`))
const ftroli = {
	key : {
                          participant : '994407170763@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 2021,
                            status: 1,
                            surface : 1,
                            message: 'Will-Awikwok', 
                            orderTitle: 'Anu',
                            thumbnail: fs.readFileSync('./stik/fake.jpeg'), //Gambarnye
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
const starts = async (hexa = new WAConnection()) => {
    hexa.logger.level = 'warn'
    hexa.version = [2, 2140, 12]
    hexa.browserDescription = [ 'WillGans', 'Edge', '3.0' ]
    console.log(banner.string)
    hexa.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan bang'))
    })

    fs.existsSync('./session.json') && hexa.loadAuthInfo('./session.json')
    hexa.on('connecting', () => {
        start('2', 'Connecting...')
    })
    hexa.on('open', () => {
        success('2', 'Connected')
    })
    await hexa.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(hexa.base64EncodedAuthInfo(), null, '\t'))
hexa.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			mem = anu.participants[0]
			console.log(anu)
            try {
            pp_user = await hexa.getProfilePicture(mem)
            } catch (e) {
            pp_user = 'https://i.ibb.co/dgKGycm/9e16b2c1350ddfbb1c5daa5cf2a258f6.jpg0'
            }
            if (anu.action == 'add' && !mem.includes(hexa.user.jid)) {
            mdata = await hexa.groupMetadata(anu.jid)
            memeg = mdata.participants.length
        	num = anu.participants[0]
            v = hexa.contacts[num] || { notify: num.replace(/@.+/, '') }
            anu_user = v.vname || v.notify || ""
            awikwok = moment().tz('Asia/Jakarta').format("HH:mm")
            teks = `Welcome in ${mdata.subject}, @${num.split('@')[0]}\nSemoga Betah Okkey`
            fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(mdata.id ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${anu_user}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${anu_user.notify},;;;\nFN:${anu_user.notify},\nitem1.TEL;waid=${num.split('@')[0]}:${num.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
	        buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome?nama=${encodeURI(anu_user)}&descriminator=${awikwok}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&pp=${pp_user}&bg=${pickRandom(["https://telegra.ph/file/bab68c03d43f893c66d0a.jpg","https://telegra.ph/file/2a9ab8db93a88f502b37f.jpg","https://i.pinimg.com/236x/3c/03/c1/3c03c1a091ac6b6800ec9c16989ef796.jpg","https://i.pinimg.com/236x/d0/85/d7/d085d73ca48e144cc129779127efe039--anime-hot-manga-anime.jpg","https://i.pinimg.com/originals/08/49/21/08492107aba5784c15326c86e93eede7.jpg","https://i.pinimg.com/originals/81/c2/68/81c268fe66221cf4262b8596acce22bd.jpg"])}`)
		hexa.sendMessage(mdata.id, buff, MessageType.image, {quoted: fkon, caption: teks, contextInfo: {"mentionedJid": [num]}})
		}
            if (anu.action == 'remove' && !mem.includes(hexa.user.jid)) {
                mdata = await hexa.groupMetadata(anu.jid)
            	num = anu.participants[0]
                v = hexa.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || ""
                memeg = mdata.participants.length
                awikwok = moment().tz('Asia/Jakarta').format("HH:mm")
                out = `Sayonara @${num.split('@')[0]} ðŸ‘‹ \n GoodBye Jan Balik Lagi Jirr/nAwikwok`
                fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(mdata.id ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${anu_user}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${anu_user.notify},;;;\nFN:${anu_user.notify},\nitem1.TEL;waid=${num.split('@')[0]}:${num.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
                buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye?nama=${encodeURI(anu_user)}&descriminator=${awikwok}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&pp=${pp_user}&bg=${pickRandom(["https://telegra.ph/file/bab68c03d43f893c66d0a.jpg","https://telegra.ph/file/2a9ab8db93a88f502b37f.jpg","https://i.pinimg.com/236x/3c/03/c1/3c03c1a091ac6b6800ec9c16989ef796.jpg","https://i.pinimg.com/236x/d0/85/d7/d085d73ca48e144cc129779127efe039--anime-hot-manga-anime.jpg","https://i.pinimg.com/originals/08/49/21/08492107aba5784c15326c86e93eede7.jpg","https://i.pinimg.com/originals/81/c2/68/81c268fe66221cf4262b8596acce22bd.jpg"])}`)
                hexa.sendMessage(mdata.id, buff, MessageType.image, {quoted: fkon, caption: out, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'promote') {
			const mdata = await hexa.groupMetadata(anu.jid)
			num = anu.participants[0]
			try {
					ppimg = await hexa.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let buff = await getBuffer(ppimg)
			teks = `𝙋𝙍𝙊𝙈𝙊𝙏𝙀 𝘿𝙀𝙏𝙀𝘾𝙏
			
\`\`\`Nomor :\`\`\` ${num.replace('@s.whatsapp.net', '')}

\`\`\`User :\`\`\` @${num.split('@')[0]}

\`\`\`Group :\`\`\` ${mdata.subject}`
			hexa.sendMessage(mdata.id, buff, MessageType.image, {caption : teks, contextInfo: {mentionedJid: [num]}, quoted : mek})
		} else if (anu.action == 'demote') {
			num = anu.participants[0]
			const mdata = await hexa.groupMetadata(anu.jid)
			try {
					ppimg = await hexa.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let buff = await getBuffer(ppimg)
			teks = `𝘿𝙀𝙈𝙊𝙏𝙀 𝘿𝙀𝙏𝙀𝘾𝙏
			
\`\`\`Nomor :\`\`\` ${num.replace('@s.whatsapp.net', '')}

\`\`\`User :\`\`\` @${num.split('@')[0]}

\`\`\`Group :\`\`\` ${mdata.subject}`
			hexa.sendMessage(mdata.id, buff, MessageType.image, {caption:teks,contextInfo: {mentionedJid: [num]}, quoted: ftroli})
		}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
})

    hexa.on('chat-update', async (message) => {
        require('./index.js')(hexa, message)
    })
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
