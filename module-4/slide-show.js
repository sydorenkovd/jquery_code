(function($){
var viewUl = $("div.view").css("overflow", "hidden").children("ul");
var imgs = viewUl.find("img");
var imgW = 400;
var imgsLen = imgs.length;
var totalImgsW = imgsLen * imgW;
var current = 1;
		$("div#show").show().find("button").on("click", function(){
			var direction = $(this).attr("id");
			var position = imgW;
			(direction == "next") ? ++current : --current;
			if(current == 0){
				current = imgsLen; //set last image
				direction = "next";
			}else if(current - 1 == imgsLen){
				current = 1; // set first image
			position = 0;
			}
			// console.log(current);
			doIt(viewUl, position, direction);
		});
		function doIt(container, position, direction){
			var sign;
			if(direction && position != 0){
				sign = (direction == "next") ? "-=" : "+=";
			}
			container.animate({
				"margin-left" : sign ? (sign+position) : position
			},
			{duration : 1500});
		}


})(jQuery);