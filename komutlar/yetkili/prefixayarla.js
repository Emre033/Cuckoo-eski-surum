module.exports=({
    name:"setprefix",
    aliases:["prefix","prefix-ayarla"],
    code:`
    $onlyPerms[administrator;:x:Yönetici yetkiniz bulunmuyor!]
    $setGuildVar[prefix;$message[1]]
    $title[İşlem başarıyla gerçekleşti]
    $description[1;Bu sunucu için olan prefixim $message[1] olarak ayarlandı.]
    $onlyIf[$message[1]!=;Lütfen yeni prefixi giriniz.]
   $reply
    `
    })
