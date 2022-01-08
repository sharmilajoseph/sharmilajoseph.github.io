


( function (window){

	 var helloSpeaker ={};
	var speakWord = "Hello";
   helloSpeaker.speak = function (string) {
  console.log(speakWord + " " +string); 
};
window.helloSpeaker= helloSpeaker;
})(window);





