let elResult = document.querySelector(".movies__result")
let elList = document.querySelector(".movies__list")

elResult.textContent = movies.length


const renderFilms = function(filmsArray, element){
  filmsArray.forEach(movie => {
      //CREATE
  let newItem = document.createElement('li')
  let newCard = document.createElement('div')
  let newImg = document.createElement('img')
  let newCardBody = document.createElement('div')
  let newCardTitle = document.createElement('h5')
  let newCardSection = document.createElement('div')
  let newCardYear = document.createElement('p')
  let newCardYearImg = document.createElement('img')
  let newCardRatingSection = document.createElement('div')
  let newCardRatingImg = document.createElement('img')
  let newCardRating = document.createElement('p')
  let newBtnSection = document.createElement('div')
  let newTrailer = document.createElement('button')
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
  newCardYearImg.setAttribute('class', 'card-year-img')
  newCardYear.setAttribute('class', 'card-year')
  newCardYearImg.setAttribute('src', './images/calendar.svg')
  newCardYearImg.setAttribute('width', '20px')
  newCardRatingSection.setAttribute('class', 'rating-img-section')
  newCardRatingImg.setAttribute('src', './images/star.png')
  newCardRatingImg.setAttribute('width', '20px')
  newCardRating.setAttribute('class', 'card-text')
  newBtnSection.setAttribute('class', 'btn-section')
  newTrailer.setAttribute('class', 'btn-trailer btn')
  newInfo.setAttribute('class', 'btn-infoo btn')
  newBookmark.setAttribute('class', 'btn-bookmark btn')

  //TEXT CONTENT
  newCardTitle.textContent = movie.title
  newCardYear.textContent = movie.year
  newCardRating.textContent = movie.imdbRating
  newTrailer.textContent = 'Watch trailer'
  newInfo.textContent = 'More info'
  newBookmark.textContent = 'Bookmark'

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
  newBtnSection.appendChild(newTrailer)
  newBtnSection.appendChild(newInfo)
  newBtnSection.appendChild(newBookmark)
  })
}

renderFilms(movies, elList)