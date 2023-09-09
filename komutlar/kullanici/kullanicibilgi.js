module.exports = {
    name: "kullanıcıbilgi",
    code: `
    $description[1;
Kullanıcı Adı: $username[$mentioned[1]]
Kullanıcı ID: $mentioned[1]
Kullanıcı Etiketi: $discriminator[$mentioned[1]]
Hesap Oluşturma Tarihi: $creationDate[$mentioned[1];date]
Sunucuya Katılma Tarihi: $parseDate[$memberJoinDate[$mentioned[1];$guildID]
      $suppressErrors
    `
  }
