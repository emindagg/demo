window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var iframe = document.querySelector('iframe');
iframe.contentWindow.updateChart();

}

window.Script2 = function()
{
  // iframe'in ID'sini kullanarak iframe'i bulun
var iframe = document.querySelector('iframe');

// iframe'i yenilemek için src özelliğini yeniden ayarlayın
iframe.src = iframe.src;

}

};
