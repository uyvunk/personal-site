  var text="Hello there. My name is Vu Nguyen. It's great to see you!<p>Please click on following links to visit my Github, Wordpress, Facebook, or LinkedIn</p>";;
  var delay=50;
  var currentChar;
  var destination="greeting";
  var timer = null;

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

  function getTime() {
    var date = new Date();
    return "" + date.getHours() + ":" + date.getMinutes(); 
  }


