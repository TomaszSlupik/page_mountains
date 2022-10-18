const menubars = document.querySelector('.menubars')
const containernavmobile = document.querySelector('.containernavmobile')
const menubarstext = document.querySelector('.menubarstext')
const loginbox = document.querySelector('.loginbox')
const iconloginback = document.querySelector('.iconloginback')
const btnsign = document.querySelector('.btnsign')


const showmenu = () => {
    containernavmobile.classList.toggle('active')
    containernavmobile.classList.add('slide-in-tl')

    setTimeout(() => {
        menubarstext.classList.toggle('menubarstextflex')
        menubarstext.classList.add('text-focus-in')
    }, 150);
}

menubars.addEventListener('click', showmenu)


const shwoform = () => {
    loginbox.classList.toggle('loginboxblock')
}

btnsign.addEventListener('click', shwoform)



iconloginback.addEventListener('click', closeform = () => {
    loginbox.classList.remove('loginboxblock')
})



