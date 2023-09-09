module.exports = {
    name:"film-ara",
    code:`
    $title[1; $jsonRequest[https://api.popcat.xyz/imdb?q=$noMentionMessage;title;Hata] Filmi Hakkında Bilgiler.]
    $description[1;
Yönetmen: 
**$jsonRequest[https://api.popcat.xyz/imdb?q=$noMentionMessage;director;hata]**
Gösterime Giriş Yılı:                                                                                                                **$jsonRequest[https://api.popcat.xyz/imdb?q=$noMentionMessage;year;hata]** ($jsonRequest[https://api.popcat.xyz/imdb?q=$noMentionMessage;country;hata])
Seslendirmeler:
**$jsonRequest[https://api.popcat.xyz/imdb?q=$noMentionMessage;languages;hata]**
Film Süresi:
**$jsonRequest[https://api.popcat.xyz/imdb?q=$noMentionMessage;runtime;hata]**
Tür:
**$jsonRequest[https://api.popcat.xyz/imdb?q=$noMentionMessage;genres;hata]**
Aldığı Ödüller:
**$jsonRequest[https://api.popcat.xyz/imdb?q=$noMentionMessage;awards;hata]**
Bilet Gişesi: 
**$jsonRequest[https://api.popcat.xyz/imdb?q=$noMentionMessage;boxoffice;hata] **
IMDb Puanı:
**$jsonRequest[https://api.popcat.xyz/imdb?q=$noMentionMessage;rating;hata]**
Toplam Oy Sayısı:
**$jsonRequest[https://api.popcat.xyz/imdb?q=$noMentionMessage;votes;Hata]**
IMDb Bağlantısı:
[$jsonRequest[https://api.popcat.xyz/imdb?q=$noMentionMessage;title;hata]]($jsonRequest[https://api.popcat.xyz/imdb?q=$noMentionMessage;imdburl;hata])
    $color[Random] 
    $onlyIf[$noMentionMessage!=;Bir Film Belirt!]
    $reply
    $suppressErrors`}
