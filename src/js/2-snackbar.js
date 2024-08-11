import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('[name="delay"]'),

};

refs.form.addEventListener('submit', createPromise);


function createPromise(e) {
  e.preventDefault();

  const delay = refs.delay.value;
  refs.selectedStatusElement = document.querySelector('input[name="state"]:checked');
  
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (refs.selectedStatusElement.value === "fulfilled") {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(() => {
      iziToast.show({
        backgroundColor: 'green',
        messageColor: 'white',
        message: `✅ Fulfilled promise in ${delay} ms`,
        position: 'topRight',
        close: false,
      });
    })
    .catch(() => {
      iziToast.show({
        backgroundColor: 'red',
        messageColor: 'white',
        message: `❌ Rejected promise in ${delay} ms`,
        position: 'topRight',
        close: false,
      });
    });

  refs.form.reset();
}