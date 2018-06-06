window.onscroll = function changeNav(){
  var navBar = document.getElementById('navbar'),
        secondSection = document.getElementById('hero-text'),
        secondSectionTop = secondSection.getBoundingClientRect().top,
        navBarHeight = navBar.getBoundingClientRect().height;

  if(secondSectionTop >= navBarHeight) {
        navBar.className = ('nav__wrapper');
  } else if(secondSectionTop <= ( navBarHeight + 500 )) {
       navBar.className =  ('nav__wrapper nav__wrapper--inverted');
  }
}
