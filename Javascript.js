let index = 1;
slides(index)
const text = document.getElementById('h1Text')

function increment(n) {
   slides(index+=n)
}

function slides(n) {
  const slideShow = document.getElementsByClassName('slides')
  if(n > slideShow.length){
    index = 1}
  if(n < 1){
    index = slideShow.length
  }
  for (let i = 0; i < slideShow.length; i++) {
    slideShow[i].style.display = 'none'}
    slideShow [index -1].style.display = 'block'
}