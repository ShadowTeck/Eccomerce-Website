const url = "/api/v1/product"
const fileFormDOM = document.querySelector('.file-form');

const nameInput = document.querySelector('#name')
const priceInput = document.querySelector('#price')
const imageInput = document.querySelector("#image")

const container = document.querySelector('.container');
const fileForm = document.querySelector('.file-form')
let imageValue;

fileForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nameValue = nameInput.value
    const priceValue = priceInput.value
    try {
        const product = {name: nameValue, price: priceValue, image: imageValue}

        await axios.post(url, product)
        fetchProducts();
    } catch (err) {
        console.log(err);
    }
})

imageInput.addEventListener('change', async (e) => {
    const imageFile = e.target.files[0]
    console.log(imageFile);
    const formData = new FormData()
    formData.append("image", imageFile)
    //console.log([...formData.keys()]);
    try {
        const {
            data: {
                image: {
                    src
                }
            }
        } = await axios.post(`${url}/uploads`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        imageValue = src
    } catch(err){
        imageValue = null;
        console.log(err);
    }
})

async function fetchProducts() {
    try {
        const {
            data
        } = await axios.get(url);
        console.log(data)
        const tempProducts = products.map((each) => {
            return `<article class="product"><img src="${each.image}" alt="${each.name}" class="img"/><footer><p>${each.name}</p><span>${each.price}</span></footer></article>`
        }).join(""); 
        container.innerHTML = tempProducts
    }
    catch (error) {
        console.log(error);
    }
}

fetchProducts();