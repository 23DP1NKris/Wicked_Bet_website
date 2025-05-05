document.querySelector('.download-btn').addEventListener('click', () => {
    disableScroll()
  
    const modal = document.createElement('div')
    modal.style.position = 'fixed'
    modal.style.top = '0'
    modal.style.left = '0'
    modal.style.width = '100%'
    modal.style.height = '100%'
    modal.style.backgroundColor = 'rgba(0,0,0,0.7)'
    modal.style.display = 'flex'
    modal.style.justifyContent = 'center'
    modal.style.alignItems = 'center'
    modal.style.zIndex = '100'
  
    const modalContent = document.createElement('div')
    modalContent.style.backgroundColor = '#1a3a30'
    modalContent.style.padding = '2rem'
    modalContent.style.borderRadius = '10px'
    modalContent.style.textAlign = 'center'
  
    const title = document.createElement('h3')
    title.textContent = 'Choose Download Method'
    title.style.color = '#d4af37'
    title.style.marginBottom = '1.5rem'
  
    const zipBtn = document.createElement('button')
    zipBtn.textContent = 'Download ZIP Here'
    zipBtn.className = 'download-btn'
    zipBtn.style.width = '100%'
    zipBtn.style.boxSizing = 'border-box'
    zipBtn.style.marginBottom = '10px'
    zipBtn.onclick = () => {
      window.location.href = 'src/downloads/wickedbet.zip'
      modal.remove()
      enableScroll()
    }
  
    const githubBtn = document.createElement('button')
    githubBtn.textContent = 'View on GitHub'
    githubBtn.className = 'learn-btn'
    githubBtn.style.width = '100%'
    githubBtn.style.boxSizing = 'border-box'
    githubBtn.onclick = () => {
      window.open('https://github.com/23DP1NKris/Wicked_Bet', '_blank')
      modal.remove()
      enableScroll()
    }
  
    const closeBtn = document.createElement('button')
    closeBtn.textContent = '×'
    closeBtn.style.position = 'absolute'
    closeBtn.style.top = '10px'
    closeBtn.style.right = '20px'
    closeBtn.style.background = 'none'
    closeBtn.style.border = 'none'
    closeBtn.style.color = '#fff'
    closeBtn.style.fontSize = '2rem'
    closeBtn.style.cursor = 'pointer'
    closeBtn.onclick = () => {
      modal.remove()
      enableScroll()
    }
  
    modalContent.appendChild(title)
    modalContent.appendChild(zipBtn)
    modalContent.appendChild(githubBtn)
    modal.appendChild(closeBtn)
    modal.appendChild(modalContent)
    document.body.appendChild(modal)
  
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove()
        enableScroll()
      }
    })
  
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        modal.remove()
        enableScroll()
      }
    })
  })
  
  document.querySelector('.learn-btn').addEventListener('click', () => {
    const link = document.createElement('a')
    link.href = 'src/downloads/user_guide.pdf'
    link.download = 'WickedBet_UserGuide.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  })
  
  function disableScroll() {
    document.body.style.overflow = 'hidden'
    document.body.style.height = '100%'
  }
  
  function enableScroll() {
    document.body.style.overflow = ''
    document.body.style.height = ''
  }