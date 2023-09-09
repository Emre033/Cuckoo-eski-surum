module.exports = {
    name:"kick",
    code:`
   
    $color[Random]   
    $title[1;İşlem başarıyla gerçekleşti.]     
     $description[1;
        $userTag[$mentioned[1]] kullanıcısı $noMentionMessage sebebiyle sunucudan atıldı.

     ]
     $kick[$guildID;$mentioned[1];$noMentionMessage]
    $onlyIf[$mentioned[1]!=$authorID; Kendini Atamazsın!]
    $onlyIf[$noMentionMessage!=;Bir Sebep ve Kullanıcı Belirt!]
    $onlyIf[$mentioned[1]!=undefined;Bir kullanıcı belirt!]
    $onlyClientPerms[kickmembers;Üyeleri At Yetkim Yok!]
    $onlyPerms[kickmembers;Üyeleri At Yetkin Yok!]
    $reply
$suppressErrors

      
      `}
