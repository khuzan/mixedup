// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function ($routeProvider) {
	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl: 'pages/home.html',
			controller: 'mainController'
		})

		// route for the music page
		.when('/playmusic', {
			templateUrl: 'pages/playmusic.html',
			controller: 'playMusicController'
		});
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function ($scope, $rootScope) {
	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';

	$scope.About = function () {
		window.location = '#about';
	}

	$scope.img_headphone = 'src/img/headphone.jpg';
	$scope.img_android_peeking = 'src/img/android-logo-peeking.png';
});


scotchApp.controller('playMusicController', function ($scope, $rootScope, $timeout, $compile) {
	$scope.img_source = 'src/img/android.png';
	// Animation

	$scope.fadeInClass = true;

	$scope.StartAnimation = function () {
		const element = document.querySelector('.level-transition');
		element.classList.add('animated', 'flipInY', 'slow')

		element.addEventListener('animationend', function () {
			element.classList.remove('slow', 'flipInY');
			element.classList.add('animated', 'pulse')

			element.addEventListener('animationend', function () {
				element.classList.add('animated', 'zoomOut')

			});
		});

	}

	$scope.RemoveAnimation = function () {
		const element = document.querySelector('.level-transition');
		element.classList.remove('animated', 'flipInY', 'zoomOut');
	}

	$scope.GameOver = function () {
		const element = document.querySelector('.game-over');
		element.classList.add('animated', 'bounceInDown');

		element.addEventListener('animationend', function () {
			element.classList.remove('animated', 'zoomOut');
		});
	}

	$scope.TotalScoreInSummary = function () {
		const element = document.querySelector('#total_score');
		element.classList.add('animated', 'jackInTheBox');
	}


	$scope.StartAnimation();

	var music = [
		[
			['src/audio/80s/Queen Another One Bites The Dust .mp3', 'Another one bites the Dust', "POP"],
			['src/audio/80s/Prince purple rain lyrics .mp3', 'Purple Rain', "R&B"],
			['src/audio/80s/Nena - 99 Luftballons .mp3', '99 Red Ballons', "POP BAND"],
			['src/audio/80s/Bon Jovi - Livin On A Prayer .mp3', 'Livin on a Prayer', "ROCK"],
			['src/audio/80s/Long Cool Woman in a Black Dress - The Hollies .mp3', 'Long cool woman in a black Dress', "CLASSIC ROCK"],
			['src/audio/80s/Paano - GARY VALENCIANO .mp3', 'Paano', "OPM"]
		]
		,
		[
			['src/audio/90s/Boyz II Men - End Of The Road.mp3', 'End of the Road', 'POP'],
			['src/audio/90s/Tony! Toni! Toné! - Feels Good.mp3', 'Feels Good', 'R&B'],
			['src/audio/90s/Counting Crows Mr_ Jones.mp3', 'Mr. Jones', 'POP BAND'],
			['src/audio/90s/Nirvana - Smells Like Teen Spirit.mp3', 'Smells Like Teen Spirit', 'ROCK'],
			['src/audio/90s/Midnight Oil - Beds Are Burning.mp3', 'Beds Are Burning', 'CLASSIC ROCK'],
			['src/audio/90s/Rivermaya - Elesi.mp3', 'Elesi', 'OPM']
		],
		[
			['src/audio/2000s/U2 - Beautiful Day.mp3', 'Beautiful Day', 'POP'],
			['src/audio/2000s/Mario - Let Me Love You.mp3', 'Let Me Love You', 'R&B'],
			['src/audio/2000s/Nickelback - How You Remind Me.mp3', 'How You Remind Me', 'POP BAND'],
			['src/audio/2000s/Bon Jovi - Its My Life.mp3', 'Its My Life', 'ROCK'],
			['src/audio/2000s/Fall Out Boy - Thnks fr th Mmrs.mp3', 'Thanks for the Memories', 'CLASSIC ROCK'],
			['src/audio/2000s/6 Cyclemind - Sandalan.mp3', 'Sandalan', 'OPM']
		],
		[
			['src/audio/2010s/Gotye - Somebody That I Used To Know (feat_ Kimbra) - official video.mp3', 'Somebody That I Used To Know', 'POP'],
			['src/audio/2010s/Chris Brown - Deuces ft_ Tyga  Kevin McCall.mp3', 'Deuces', 'R&B'],
			['src/audio/2010s/Maroon 5 - Moves Like Jagger ft_ Christina Aguilera.mp3', 'Moves Like Jagger', 'POP BAND'],
			['src/audio/2010s/MACKLEMORE  RYAN LEWIS - THRIFT SHOP FEAT_ WANZ (OFFICIAL VIDEO).mp3', 'Thrift Shop', 'ROCK'],
			['src/audio/2010s/Alice In Chains - Your Decision.mp3', 'Your Decision', 'CLASSIC ROCK'],
			['src/audio/2010s/Silent Sanctuary - Summer Song.mp3', 'Summer Song', 'OPM']
		],
		[
			['src/audio/2019s/Panic! At The Disco High Hopes.mp3', 'High Hopes', 'POP'],
			['src/audio/2019s/Khalid with John Mayer - Outta My Head.mp3', 'Outta My Head', 'R&B'],
			['src/audio/2019s/The 1975 - Sincerity Is Scary.mp3', 'Sincerity Is Scary', 'POP BAND'],
			['src/audio/2019s/Imagine Dragons - Natural.mp3', 'Natural', 'ROCK'],
			['src/audio/2019s/5SOS - Killer Queen.mp3', 'Killer Queen', 'CLASSIC ROCK'],
			['src/audio/2019s/Kahit Ayaw Mo Na - This Band.mp3', 'Kahit Ayaw Mo Na', 'OPM']
		]
	]
	$scope.choices = [
		[
			['Every Morning', 'Killer Queen', 'Another one bites the Dust', 'Whoomp'],
			['Purple Rain', 'Never Too Much', 'When can i see You', 'Return of the Mack'],
			['Too Close', 'I Swear', '99 Red Ballons', 'With or Without You',],
			['November Rain', 'Livin on a Prayer', 'The Final Countdown', 'Everlong'],
			['The Old Man Down The Road', 'Main in the Box', 'The show must go On', 'Long cool woman in a black Dress'],
			['Kailan', 'Salamat', 'Paano', 'Ikaw Ang Lahat Sa Akin']
		],
		[
			['End of the Road', 'Water Runs Dry', 'No Scrubs', 'Loser'],
			['Feels Good', 'Just Kickin It', 'This is how we do It', 'No Diggity'],
			['Semi-Charmed Life', 'Mr. Jones', 'Connection', 'Never ever'],
			['Enter Sandman', 'Smells Like Teen Spirit', 'Vasoline', 'What i Got'],
			['Fire your Guns', 'Hard to Handle', 'Beds Are Burning', 'Life in the Fast Lane'],
			['Kisapmata', 'Harana', 'Elesi', 'Himala']
		],
		[
			['Beautiful Day', 'Viva La Vida', 'Cry me a River', 'I knew i loved You'],
			['U remind Me', 'Into you', 'Let Me Love You', 'U Remind Me',],
			['Turn Off the Light', 'Whenever Wherever', 'In The End', 'How You Remind Me'],
			['Mass Romantic', 'Too Bad', 'She hates Me', 'Its My Life'],
			['Thanks for the Memories', 'American Idiot', 'I disappear', 'In the End'],
			['Sandalan', 'Stars', 'Jeepney', 'Bitiw']
		],
		[
			['Somebody That I Used To Know', 'Someone Like You', 'Hey Soul Sister', 'Airplanes'],
			['Spotlight', 'It kills Me', 'Deuces', 'Champagne Life'],
			['Blurred Lines', 'Moves Like Jagger', 'Animal', 'Misery'],
			['Your Decision', 'World so Cold', 'Thrift Shop', 'Rude'],
			['World on Fire', 'Your Decision', 'American Slang', 'Diamond Eyes'],
			['Summer Song', 'Akin Ka Na Lang', 'Old friend', 'Hintay']
		],
		[
			['High Hopes', 'Let Me Down Slowly', 'Without Me', 'Only Human'],
			['Grateful', 'No Guidance', 'OTW', 'Outta My Head'],
			['Sincerity Is Scary', 'The Sound', 'Love like That', 'Playground'],
			['Blue On Black', 'Natural', 'Out for Blood', 'Leviathan'],
			['Killer Queen', 'Bohemian Rhapsody', 'Wouldnt You Rather', 'The Promise'],
			['Hindi Na Nga', 'Kahit Ayaw Mo Na', 'Kung Di Rin Lang Ikaw', 'Tagpuan']
		]
	];
	$scope.myObj = {
		"width": "100%"
	}


	$scope.CountLevelScore = function () {
		$scope.bgBlur = true;
		$scope.musicTotalList = 30;
		$scope.items = 6;
		$scope.summary_lvl = [];
		$scope.totalScore = [];
		// $scope.score_lvl = [4, 6,3,5,1]; // score per level
		const score_lvl = $scope.score_lvl;
		var sth = 0;

		$scope.ScorePerLevel = function () {
			$scope.countDown = 0;
			$scope.summary_lvl.push(['LEVEL', sth + 1]);

			var count = 0;
			var interval = setInterval(function () {
				$scope.countDown++;
				$scope.$apply();

				if ($scope.countDown <= score_lvl[sth]) {
					$scope.totalScore[sth] = $scope.countDown;
				}
				count++;
				if (count == 7) {
					clearInterval(interval);
					sth++;
					if (sth < music.length) {
						$scope.ScorePerLevel();
					} else {
						angular.element(document.getElementById('summary')).append
							($compile("<div class='center-align' id='total_score'><h3 style='margin:0;'>TOTAL SCORE</h3><p>" + $scope.final_score + " out of " + $scope.musicTotalList + "</p></div>")($scope));

						angular.element(document.getElementById('summary')).append
							($compile("<h4 class='center-align animated fadeIn delay-3s'><a href='#/' class='waves-effect waves-light amber darken-4 btn-large'>PLAY AGAIN</a></h4>")($scope));

						$scope.TotalScoreInSummary();
					}
				}
			}, 200);
		}
		$scope.ScorePerLevel();
		//total scores of levels
		score_lvl.reduce(myFunc);
		function myFunc(total, num) {
			return $scope.final_score = total + num;
		}
	}

	// $scope.summary = true;
	// $scope.CountLevelScore();

	$scope.fuckingMusic = 0;
	$scope.track = 0;
	$scope.lvl = 0;
	$scope.score = 0;
	$scope.star = 3;
	$scope.score_lvl = [];
	$scope.current_level = $scope.lvl + 1;

	$scope.div_text = "LEVEL " + $scope.current_level;

	$scope.total_stars = [];
	for (var i = 0; i < $scope.star; i++) {
		$scope.total_stars.push(i);
	}

	$scope.options = $scope.choices[$scope.lvl][$scope.track];
	$scope.correctAns = music[$scope.lvl][$scope.track][1];






	$scope.audioSetup = function () {
		//proceed next lvl
		try {
			if ($scope.track == music[$scope.lvl].length) {
				$scope.score_lvl[$scope.lvl] = $scope.score;
				$scope.fuckingMusic++;

				if ($scope.fuckingMusic != music.length) {
					$scope.lvl++;
					$scope.track = 0;
					$scope.score = 0;
					$scope.current_level = $scope.lvl + 1;
					$scope.div_text = "LEVEL " + $scope.current_level;
					$scope.RemoveAnimation();
					$scope.StartAnimation();
				} else {
					$scope.summary = true;
					$scope.CountLevelScore();
					$scope.disableBtn = true;
				}


			}

			if ($scope.track < music[$scope.lvl].length) {
				$scope.soundtrack = music[$scope.lvl][$scope.track][0];
				$scope.options = $scope.choices[$scope.lvl][$scope.track];
				$scope.audio = new Audio(music[$scope.lvl][$scope.track][0]);
				$scope.correctAns = music[$scope.lvl][$scope.track][1];
			} else {
				console.log("TAMA NAsad");
			}
		}
		catch (err) {
			console.log(err);
			// $scope.summary = true;
			// $scope.CountLevelScore();
			// $scope.disableBtn = true;
			// console.log("STOP THE FUCKING GAME YOU HOE!");
		}


	}

	$scope.audioSetup();

	$scope.changeBtn = true;
	$scope.playAudio = function (changeBtn) {
		// var startTime = 30;
		// var endTime = 35;
		// console.log(changeBtn);
		// $scope.pulse = true;
		if (changeBtn) {
			$scope.changeBtn = false;

			if ($scope.track < music[$scope.lvl].length) {
				$scope.audioSetup();

				// $scope.audio.currentTime = 30;
				$scope.audio.play();
				$scope.pulseClass = true;
				//Added sound wavejs
				var context = new AudioContext();
				var src = context.createMediaElementSource($scope.audio);
				var analyser = context.createAnalyser();

				var canvas = document.getElementById("canvas");
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
				var ctx = canvas.getContext("2d");

				src.connect(analyser);
				analyser.connect(context.destination);

				analyser.fftSize = 256;

				var bufferLength = analyser.frequencyBinCount;

				var dataArray = new Uint8Array(bufferLength);

				var WIDTH = canvas.width;
				var HEIGHT = canvas.height;

				var barWidth = (WIDTH / bufferLength) * 2.5;
				var barHeight;
				var x = 0;

				function renderFrame() {
					requestAnimationFrame(renderFrame);

					x = 0;

					analyser.getByteFrequencyData(dataArray);

					// ctx.fillStyle = "#0e45a2";
					// ctx.fillStyle = "rgba(0, 0, 200, 0)";
					// ctx.fillRect(0, 0, WIDTH, HEIGHT);
					ctx.clearRect(0, 0, canvas.width, canvas.height);
					for (var i = 0; i < bufferLength; i++) {
						barHeight = dataArray[i];

						var r = barHeight + (25 * (i / bufferLength));
						var g = 250 * (i / bufferLength);
						var b = 50;

						ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
						ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

						x += barWidth + 1;
					}
				}

				$scope.audio.play();
				renderFrame();

				// setInterval(function () {
				// 	if ($scope.audio.currentTime > 35) {
				// 		$scope.audio.load();
				// 		$scope.changeBtn = true;
				// 		$scope.pulseClass = false;
				// 	}
				// 	// console.log(audio.currentTime);
				// }, 10);
				// var x = setInterval(function () {
				// 	$scope.audio.currentTime--;
				// 	$scope.$apply();

				// 	// if ($scope.z <= 10) {
				// 	// 	console.log('z:', $scope.z);
				// 	// 	clearInterval(x);
				// 	// }else{
				// 	// 	clearInterval(x);
				// 	// }
				// 	console.log('im here:', $scope.audio.currentTime);

				// 	if ($scope.audio.currentTime == 0) {
				// 		clearInterval(x);
				// 	}
				// }, 200);

			} else {
				console.log("TAMA NA OY");
			}

		} else {
			$scope.changeBtn = true;
			$scope.pulseClass = false;
			$scope.audio.pause();
		}


	}

	$scope.chooseAns = function (ans) {

		$scope.pulseClass = false;
		$scope.changeBtn = true;
		$scope.audio.load(); //stop soundtrack if player choose an answer

		$scope.bounceClass = false;
		$scope.fadeInClass = false;
		$scope.jelloClass = false;

		if (ans == $scope.correctAns) {
			$scope.score++;
			$scope.star = $scope.star + 1;
			if ($scope.star > 3) {
				$scope.star = 3;
			}
			$scope.bounceClass = true;
			$scope.correct = true;
			$scope.error = false;
			$scope.jelloClass = false;
			console.log("Youre correct bitch");
		} else {
			$scope.star = $scope.star - 1;
			$scope.correct = false;
			$scope.error = true;
			$scope.bounceClass = false;
			$scope.jelloClass = true;
			console.log("WRONG BITCH WRONG!");
		}

		$scope.total_stars = [];
		for (var i = 0; i < $scope.star; i++) {
			$scope.total_stars.push(i);
		}



		if ($scope.star <= 0) {
			$scope.disableBtn = true;
			$scope.gameover = true;
			$scope.bgBlur = true;
			$scope.GameOver();
			console.log("WALA NAKA POINTS");
		} else {
			if ($scope.track < music[$scope.lvl].length) {
				$timeout(function () {
					$scope.correct = false;
					$scope.error = false;
					$scope.track++;
					$scope.audioSetup();

				}, 2000);
			} else {
				console.log("TAMA NA");
			}
		}
	}

});

