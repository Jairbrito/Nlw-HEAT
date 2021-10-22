const linksSocialMedia = {
  instagram: 'jairr_jr',
  youtube: 'Bitstv',
  github: 'Jairbrito'
}
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children.href = `https://${social}.com/${linksSocialMedia[social]}`

    alert(li.children[0].href)
  }
}

//changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url).then(response => {
    response.json().then(data => {
      userName.textContent = data.name
      Bio.textContent = data.name
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
  })
}

//getGitHubProfileInfos()
