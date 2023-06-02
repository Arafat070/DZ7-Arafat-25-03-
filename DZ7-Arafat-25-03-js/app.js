async function getNews() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const news = await response.json();
        return news;
    } catch (error) {console.error(error);}
}
async function renderNews() {
    const news = await getNews();
    const container = document.querySelector('.container')
    for (let i = 0; i < 100; i++) {
        const card = document.createElement('div')
        card.classList.add('card')
        const image = document.createElement('img')
        image.src = 'https://picsum.photos/300/200'
        image.alt = 'Изображение новости'
        const title = document.createElement('h2')
        title.textContent = news[i].title
        const description = document.createElement('p')
        description.textContent = news[i].body
        card.appendChild(image)
        card.appendChild(title)
        card.appendChild(description)
        container.appendChild(card)
    }
}
renderNews();