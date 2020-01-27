# How to ake the lightbox work


## 1. Start by making sure you have a script tag to ensure you are linking main.js and SCSS as well

		- EX: <script src="dist/js/main.js"></script>

		- EX: <link rel="stylesheet" href="dist/css/main.css">

## 2. Add proper Mark-Up in HTML

Make sure you have required meta tags and include proper indentation.  

## 3. Checkout Javascript

What we're doing is making a lightbox. So when you click on an image, it appears bigger, but then you can exit it after you're finished viewing. Start by finding the image links in the HTML using querySelector and giving it a variable name of lightboxLinks.

## 4. Make the images clickable 

Do this by using addEventListener function to the new variable lightboxLinks.

## 5. A place for the image

Create a div with a name box and appendChild the box in the document's body. 

## 6. Create img element and append to whiteBox  

## 7. Create a variable for the larger version of the image selected 

Find the image using *this* and the SetAttribute.

## 8. Create an overlay for the background
