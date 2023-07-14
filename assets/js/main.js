console.log('init project')

const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

navMenu.addEventListener('click', ({ target }) => {
  if (
    target.classList.contains('nav__icon') ||
    target.classList.contains('nav__link')
  ) {
    navMenu.classList.remove('show-menu')
  }
})

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show')
    }
  })
}

let options = {
  threshold: [0.5],
}
let observer = new IntersectionObserver(onEntry, options)
let elements = document.querySelectorAll('.fade-animation')

for (let elm of elements) {
  observer.observe(elm)
}
