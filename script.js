document.querySelector('.switcher-btn').onclick = () => {
    document.getElementById('color-switcher').classList.toggle('active')
}
let switcher = document.querySelector('.switcher-btn')
let colors = document.querySelectorAll('.colors')

colors.forEach(color => {
    color.addEventListener('click', () =>{
        let dataColor = color.getAttribute('data-color')
        document.querySelector(':root').style.setProperty('--main-color', dataColor)
        
    })
})