var canvas = new fabric.Canvas("canvas1");
// Create canvas variable

//Set initial positions for ball and hole images.
ball_x=0;
ball_y=0;
hole_x=800;
hole_y=400;
block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img){
		holeobj = Img;
		holeobj.scaleToWidth(50);
		holeobj.scaleToHeight(50);
		holeobj.set ({
	top: hole_y,
	left: hole_x
	});
	canvas.add(holeobj);
	});



	// write code to Upload golf image on the canvas
	new_image();

}

function new_image()
{
	// write code to Upload ball image on canvas
	fabric.Image.fromURL("ball.png", function(Img){
		ball = Img;
		ball.scaleToWidth(50);
		ball.scaleToHeight(50);
		ball.set ({
	top: ball_y,
	left: ball_x
	});
	canvas.add(ball);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */

if ((ball_x == hole_x)&&(hole_y == ball_y)) {
canvas.remove(ball);
document.getElementById("hd3").innerHTML = "You Have Hit The Goal!!!";
document.getElementById("canvas1").style.borderColor="red";

}


	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
}
	function up()
	{
		// Write a code to move ball upward.
		if (ball_y>0) {
			ball_y = ball_y - block_image_height;
			console.log("block image height =" + block_image_height);
			console.log("When Down arrow key is pressed, X = " + ball_x + ", Y =" + ball_y );
			canvas.remove(ball);
			new_image();
		 }
	
	}

	function down()
	{
		 // Write a code to move ball downward.
		 if (ball_y<700) {
			ball_y = ball_y + block_image_height;
			console.log("block image height =" + block_image_height);
			console.log("When Down arrow key is pressed, X = " + ball_x + ", Y =" + ball_y );
			canvas.remove(ball);
			new_image();
		 }
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x = ball_x - block_image_width;
			console.log("block image width =" + block_image_width);
			console.log("When Down arrow key is pressed, X = " + ball_x + ", Y =" + ball_y );
			canvas.remove(ball);
			new_image();
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=850)
		{
			// Write a code to move ball right side.
			ball_x = ball_x + block_image_width;
			console.log("block image width =" + block_image_width);
			console.log("When Down arrow key is pressed, X = " + ball_x + ", Y =" + ball_y );
			canvas.remove(ball);
			new_image();
		}
	}
		
