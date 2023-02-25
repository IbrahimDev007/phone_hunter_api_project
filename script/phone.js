const loadphone = async () => {
    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`
    const res = await fetch(url);
    const data = await res.json();
    displaPhone(data.data);
}
loadphone()

const displaPhone = (data) => {
    console.log(data);
    const phoneContainer = document.getElementById('phone-container')
    data.forEach(element => {
        const { image, phone_name } = element;
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('col');
        contentDiv.innerHTML = `
 <div class="card m-2">
     <img src="${image}" class="card-img-top" alt="..." />
     <div class="card-body">
         <h5 class="card-title">${phone_name}</h5>
         <p class="card-text">
             This is a longer card with supporting text below as a
             natural lead-in to additional content. This content is a
             little bit longer.
         </p>
     </div>
 </div>`
        phoneContainer.appendChild(contentDiv);
    });

}

document.getElementById('btn-search').addEventListener('click', async ()=> {
    const value=document.getElementById('search-phone').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${value}`
    const res = await fetch(url);
    const data = await res.json();
   document.getElementById('phone-container').innerHTML=``
    displaPhone(data.data);
    
})