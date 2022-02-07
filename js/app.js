
function showTime() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var season = "AM";

    // tarrnary operator
    h = h < 10 ? "0"+h : h;
    m = m < 10 ? "0"+m : m;
    s = s < 10 ? "0"+s : s;
//  funtion for hours
if(h > 12){
    h = h - 12;
    // h = 13-12 =1
}
// function for season
if (h => 12){
season = "PM";
}
    var time = h + " : "  + m + " : "+ s + " "+ season;
      document.getElementsByTagName('h2')[0].innerHTML = time;
    setTimeout(showTime,1000);
  
}









