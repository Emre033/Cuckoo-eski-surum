//AŞAGİYA ELLEME! 
// BU ALTYAPIYI İZİNSİZ PAYLAŞMAK YASAKTIR

const { AoiClient, LoadCommands } = require("aoi.js"); // Elleme

const bot = new AoiClient({
    token: "", // " İçine Bot Tokenini Gir
    prefix: "$getGuildVar[prefix]", // " İçine Prefixini Gir
    intents: ["Guilds", "GuildMessages", "MessageContent","GuildMembers"], // İntentler
    events: ["onMessage", "onInteractionCreate",  "onChannelDelete",
    "onChannelUpdate",
    "onChannelCreate","onMemberUpdate","onUserUpdate"], // Eventler
    database: {
        type: "aoi.db",
        db: require("aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});

const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./komutlar/") // Komutları Yükler
// Mainde kod çalıştırmak isterseniz örnek kod
bot.command({
name: "ping",
code: `
$description[1;
Bot Gecikmesi: $ping 
Mesaj Gecikmesi: $messagePing
Veritabanı Gecikmesi: $databasePing]
`
})

// Değiskenler
bot.variables ({

prefix:"c!",


})                    


