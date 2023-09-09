module.exports = {
    name: "nuke",
    code: ` 
   $deleteChannels[$channelID]
   $cloneChannel[$channelID;$channelName]
  $onlyClientPerms[managechannels;Kanalları Yönet Yetkim Bulunmuyor.] 
  $onlyPerms[managechannels;Kanalları Yönet Yetkin Bulunmuyor.]
  $color[Random]
  `}
