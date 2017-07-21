const basicsList = document.querySelector('.basics-list')
const story = document.querySelector('.story-content')

const promise = fetch('https://api.github.com/users/tayloracox')
.then(response => response.json())
.then(data => {
    const name = document.createElement('li')
    const githubUrl = document.createElement('li')
    const email = document.createElement('li')
    const company = document.createElement('li')
    const url = document.createElement('li')
    const image = document.createElement('img')
    name.innerHTML = `<span class="topic">Name:</span> ${data.name}`
    githubUrl.innerHTML = `<span class="topic">Github URL:</span> <a href="${data.html_url}">${data.html_url}</a>`
    email.innerHTML = `<span class="topic">Email:</span> ${data.email}`
    company.innerHTML = `<span class="topic">Company:</span> ${data.company}`
    url.innerHTML = `<span class="topic">Website:</span> <a href="${data.blog}">${data.blog}</a>`
    image.src = data.avatar_url
    basicsList.appendChild(name)
    basicsList.appendChild(githubUrl)
    basicsList.appendChild(email)
    basicsList.appendChild(company)
    basicsList.appendChild(url)
    story.appendChild(image)
})
