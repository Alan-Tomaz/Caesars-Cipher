function rot13(str) {
  let newStr = "";
  let pattern = /[A-Za-z]/
  let strCode;
  let code;
  for(let i = 0; i < str.length; i++) {
if(pattern.test(str[i]) == true) {
  strCode = str.toUpperCase().charCodeAt(i);
  strCode += 13;
  if(strCode > 90) {
    code = strCode - 90;
    strCode = 64 + code;
  }
  newStr += String.fromCharCode(strCode);
}
else {
newStr += str[i];
}
  }
  console.log("Z".charCodeAt())
  console.log(newStr)
  return newStr;
}

rot13("SERR PBQR PNZC");
