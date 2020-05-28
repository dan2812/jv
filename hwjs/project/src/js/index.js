import * as basicLightbox from 'basiclightbox'

const content = `
<h1>Dynamic Content</h1>
<p>You can set the content of the lightbox with JS.</p>
`


function openModal(content){
    const instance = basicLightbox.create(content)
    instance.show()
}
document.querySelector('button[data-action="contactus"]').addEventListener('click',()=> {
    openModal(content)
    console.log(77373)
})


// oooooooooooooooooooooo


const content2= `
<h1>Dynamic Content</h1>
<p>You can set the content of the lightbox with JS.</p>
`


document.querySelector('button[data-action="reservation__imgBar-button"]').addEventListener('click',()=> {
    openModal(content2)
})



//llllllllllllll


const content3= `
<h1>Dynamic Content</h1>
<p>You can set the content of the lightbox with JS.</p>
`

document.querySelector('button[data-action="discount__imgBar-button"]').addEventListener('click',()=> {
    openModal(content3)
})

//opopopo



const content4= `
<h1>Dynamic Content</h1>
<p>You can set the content of the lightbox with JS.</p>
`


document.querySelector('button[data-action="slider_button"]').addEventListener('click',()=> {
    openModal(content4)
})

