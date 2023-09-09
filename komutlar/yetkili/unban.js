module.exports = {
    name:"unban",
    code:`
    $color[Random]
    $title[İşlem başarıyla gerçekleşti.]
    $description[          
        $userTag[$noMentionMessage] kullanıcısının yasaklanması kaldırıldı.]
    $unban[$guildID;$message[1];$noMentionMessage]
    $onlyif[$isnumber[$message]!=false;Girdiğin Şey Bir ID değil.]
    $onlyIf[$noMentionMessage!=;Bir ID Belirt!]
    $onlyClientPerms[banmembers;Üyeleri Yasakla Yetkim Yok!]
    $onlyPerms[banmembers;Üyeleri Yasakla Yetkin Yok!]
$reply
    $suppressErrors
  
      
      `}
