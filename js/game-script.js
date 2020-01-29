var BoxOpened = "";
				var ImgOpened = "";
				var ImgFound = 0;

				var Source = "#boxcard";

                var score = 0;
				var ImgSource = [
				  "https://cdn3.iconfinder.com/data/icons/social-media-logos-flat-colorful-1/2048/5347_-_Github-128.png",
				  "https://cdn3.iconfinder.com/data/icons/social-media-logos-flat-colorful-1/2048/5373_-_WWF-128.png",
				  "https://cdn3.iconfinder.com/data/icons/social-media-logos-flat-colorful-1/2048/5364_-_DuckDuckGo-128.png",
				  "https://cdn3.iconfinder.com/data/icons/social-media-logos-flat-colorful-1/2048/5360_-_Dzone-128.png",
				  "https://cdn3.iconfinder.com/data/icons/social-media-logos-flat-colorful-1/2048/5384_-_LiveJournal-128.png",
				  "https://cdn3.iconfinder.com/data/icons/social-media-logos-flat-colorful-1/2048/5362_-_Slack-128.png",
				  "https://cdn3.iconfinder.com/data/icons/social-media-logos-flat-colorful-1/2048/5383_-_Line-128.png",
				  "https://cdn3.iconfinder.com/data/icons/social-media-logos-flat-colorful-1/2048/5345_-_Google_Play-128.png"
				];

				function RandomFunction(MaxValue, MinValue) {
						return Math.round(Math.random() * (MaxValue - MinValue) + MinValue);
					}
					
				function ShuffleImages() {
					var ImgAll = $(Source).children();//all divs
					console.log(ImgAll);
					var ImgThis = $(Source + " div:first-child");//first div
					console.log(ImgThis);
					var ImgArr = new Array();

					for (var i = 0; i < ImgAll.length; i++) {
						ImgArr[i] = $("#" + $(ImgThis).attr("id") + ' div').css("background-image");
						ImgThis = $(ImgThis).next();
					}
					
						ImgThis = $(Source + " div:first-child");
					
					for (var z = 0; z < ImgAll.length; z++) {
					var RandomNumber = RandomFunction(0, ImgArr.length - 1);
// debugger;
						$("#" + $(ImgThis).attr("id") + ' div').css("background-image", ImgArr[RandomNumber]);//assign backgroundcolor to div neby one//#card10 div
						ImgArr.splice(RandomNumber, 1);
						ImgThis = $(ImgThis).next();
					}
				}

				function ResetGame() {
					//alert("Asd");
					ShuffleImages();
					$(Source + " div div").hide();
					$(Source + " > div").css("visibility", "visible");
					// Counter = 0;
					$("#success").remove();
					//$("#counter").html("" + Counter);
					BoxOpened = "";
					ImgOpened = "";
					ImgFound = 0;
					return false;
				}

				function OpenCard() {
					var id = $(this).attr("id");

					if ($("#" + id + " div").is(":hidden")) {
						$(Source + " div").unbind("click", OpenCard);
					
						$("#" + id + " div").slideDown('fast');

						if (ImgOpened == "") {
							BoxOpened = id;
							ImgOpened = $("#" + id + " div").css("background-image");
							setTimeout(function() {
								$(Source + " div").bind("click", OpenCard)
							}, 300);
						} else {
							CurrentOpened = $("#" + id + " div").css("background-image");
							if (ImgOpened != CurrentOpened) {
								setTimeout(function() {
									$("#" + id + " div").slideUp('fast');
									$("#" + BoxOpened + " div").slideUp('fast');
									BoxOpened = "";
									ImgOpened = "";
								}, 400);
								

							} else {
								$("#" + id + " div").parent().css("visibility", "hidden");
								$("#" + BoxOpened + " div").parent().css("visibility", "hidden");
								ImgFound++;
								BoxOpened = "";
								ImgOpened = "";
								score += 20;
							}
							setTimeout(function() {
								$(Source + " div").bind("click", OpenCard)
							}, 400);
						}
						// Counter++;
						$("#counter").html("score " + score);

						if (ImgFound == ImgSource.length) {
							$("#counter").prepend('<span id="success">You Found All Pictues With </span>');
						}
					}
				}

				$(function() {

				for (var y = 1; y < 3 ; y++) {
					$.each(ImgSource, function(i, val) {
						$(Source).append("<div id=card" + y + i + "><div style='background-image: url("+val+"); background-size: 100px 100px;'></div></div>");
					});
				}
					$(Source + " div").click(OpenCard);
					ShuffleImages();
				});