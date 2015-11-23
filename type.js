(function(){
  "use strict";

  var text="Hello there. Please click on following links to visit my Github and Wordpress page :)";
  var delay=50;
  var currentChar;
  var destination="greeting";
  var timer = null;
  window.onload = function() {
    startTyping();
  };

  function startTyping()
  {
    for(var i = 1; i <= text.length; i++){
        (function(i){
            setTimeout(function(){
                    currentChar = i;
                    if (document.getElementById)
                    {
                      var dest=document.getElementById(destination);
                      if (dest)
                      {
                        if(currentChar < text.length){
                          dest.innerHTML=text.substr(0, currentChar)+"|";
                        } else if (currentChar == text.length){
                           dest.innerHTML=text.substr(0, currentChar);
                        } else {
                          return;
                        }
                      }
                    }
            }, delay * i);
        }(i));
    }
  }

  function type(arg)
  {
    currentChar = arg;
    if (document.getElementById)
    {
      var dest=document.getElementById(destination);
      if (dest)
      {
        if (currentChar > text.length){
          return;
        } else {
          dest.innerHTML=text.substr(0, currentChar);
        }
      }
    }
  }

}());


