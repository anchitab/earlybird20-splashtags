$.ajax({
    url: 'http://localhost:3000/replies'
  }).done( function(data) {

    for (i = 0; i < data.length; i++) { 
        var replyTweet = data[i];
    
        $("#timeline__posts").append(`
            <a href="${replyTweet.replyUrl}">
                <div class="timeline__tweet--wrapper">
                    <div class="timeline__tweet--img">
                        <img class="timeline__img" src="${replyTweet.img}" alt="">
                    </div>
                    <div class="timeline__tweet-content">
                        <div class="timeline__tweet-details">
                            <h6 class="tweet__user--styles">${replyTweet.username}</h6>
                            <img class="tweet__user--styles" src="../shared-assets/certified.png" width=20 height=20>
                            <h6 class="tweet__text--styles">${replyTweet.handle}</h6>
                            <h6 class="tweet__text--styles mr-auto">· ${replyTweet.time} min</h6>
                            <h6 class="tweet__text--styles tweet__settings">v</h6>
                        </div>
                        <div class="tweet__text-content">
                            <p class="tweet__text-content--styles">${replyTweet.content}<span class="splashtag splashtag-${replyTweet.specialHashtag}"> #${replyTweet.specialHashtag}</span></p> 
                        </div>
                        <div class="tweet__bottom-bar">
                            <img src="../shared-assets/tweet-bottom.png" alt="">
                        </div>
                    </div>
                </div>
            </a>
        `); 
    }   
  });
