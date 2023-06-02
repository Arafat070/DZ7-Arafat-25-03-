
const block = document.querySelector('.block')
const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')

let count = 1


async function fetchData() {
    try {
        const response = await  fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        const data = await response.json()
        block.innerHTML = `
             <h2>${data.title}</h2>
             <span>${data.id}</span>
             <h3>${data.completed}</h3>
        `
    }catch (e){
        console.log(e,'ERROR')
    }
}

nextBtn.onclick = () => {
    count++
    fetchData()
}

prevBtn.onclick = () => {
    count--
    fetchData()
}

fetchData()


async function fetchData2() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        console.log(data)
    }catch (e) {
        console.log(e,'ERROR')
    }
}

fetchData2()