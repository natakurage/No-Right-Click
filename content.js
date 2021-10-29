console.log("楽しい右クリック禁止ライフをお楽しみください")
document.oncontextmenu = function () {
  alert("右クリックはあなた自身によって禁止されています！")
  return false
}