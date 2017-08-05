
var my_image = document.getElementById("main_image");

var my_array = ["wp-content/uploads/photos/america H1B visa.jpg","wp-content/uploads/photos/exam-table.jpg","wp-content/uploads/photos/iit wall.jpg", 
          "wp-content/uploads/photos/internship.jpg","wp-content/uploads/photos/on-target.jpg","wp-content/uploads/photos/women laptop.jpg"];
		  
var image_index = 0;


function change_image() {
     my_image.setAttribute("src", my_array[image_index]);
	 image_index++;
     if (image_index >= my_array.length){
        image_index = 0;	 }
}

var intervalHandler = setInterval(change_image, 3000);

my_image.onclick = function() {
    clearInterval(intervalHandler);
	}		  
		  
