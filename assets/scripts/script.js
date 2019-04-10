function displaySearchIcon(type) {
  const searchIcon = document.getElementById('search-icon')
  if(type) {
    searchIcon.style.display = 'none'
  } else {
    searchIcon.removeAttribute('style')
  }
}

function hoverFolder(element, status) {
  const elementChecked = element.getElementsByClassName('checkmark-input')[0]
  const containerChecked = element.getElementsByClassName('containerChecked')[0]
  if(!elementChecked.checked) {
    containerChecked.style.display = (status) ? 'block' : 'none'
    element.classList.remove('selected')
    return
  }
  addClassSelected(element)
}

function addClassSelected(element, aux = false) {
  if(aux) {
    element = element.parentNode.parentNode
  }
  element.classList.add('selected')
}

function changeChecked(element) {
  if(element.checked && element.getAttribute('active') == null) {
    element.checked = true
    element.setAttribute('active', '')
  } else {
    element.checked = false
    element.removeAttribute('active')
  }
}

function toggleSubMenu(parentElement, hidden = false) {
  const element = parentElement.getElementsByClassName('submenu')[0]
  if(element.style.display == 'block' || hidden) {
    element.style.display = 'none' 
    parentElement.classList.remove('active')
  } else {
    if(!hidden) {
      clearMenuLinks(parentElement);
    }
    element.style.display = 'block'
    parentElement.classList.add('active')
  }
}

function clearMenuLinks() {
  const menuLinks = document.getElementsByClassName('main-link');
  for(let i=0; i<4; i++) {
    toggleSubMenu(menuLinks[i], true)
  }
}

function changeSection(element) {
  const title = document.getElementById('title')
  const folders = document.getElementById('folders')
  const navLinks = document.getElementsByClassName('nav-link')
  Object.keys(navLinks).map(link => {
    navLinks[link].classList.remove('selected')
  })
  element.classList.add('selected')
  title.innerText = element.innerText
  if(element.innerText == 'Archivos') {
    folders.style.display = 'block'
  } else {
    folders.style.display = 'none'
  }
}