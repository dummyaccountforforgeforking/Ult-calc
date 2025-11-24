function diceCount() {
  var D20 = parseInt(document.getElementById("D20").value);
  var constMod = parseInt(document.getElementById("constMod").value);
  var strengthMod = parseInt(document.getElementById("strengthMod").value);
  var dexMod = parseInt(document.getElementById("dexMod").value);
  var charMod = parseInt(document.getElementById("charMod").value);
  var wisMod = parseInt(document.getElementById("wisMod").value);
  var intMod = parseInt(document.getElementById("intMod").value);
  var diceNum = document.getElementById("diceNum");

  diceNum.innerText = toString(((D20 * 3)/2 + constMod + strengthMod + dexMod + charMod + wisMod + intMod) * 0.75)

}
