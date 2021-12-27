setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("currentTime").innerHTML=
  "current time : "+
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}