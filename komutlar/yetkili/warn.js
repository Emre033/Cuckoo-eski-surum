
module.exports = {
    name:"uyar",
    code:`
    $color[Random]
    $description[1;
   $userTag[$mentioned[1]] kullanıcısı $noMentionMessage sebebinden dolayı uyarıldı!]
    $onlyIf[$mentioned[1]!=$authorID;Kendini Uyararamazsın]
    $onlyIf[$noMentionMessage!=;Bir Sebep Belirt!]
    $onlyIf[$mentioned[1]!=undefined;Bir kullanıcı belirt!]
    $onlyPerms[kickmembers;Üyeleri At Yetkin Yok.]
  
  $reply
  $suppressErrors
      
      `}
