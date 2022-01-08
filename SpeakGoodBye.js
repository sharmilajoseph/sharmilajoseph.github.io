( function (window){
	 var byeSpeaker ={};
	 var speakWord = "Good Bye";
     byeSpeaker.speak = function(string){
  console.log(speakWord + " " + string); 
};
window.byeSpeaker=byeSpeaker;
})(window);

