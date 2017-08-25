



<script type="text/javascript">

		var animals = [ 'cat', 'dog', 'bird', 'horse', 'cow'];
		//var queryURLBase = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authkey;


		// authorization key
        // var api_key = "dc6zaTOxFJmzC&limit";


        // adding click event listener 
		$('button').on('click', function(){

			$('#gifsGoHere').click().animate();

			var myGif= $(this).data("animals");

			var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ myGif+
			    "&api_key=dc6zaTOxFJmzC&limit=10";
			     //console.log(queryU
 
            
		$.ajax({url:queryURL,method:"GET" }) 
		     .done(function(response){
		        // collecting data from Giphy API
		        for(var i=0; i<response.data.length;i++){
		        	var animalDiv = $('<div>');
		        	var p = $('<p>').text("rating: "+response.data[i].rating);
		        	var animalImage = $('<img>');
		        	animalImage.attr('src',response.data[i].images.fixed_height.url);

		        	animalDiv.prepend(p);
		        	animalDiv.prepend(animalImage);
		        	$('#gifsGoHere').prepend(animalDiv);
                    
                    // //Starting an array of results in the results variable
                    // var results = response.data;

                    //  // this only effect if the photo has an approperiate rating
                    // if =(results[i].rating!=="r"&&results[i].rating!=="pg-13"){
                    //      // storing the result item
                    // 	var rating = results[i].rating;
                    // }

			          // $('#GIFArea').prepend("<p>Rating: "+response.data[i].rating+ "</p>");
			          // $('#GIFArea').prepend("<img src='"+ response.data[i].images.downsized.url+"'>");
			   }

			})
		 	
		});

		   
		 </script>