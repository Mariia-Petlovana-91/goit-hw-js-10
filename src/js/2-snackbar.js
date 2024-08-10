import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('[name="delay"]'),
  statusRatio: document.querySelector('.form__inputContainer'),
};

let inputDelay;
let inputChoice;

refs.form.addEventListener('submit', createPromise);
refs.delay.addEventListener('input', (e) => {
  inputDelay = e.target.value;
});
refs.statusRatio.addEventListener('change', (e) => {
  inputChoice = e.target.value;
});

function createPromise(e) {
  e.preventDefault();

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (inputChoice === 'fulfilled') {
        resolve();
      } else {
        reject();
      }
    }, inputDelay);
  });

  promise
    .then(() => {
      iziToast.show({
        backgroundColor: 'green',
        messageColor: 'white',
        message: `✅ Fulfilled promise in ${inputDelay} ms`,
        position: 'topRight',
        close: false,
      });
    })
    .catch(() => {
      iziToast.show({
        backgroundColor: 'red',
        messageColor: 'white',
        message: `❌ Rejected promise in ${inputDelay} ms`,
        position: 'topRight',
        close: false,
      });
    })
    .finally(() => {
	refs.form.reset();
      inputDelay = null;
      inputChoice = null;
    });
}
    
