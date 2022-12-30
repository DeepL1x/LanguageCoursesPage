function hideSignUpPopUp(){
    const blackScreen = document.getElementsByClassName("dark-background")[0]
    blackScreen.style = "display:none;"
    const popUp = document.getElementsByClassName("sign-up-pop-up")[0]
    popUp.style="display:none;"
}
function showSignUpPopUp(){
    const blackScreen = document.getElementsByClassName("dark-background")[0]
    blackScreen.style = "display:block;"
    const popUp = document.getElementsByClassName("sign-up-pop-up")[0]
    popUp.style="display:flex;"
}
function hideNavUpPopUp(){
    const whiteScreen = document.getElementsByClassName("white-background")[0]
    whiteScreen.style = "display:none;"
    const popUp = document.getElementsByClassName("nav-pop-up")[0]
    popUp.style="display:none;"
}
function showNavPopUp(){
    const whiteScreen = document.getElementsByClassName("white-background")[0]
    whiteScreen.style = "display:block;"
    const popUp = document.getElementsByClassName("nav-pop-up")[0]
    popUp.style="display:flex;"
}
function locateMobileMenu(){
    const fixedMenu = document.getElementsByClassName("fixed-menu")[1]
    let vh = document.documentElement.clientHeight;
    fixedMenu.style("top:"+vh+"px;")
}
alert(window.outerHeight)
locateMobileMenu()