// stolen from tilde.club’s ~gschueler


var tildeautolink=function(text){
  var pattern=/(^|[\s\n]|<br\/?>)(~[\w_\/\.]+)/gi;
  return text.replace(pattern, "$1<a href='http://totallynuclear.club/$2'>$2</a>");
};
window.onload=(function() {
    var tags=['p','li'] ;//add more here
    for (var t = tags.length - 1; t >= 0; t--) {
        var els = document.getElementsByTagName(tags[t]);
        for(i = 0;i < els.length; i++) {
          els[i].innerHTML = tildeautolink(els[i].innerHTML);
        }
    }
});
