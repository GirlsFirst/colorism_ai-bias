pictures = ["./carousel_images/getting_ids.jpg", "./carousel_images/audible_studios.png", "./carousel_images/bri_questions.jpg", "./carousel_images/coding_is_fun.jpg", "./carousel_images/love_puzzles.jpg", "./carousel_images/tech_day.png", "./carousel_images/walking-in.jpg", "./carousel_images/brianna_smiling.JPG", "./carousel_images/bri_typing.JPG", "./carousel_images/jennah_typing.JPG", "./carousel_images/jennah_typing2.JPG"]

function lastPic() {
  var getImage = document.getElementById("image");
  var imgSrc = image.getAttribute("src");
  var imgIndex = pictures.indexOf(imgSrc);

  if(imgIndex === 0){
    imgIndex = pictures.length - 1;
  } else {
    imgIndex -= 1;
  }

  imgSrc = pictures[imgIndex];
  image.src = imgSrc;
}

function nextPic() {
  var getImage = document.getElementById("image");
  var imgSrc = image.getAttribute("src");
  var imgIndex = pictures.indexOf(imgSrc);

  if(imgIndex === pictures.length - 1){
    imgIndex = 0;
  } else {
    imgIndex += 1;
  }

  imgSrc = pictures[imgIndex];
  image.src = imgSrc;
}
