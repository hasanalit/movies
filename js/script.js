let elOverlay = document.querySelector(".overlay")
// let elHidden = document.querySelector(".hidden")
let elResult = document.querySelector(".movies__result")
let elList = document.querySelector(".movies__list")
let elInfo = document.querySelector(".info")
let elTrilerLink = "https://www.youtube.com/watch?v="

elResult.textContent = movies.length


const renderFilms = function(filmsArray, element, elInfoElement){
  filmsArray.forEach(movie => {
      //CREATE
  let newItem = document.createElement('li')
  let newCard = document.createElement('div')
  let newImg = document.createElement('img')
  let newCardBody = document.createElement('div')
  let newCardTitle = document.createElement('h5')
  let newCardSection = document.createElement('div')
  let newCardYear = document.createElement('p')
  let newCardYearImg = document.createElement('i')
  let newCardRatingSection = document.createElement('div')
  let newCardRatingImg = document.createElement('img')
  let newCardRating = document.createElement('p')
  let newBtnSection = document.createElement('div')
  let newTrailerLink = document.createElement('a')
  let newInfo = document.createElement('button')
  let newBookmark = document.createElement('button')


  //SET ATTRIBUTE
  newItem.setAttribute('class', 'movies__item')
  newCard.setAttribute('class', 'card')
  newImg.setAttribute('class', 'card-img-top')
  newImg.setAttribute('src', movie.smallThumbnail)
  newCardBody.setAttribute('class', 'card-body')
  newCardTitle.setAttribute('class', 'card-title')
  newCardSection.setAttribute('class', 'card-section')
  newCardYearImg.setAttribute('class', 'card-year-img fas fa-calendar')
  newCardYear.setAttribute('class', 'card-year')
  newCardYearImg.setAttribute('src', './images/calendar.svg')
  newCardYearImg.setAttribute('width', '20px')
  newCardRatingSection.setAttribute('class', 'rating-img-section')
  newCardRatingImg.setAttribute('src', './images/star.png')
  newCardRatingImg.setAttribute('width', '20px')
  newCardRating.setAttribute('class', 'card-text')
  newBtnSection.setAttribute('class', 'btn-section')
  newTrailerLink.setAttribute('class', 'btn-trailer btn')
  newTrailerLink.setAttribute('href', elTrilerLink + movie.youtubeId)
  newInfo.setAttribute('class', 'btn-infoo btn')
  newBookmark.setAttribute('class', 'btn-bookmark btn')


  newCardYearImg.style.color = '#fff'
  newCardTitle.style.color = '#fff'

  //TEXT CONTENT
  newCardTitle.textContent = movie.title
  newCardYear.textContent = movie.year
  newCardRating.textContent = movie.imdbRating
  newTrailerLink.textContent = 'Watch trailer'

  newInfo.textContent = 'More info'
  newBookmark.textContent = 'Bookmark'

  newCardRating.style.color = '#fff'
  newCardYear.style.color = '#fff'

  elInfo.classList.add('hidden')
  elOverlay.classList.add('hidden-overlay')

  // BTN
  newInfo.onclick = function(){
    elInfo.classList.remove('hidden')
    elOverlay.classList.remove('hidden-overlay')
    elInfo.innerHTML = null


    let newHeroSection = document.createElement('div')
    let newCloseBtn = document.createElement('i')
    let newBigImg = document.createElement('img')
    let newTitleSection = document.createElement('div')
    let newInfoTitle = document.createElement('h5')
    let newTrailerTwoLink = document.createElement('a')
    let newSummary = document.createElement('p')
    let newLanguage = document.createElement('p')

    newSummary.style.color = "#fff"
    newLanguage.style.color = "#fff"

    newHeroSection.setAttribute('class', 'info-section')
    newCloseBtn.setAttribute('class', 'close-btn')
    newCloseBtn.setAttribute('class', 'close-btn fas fa-times')
    newTitleSection.setAttribute('class', 'title-section')
    newBigImg.setAttribute('class', 'big-img')
    newInfoTitle.setAttribute('class', 'info-title')
    newBigImg.setAttribute('src', movie.smallThumbnail)
    newTrailerTwoLink.setAttribute('class', 'btn-twotrailer btn')
    newTrailerTwoLink.setAttribute('href', elTrilerLink + movie.youtubeId)
    newSummary.setAttribute('class', 'summary')

    newInfoTitle.textContent = movie.title
    newSummary.textContent = movie.summary
    newLanguage.textContent = movie.language
    newTrailerTwoLink.textContent = 'Watch trailer'

    newCloseBtn.addEventListener('click', function(){
        elOverlay.classList.add('hidden-overlay')
        elInfo.classList.add('hidden')
    })

    elInfoElement.appendChild(newCloseBtn)
    elInfoElement.appendChild(newHeroSection)
    newHeroSection.appendChild(newBigImg)
    newHeroSection.appendChild(newTitleSection)
    newTitleSection.appendChild(newInfoTitle)
    newTitleSection.appendChild(newLanguage)
    newTitleSection.appendChild(newTrailerTwoLink)
    elInfoElement.appendChild(newSummary)
  }



  //APPEND
  element.appendChild(newItem)
  newItem.appendChild(newCard)
  newCard.appendChild(newImg)
  newCard.appendChild(newCardBody)
  newCardBody.appendChild(newCardTitle)
  newCardBody.appendChild(newCardSection)
  newCardSection.appendChild(newCardYearImg)
  newCardSection.appendChild(newCardYear)
  newCardBody.appendChild(newCardRatingSection)
  newCardRatingSection.appendChild(newCardRatingImg)
  newCardRatingSection.appendChild(newCardRating)
  newCardBody.appendChild(newBtnSection)
  newBtnSection.appendChild(newTrailerLink)
  newBtnSection.appendChild(newInfo)
  newBtnSection.appendChild(newBookmark)
  })
}

renderFilms(movies, elList, elInfo)

elOverlay.addEventListener('click', function(evt){
  evt.preventDefault();
  elOverlay.classList.add('hidden-overlay')
  elInfo.classList.add('hidden')
})


document.addEventListener('keydown', function(evt){
  if(evt.key === "Escape"){
    elOverlay.classList.add('hidden-overlay')
    elInfo.classList.add('hidden')
  }
})