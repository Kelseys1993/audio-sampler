


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
	}


	
	function playAudioA() {
		newAudioA.play()
	}
	function playAudioB() {
		newAudioB.play()
	}
	function playAudioC() {
		newAudioC.play()
	}

	function playAudioD() {
		newAudioD.play()
	}

	function playAudioE() {
		newAudioE.play()
	}

