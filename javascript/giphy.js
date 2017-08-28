
       // Everything inside it will load as soon as the DOM 
       //is loaded and before the page contents are loaded.
  $(document).ready(function(){

    var api_key = "dc6zaTOxFJmzC&limit";
    var animalZoo;  
		var animals = [ 'cat', 'dog', 'bird', 'horse', 'cow', 'fox'];
		console.log(animals);
 
      // this will loop thru animals array 
     
        for (var i=0; i<animals.length; i++){
         	var newButton = $('<button>');
          newButton.addClass('animals-button');
          newButton.attr('data-ani', animals[i]);
          newButton.text(animals[i]);

          $("#myGif").append(newButton);

         }

         $('.animals-button').on('click', function(){

           // this code interprated as .text add text on this which 
           // is refered #animal-button. then  accessing a data using
           // data attribut 'ani'
          var animalZoo=$('<div class="animals zoo-animals">')
             .text($(this).data('ani'));
                // appending the animalZoo variable to the element with an id of myGif
           $("#myGif").append(animalZoo);
             console.log(animalZoo);
        // });

           var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ animalZoo+
                   "&api_key=dc6zaTOxFJmzC&limit=10";
                   
              $.ajax({url:queryURL,method:"GET" }) 
                 .done(function(response){
                  for(var i=0; i<response.data.length;i++){
                    var animalDiv = $('<div>');
                       var p = $('<p>').text("rating: "+response.data[i].rating);
                         var animalImage = $('<img>');
                           animalImage.attr('src',response.data[i].images.fixed_height.url);

                             animalDiv.prepend(p);
                             animalDiv.prepend(animalImage);
                              $("#gifsGoHere").prepend(animalDiv);
                  };
                  // cache: false;
           });
           // $('#searchButton').click(function() {
           //      $("#gifsGoHere").add(animalZoo);
           //        console.log(animalZoo)
           //  }); 
 
       $("animalZoo").on("click", function() {
      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
      var state = $(this).attr("data-state");
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
       }
    });
 });
  
});  
		

  

		
                    
                    // //Starting an array of results in the results variable
                    // var results = response.data;

                    //  // this only effect if the photo has an approperiate rating
                    // if =(results[i].rating!=="r"&&results[i].rating!=="pg-13"){
                    //      // storing the result item
                    // 	var rating = results[i].rating;
                    // }

			          // $('#GIFArea').prepend("<p>Rating: "+response.data[i].rating+ "</p>");
			          // $('#GIFArea').prepend("<img src='"+ response.data[i].images.downsized.url+"'>");
			   // }

		// 	})
		 	
		// });

		 
	