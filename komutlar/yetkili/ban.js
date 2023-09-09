
module.exports = {
    name:"ban",
    code:`
    $color[Random]
    $title[1;İşlem başarıyla gerçekleşti.]
    $description[1;
        $userTag[$mentioned[1]] kullanıcısı $noMentionMessage sebebiyle sunucudan yasaklandı.
    ]
      $color[Random]
    $footer[1;$username[$authorID] kullandı.]
    $ban[$guildID;$mentioned[1];7;$noMentionMessage]
    $onlyClientPerms[banmembers;Üyeleri Yasakla Yetkim Yok!]
    $onlyPerms[banmembers;Üyeleri Yasakla Yetkin Yok!]
    $onlyIf[$mentioned[1]!=$authorID;Kendini Yasaklayamazsın!]
    $onlyIf[$noMentionMessage!=;Bir Sebep ve Kullanıcı Belirt!]
    $onlyIf[$mentioned[1]!=undefined;Bir kullanıcı belirt!]
    $suppressErrors
$reply
      
      `}
