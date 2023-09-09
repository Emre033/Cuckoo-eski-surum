
module.exports = {
    name:"eval",
    code:`
    $eval[$message]
    $reply
    $onlyForIDs[senin idn;]
    $onlyIf[$checkContains[$message;token;base64]==false;]
  
  
    `}
