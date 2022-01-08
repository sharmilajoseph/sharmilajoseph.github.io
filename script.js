( function (window){  
var string = ["Yaakov", "John", "jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura","Jygvt" , "Jim"];

     
    for (var i = 0; i < string.length; i++) {

    var firstletter =string[i].toLowerCase();

     if ( string[i].charAt(0)=="J" || firstletter.charAt(0)=="j") {
    	byeSpeaker.speak(string[i]);

    } else {
   	helloSpeaker.speak (string[i]);
    };

    	}

    	window.string=string;
})(window);

   
  
  
 