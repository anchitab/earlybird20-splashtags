function setAnimations() {
	$(".pride-flag__color--red").animate({width: "100%"}, 250); 
	$(".pride-flag__color--orange").animate({width: "100%"}, 300); 
	$(".pride-flag__color--yellow").animate({width: "100%"}, 350); 
	$(".pride-flag__color--green").animate({width: "100%"}, 400); 
	$(".pride-flag__color--blue").animate({width: "100%"}, 450); 
	$(".pride-flag__color--purple").animate({width: "100%"}, 500); 
}

function fadeOutFlag(callback) {
	$(".pride-flag__color--red").animate({opacity: 0}, 1250); 
	$(".pride-flag__color--orange").animate({opacity: 0}, 1050); 
	$(".pride-flag__color--yellow").animate({opacity: 0}, 850); 
	$(".pride-flag__color--green").animate({opacity: 0}, 650); 
	$(".pride-flag__color--blue").animate({opacity: 0}, 450);  
	$(".pride-flag__color--purple").animate({opacity: 0}, 300);
	setTimeout(function() {
		callback();
	}, 1250);
}

function removeFlagLayer() {
	$(".pride-flag__layer").css("height", "0");
}

$(document).ready(function() {
	setAnimations(); 	
	setTimeout(function() {
		fadeOutFlag(function() {
			removeFlagLayer();
		});
	}	
	,1000);	
});

function replayAnimation() {
	location.reload();
}

$.ajax({
    url: '/replies'
  }).done( function(data) {
    // DO STUFF WITH data
    for (i = 0; i < data.length; i++) {
    	var reply_tweet = data[i];
    	
	  	var authorDiv = document.getElementById("reply-author-"+i);
      	var handleDiv = document.getElementById("reply-handle-"+i);
	  	var textDiv = document.getElementById("reply-text-"+i);
  		
      	authorDiv.innerHTML = "<div>"+reply_tweet.author+"</div>";
      	handleDiv.innerHTML = "<div>"+reply_tweet.handle+"</div>";
		textDiv.innerHTML = "<div>"+reply_tweet.text+"</div>";
    }   
  });
