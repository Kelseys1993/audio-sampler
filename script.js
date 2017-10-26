
	
	(function(){

init();

		var createAudio = function(){
			window.newAudioA = new Audio();
			newAudioA.src = 'sounds/drums.wav';

			window.newAudioB = new Audio();
			newAudioB.src = 'sounds/guitar.wav';

			window.newAudioC = new Audio();
			newAudioC.src = 'sounds/saxaphone.wav';

			window.newAudioD = new Audio();
			newAudioD.src = 'sounds/trumpet.mp3';


			window.newAudioE = new Audio();
			newAudioE.src = 'sounds/cymbal.mp3';

			window.newAudioF = new Audio();
			newAudioF.src = 'sounds/piano.wav';

			// Lewis
			window.newAudioG = new Audio();
			newAudioG.src = 'sounds/harmonica.wav';
			// Lewis
			window.newAudioH = new Audio();
			newAudioH.src = 'sounds/bass.mp3';
			// Lewis
			window.newAudioI = new Audio();
			newAudioI.src = 'sounds/violin.wav';


		}();
	
	
	function init(){
		var playButton = document.getElementById('drums');
		playButton.addEventListener('click', playAudioA, false);

		var playButton = document.getElementById('guitar');
		playButton.addEventListener('click', playAudioB, false);

		var playButton = document.getElementById('sax');
		playButton.addEventListener('click', playAudioC, false);

		var playButton = document.getElementById('trumpet');
		playButton.addEventListener('click', playAudioD, false);


		var playButton = document.getElementById('cymbal');
		playButton.addEventListener('click', playAudioE, false);

		var playButton = document.getElementById('piano');
		playButton.addEventListener('click', playAudioF, false);

		// Lewis
		var playButton = document.getElementById('harmonica');
		playButton.addEventListener('click', playAudioG, false);
		// Lewis
		var playButton = document.getElementById('bass');
		playButton.addEventListener('click', playAudioH, false);
		// Lewis
		var playButton = document.getElementById('violin');
		playButton.addEventListener('click', playAudioI, false);
	}


	
	function playAudioA() {
		if (newAudioA.paused){
				newAudioA.play()

			} else {
				newAudioA.pause()
			}
	}
	function playAudioB() {
	if (newAudioB.paused){
				newAudioB.play()

			} else {
				newAudioB.pause()
			}
	}
	function playAudioC() {
	if (newAudioC.paused){
				newAudioC.play()

			} else {
				newAudioC.pause()
			}
	}

	function playAudioD() {
	if (newAudioD.paused){
				newAudioD.play()

			} else {
				newAudioD.pause()
			}
	}
	function playAudioE() {
	if (newAudioE.paused){
				newAudioE.play()

			} else {
				newAudioE.pause()
			}
	}
		function playAudioF() {
	if(newAudioF.paused){
				newAudioF.play()
			} else {
				newAudioF.pause()
			}
	}

	// Lewis
	function playAudioG() {
		if(newAudioG.paused){
				newAudioG.play()
			} else {
				newAudioG.pause()
			}
	}
	// Lewis
	function playAudioH() {
	if(newAudioH.paused){
				newAudioH.play()
			} else {
				newAudioH.pause()
			}
	}
	// Lewis
	function playAudioI() {
	if(newAudioI.paused){
				newAudioI.play()
			} else {
				newAudioI.pause()
			}
	}
console.log();
})()