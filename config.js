const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_25_11_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA1NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDM4LFxuICAgICAgICA3OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDY4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDYwLFxuICAgICAgICAxODksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDY1LFxuICAgICAgICA5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDkzLFxuICAgICAgICA3MCxcbiAgICAgICAgODMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI0LFxuICAgICAgICA4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDksXG4gICAgICAgIDEzMixcbiAgICAgICAgNjksXG4gICAgICAgIDU1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMixcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzUsXG4gICAgICAgIDkyLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTAsXG4gICAgICAgIDQyLFxuICAgICAgICA3NixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDc0LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDczLFxuICAgICAgICAxMjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE3LFxuICAgICAgICA0MixcbiAgICAgICAgODcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE0LFxuICAgICAgICA2NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDg1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU2LFxuICAgICAgICA0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDU4LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI0LFxuICAgICAgICA2MixcbiAgICAgICAgMTIzLFxuICAgICAgICA5NSxcbiAgICAgICAgODEsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDU4LFxuICAgICAgICA4MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzksXG4gICAgICAgIDY5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjMwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTUzLFxuICAgICAgICA1MixcbiAgICAgICAgMjE4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjEyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQzLFxuICAgICAgICA1MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDY0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDksXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ4bWJOVzk0REk5MWlKQWZwOXUxMmJRS1RnaUtvVk9tRHI0U2xQYVJXVFMwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJBOHhudjA1WVFYU1JMZmxlbTVDR253XCIsXG4gIFwicGhvbmVJZFwiOiBcIjAxZTZmZmQ4LWMyMDQtNDJlZC1hYjhmLTI2MjdlM2E3MzliM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOCxcbiAgICAgIDIwMixcbiAgICAgIDI0NyxcbiAgICAgIDE0NSxcbiAgICAgIDIxMixcbiAgICAgIDEzMyxcbiAgICAgIDEyMixcbiAgICAgIDE5OCxcbiAgICAgIDg1LFxuICAgICAgMjQzLFxuICAgICAgMTMyLFxuICAgICAgMTQ5LFxuICAgICAgMjM5LFxuICAgICAgNjgsXG4gICAgICAxNTAsXG4gICAgICA5OSxcbiAgICAgIDI3LFxuICAgICAgNjYsXG4gICAgICAxNDIsXG4gICAgICAyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODksXG4gICAgICA0MyxcbiAgICAgIDMsXG4gICAgICA3LFxuICAgICAgNDksXG4gICAgICAyMjMsXG4gICAgICAxMTcsXG4gICAgICAxNjgsXG4gICAgICAxNDYsXG4gICAgICAxMzksXG4gICAgICAyMjUsXG4gICAgICA5NCxcbiAgICAgIDI0MyxcbiAgICAgIDE3NSxcbiAgICAgIDIwNixcbiAgICAgIDIzMixcbiAgICAgIDQ4LFxuICAgICAgMTI5LFxuICAgICAgMjIzLFxuICAgICAgMTM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxCS0NGNkI0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxNzYzMzUyMDU6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjQ4NTAxNjQyMjgxNjA6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJR3N6cmtFRUpiRWxyb0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkxHVG5KUkhiZzZLNjNGUG56b3JBdGxxZ0ZWc1pyNERrc1dUK25aaGRmbWM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZ1h3VmxJODl2M0E4YVRQenR6L21QS3ZvcjdSWGdta1dWT2lYbTFEZTh3S2VJRUd3bDM5S0dPWTA1c1pQRkJSRkxZMi9ZRUlOenF6andXTDFGUlVzRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUVkxdFIzNTZRSmJ1Yy93ck9xNU1DZ3NMOUJSNjlCbS9JcVZFTnRtU2dGcjNHQnNHU0V6bTMxa0UxUFB6TFp5ZDYvRVRRRTlkVWFPUEZpbGkvQThjQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTc2MzM1MjA1OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI2MTY3MjksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJVjNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlWMy5qc29uIjogIntcImtleURhdGFcIjpcIlFMb0xQbmhlVjk0dldqbzd4SjZlRFkrdWVtVUVvaUR4a1lHbTRJTkkrU3M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE5NDU2MzA3MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMjYxNjYzODI5NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
