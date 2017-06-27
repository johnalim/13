$(function(){


	var apiNyTimesURL = "https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=7152b67929c24328a41a1a81a021ce4a";
	var apiWaPostURL = "https://newsapi.org/v1/articles?source=the-washington-post&sortBy=top&apiKey=7152b67929c24328a41a1a81a021ce4a";

 	//console.log(apiURL);

	var titleWAPost = $("#WA-Post");
	var titleNYTimes = $("#NY-Times");




	$('#NY-feed-button').on('click', function(){

		event.preventDefault();

		titleWAPost.empty();
		titleNYTimes.empty();

		$.get(apiNyTimesURL, function(response){

			var articles = response.articles;

			for(var i= 0; i<articles.length; i++){	
				
				var articlesAuthor = response.articles[i].author;
				var articlesDescription = response.articles[i].description;
				var articlesTitle = response.articles[i].title;
				var articlesURL = response.articles[i].url;

				//console.log(i)


				var feedAuthor = $("<li>Author: " + articlesAuthor + "</li>").addClass('DESCRIPTION-NY'+i);
				var feedDescription = $("<li>Description: " + articlesDescription + "</li>").addClass('FEED-NY'+i);
				var feedTitle = $("<li>Title: " + articlesTitle + "</li><").addClass('URL-NY'+i);
				var feedURL = $('<li><a href="' + articlesURL+ '">link</a></li><br>'); 

				console.log(feedURL)
				console.log(articles)
				console.log(articlesTitle)
				console.log(articlesURL	)
				
				$("#NY-Times").append(feedAuthor);
				$(".DESCRIPTION-NY"+i).append(feedDescription);
				$(".FEED-NY"+i).append(feedTitle);
				$(".URL-NY"+i).append(feedURL);



			};

 		});

	});


	$('#WA-feed-button').on('click', function(){

		event.preventDefault();

		

		titleWAPost.empty();
		titleNYTimes.empty();

		$.get(apiWaPostURL, function(response){

			var articles = response.articles;

			for(var i= 0; i<articles.length; i++){	
				
				var articlesAuthor = response.articles[i].author;
				var articlesDescription = response.articles[i].description;
				var articlesTitle = response.articles[i].title;
				var articlesURL = response.articles[i].url;

				//console.log(i)


				var feedAuthor = $("<li>Author: " + articlesAuthor + "</li>").addClass('DESCRIPTION-Post'+i);
				var feedDescription = $("<li>Description: " + articlesDescription + "</li>").addClass('FEED-Post'+i);
				var feedTitle = $("<li>Title: " + articlesTitle + "</li><").addClass('URL-Post'+i);
				var feedURL = $('<li><a href="' + articlesURL+ '">link</a></li><br>'); 

				console.log(feedURL)
				console.log(articles)
				console.log(articlesTitle)
				console.log(articlesURL	)
				
				$("#WA-Post").append(feedAuthor);
				$(".DESCRIPTION-Post"+i).append(feedDescription);
				$(".FEED-Post"+i).append(feedTitle);
				$(".URL-Post"+i).append(feedURL);



			};

 		});

	});
})