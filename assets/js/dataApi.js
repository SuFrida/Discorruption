const button = document.getElementById('button')

// button.addEventListener('click', () => {
//     axios({
//         method: 'GET',
//         url: 'https://api.datos.gob.mx/v1/compranet'
//     }).then(res => {
//         const list = document.getElementById('list')
//         const fragment = document.createDocumentFragment()
//         for (const userInfo of res.data) {
//             const listItem = document.createElement('LI')
//             listItem.textContent = `${userInfo.id} - ${userInfo.name}`
//             fragment.appendChild(listItem)
//         }
//         list.appendChild(fragment)
//     }).catch(err => console.log(err))
// })
const getName = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return res.data.results
        }, 1500)
    })
}
const sayHello = async () => {
    const name = await getName()
    return `Hello ${_id}`
}

button.addEventListener('click', () => {

    axios({
        method: 'GET',
        url: 'https://api.datos.gob.mx/v1/compranet'
    }).then(res => {
        sayHello().then(res => console.log(res))
    }).catch(err => console.log(err))
})