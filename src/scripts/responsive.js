document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav')
    const originalLinks = document.querySelectorAll('nav a:not(#logo)')
    
    const menuBtn = document.createElement('button')
    menuBtn.className = 'menu-btn'
    menuBtn.innerHTML = '<i class="fas fa-bars"></i>'
    nav.appendChild(menuBtn)

    const navLinks = document.createElement('div')
    navLinks.className = 'nav-links'
    
    originalLinks.forEach(link => {
        navLinks.appendChild(link.cloneNode(true))
    })
    
    nav.appendChild(navLinks)

    originalLinks.forEach(link => link.remove())

    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation()
        navLinks.classList.toggle('active')
    })

    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target)) {
            navLinks.classList.remove('active')
        }
    })

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active')
        }
    })
})