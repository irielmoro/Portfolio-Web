const form= document.querySelector('.contacto__form');
const alertSuccess = document.querySelector('.form-alert--success');
const alertError = document.querySelector('.form-alert--error');
const alertContainer = document.querySelector('.form-alert-container');
const alertBtn = document.querySelector('#form-alert-btn');


alertBtn.addEventListener('click', ()=>{
    alertContainer.style.display = 'none';
    console.log('funciona');
});

form.addEventListener('submit', handleSubmit);

async function handleSubmit(event){
    event.preventDefault();

    const dataForm = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: dataForm,
        headers: {
            'Accept': 'appliaction/json'
        }
    });


    alertContainer.style.display = 'block';

    if (response.ok) {
        alertSuccess.classList.add('show');
        form.reset();

    } else {
        alertError.classList.add('show');
        console.log(`ERROR: Status = ${response.status} Type = ${response.type} `)

    }
   


}

