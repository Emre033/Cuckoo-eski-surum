module.exports = {
    name:"sil",
    code:`                    
    $color[Random]
        $title[1;İşlem başarıyla gerçekleşti.]
        $description[1;**$message** adet mesaj <@$authorID> tarafından silindi.]
        $clear[$message]
        $onlyif[$isnumber[$message]!=false;Girdiğin Şey Bir Rakam Değil.]
        
        $onlyif[$message>0;Girdiğin Rakam **0'dan** Küçük Olamaz.]
        
        $onlyif[$message<201; En Fazla 200 Adet Mesaj Silebilirsin.]
        $reply
        $onlyClientPerms[deletemessages;Mesajları Yönet Yetkim Bulunmuyor.]
        $onlyPerms[deletemessages;Mesajları Yönet Yetkin Bulunmuyor.]
        $suppressErrors
      `
}
