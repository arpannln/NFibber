# NFibber
Ever wonder what the Nth Fibonacci number is?
Well, wonder no more!

<a href="https://arpannln.github.io/NFibber/">Live</a>

# Features
![Info](http://res.cloudinary.com/arpannln/image/upload/v1526176302/Screen_Shot_2018-05-12_at_6.51.09_PM.png)

* Defines purpose of site
* Defines the Fibonacci sequence
* Ties in Golden Spiral

![Home](http://res.cloudinary.com/arpannln/image/upload/v1526174613/Screen_Shot_2018-05-12_at_6.23.02_PM.png)

* User is able to enter n and retrieve the nth value from the Fibonacci sequence
* User is warned about invalid ns
* Unique visual representation of the Fibonacci value is presented

```javascript
while (i <= userInput) {
     //#proprietarycode
     //these two variables adjust for Canvas's lame way of drawing circles
     //offset to adjust radius
     //scaledRotationReduction to adjust for degrees
     //for argument reference: ctx.arc(x, y, radius, startAngle, endAngle [, anticlockwise]);
     let offset = scale * (Fibholder[i] - Fibholder[i - 1]);
     let scaledRotationReduction =  i * Math.PI / 360;

     ctx.beginPath();
     ctx.strokeStyle = randomColor();
     switch ( i % 4 ) {
       case 0:
         ctx.arc(centerX, centerY - offset, scale * Fibholder[i], 0.5*Math.PI - scaledRotationReduction, 0 + scaledRotationReduction, true);
         ctx.stroke();
         break;
       case 1:
         ctx.arc(centerX - offset, centerY, scale * Fibholder[i], 2*Math.PI - scaledRotationReduction, 1.5*Math.PI + scaledRotationReduction, true);
         ctx.stroke();
         break;
       case 2:
         ctx.arc(centerX, centerY + offset, scale * Fibholder[i], 1.5*Math.PI - scaledRotationReduction, Math.PI + scaledRotationReduction, true);
         ctx.stroke();
         break;
       case 3:
         ctx.arc(centerX + offset, centerY, scale * Fibholder[i], Math.PI - scaledRotationReduction, 0.5*Math.PI + scaledRotationReduction, true);
         ctx.stroke();
         break;
     }

     i += 1;

}
```

# Initial Goals
1. (Creatively?) prompt user for n 
2. Optimally find the Nth Fibonacci number
3. Visually display the solution, with a hard number as well as a visual representation
4. Educate on what Fibonacci is and what the visual representation even means

# Common Issues 
1. Validation of User Input (scientific notation, leading zeroes, negative numbers)
     * Regex OP 
2. Scalability of code. Compute power would stop at roughly N = 1500. 
     * Addressed this issue as well as designed code such that if better hardware were to be introduced, the software is flexible enough        to enough to grow with the hardware without change.
3. SPIRALS
     * I know I am not terrible with math but there was something fishy going on with Canvas that was causing overlapping issues
     * I did reduce these to some extent but hopefully I can come up with a perfect solution in the near future

# Possible Future Features 
1. Allow user to directly interact with the visual presentation
2. Toss out my algorithm and pull data from outside sources to improve performance
3. Add Golden Spiral manipulation
