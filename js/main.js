$(document).ready(function () {
  $('#hash').html( window.location.hash );
});

var database_credentials = document.createElement("a");
database_credentials.href="#";
database_credentials.setAttribute("onclick", "\u0061\u006c\u0065\u0072\u0074\u0028\u0032\u0032\u0029");
var y = document.createTextNode("Clik me for a fun time.");
database_credentials.appendChild(y);
document.body.appendChild(database_credentials);

function getQueryVariable(variable) {
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return false;
}

var username = getQueryVariable('username');
if ( !!username ) $('#username').html( username );

var redirect = getQueryVariable('url');
var kontinue = document.createElement('a');
kontinue.href = redirect;
kontinue.innerText = 'Click here to continue to ' + redirect;
document.getElementById('continue').appendChild(kontinue);