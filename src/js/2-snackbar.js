import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
	form:document.querySelector('.form')
}

 refs.form.addEventListener('input', getsFieldValue);
 refs.form.addEventListener('change', selectStatusValue);
 refs.form.addEventListener('submit', submitForm);

 

function getsFieldValue (e){

}


function selectStatusValue(e){

}

function submitForm(e){

}

// iziToast.show({
// 	backgroundColor: 'green',
// 	messageColor: 'white',
// 	message: `✅ Fulfilled promise in ${delay}ms`,
// 	position: 'topRight',
// 	close: false,
//     });
    
    
// iziToast.show({
// 	backgroundColor: 'red',
// 	messageColor: 'white',
// 	message: `❌ Rejected promise in ${delay}ms`,
// 	position: 'topRight',
// 	close: false,
//     });