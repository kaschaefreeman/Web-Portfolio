/* Class the members of each slideshow group with different CSS classes */
let slideId = ["flashcardSlides", "librarySlides", "decoderSlides"];
//declare empty array to store which number slide each slideshow is on
const slideIndex = [];
//for each slideshow class mark the slideshow item as 1 and show first slide for each slideshow
slideId.forEach((item,index) => {
  slideIndex.push(1)
  showSlides(1,index)
})
//on next slide push, increase picture number by 1
function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

//display slides
function showSlides(n, no) {
  //get number of div with className of slideshow
  let x = document.getElementsByClassName(slideId[no]);
  //if the picture number set is greater than number of divs set picture index to 1
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  //if picture set is less than number of divs, return last slide
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  //loop through divs and hide them
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  //display div with set className at set index as block
  x[slideIndex[no] - 1].style.display = "block";
}
