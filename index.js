const scriptURL = 'https://script.google.com/macros/s/AKfycbxdIDuOLgNgPR6_JDT5hqbIkb2SLKaV6qm73UoBPHGMyN7yDjIe_RtLIL6EtuiYnAL8/exec'
 const form = document.forms['form']

// form.addEventListener('submit', e =>{
//     e.preventDefault()
//     fetch(scriptURL, {method: 'POST', body: new FormData(form)})
//     .then(response => alert("Your scan is submitted successfully!"))
//     .then(() => {window.location.reload();})
//     .catch(error => console.error('Error!', error.message))
// })

function message(){
    var id = document.getElementById('employeeID');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(id.value === ''){
        danger.style.display = 'block';
    }
    else{
        setTimeout(() => {
            id.value = '';   
        }, 2000);

        success.style.display = 'block';
    }


    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 2000);

}