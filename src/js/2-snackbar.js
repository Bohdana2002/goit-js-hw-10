import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', event => {
  event.preventDefault();
  const delay = Number(refs.form.elements.delay.value);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (refs.form.elements.state.value === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
  promise
    .then(delay => {
      console.log(`✅ Fulfilled promise in ${delay}ms `);
      iziToast.success({
        message: `Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(delay => {
      console.log(`❌ Rejected promise in ${delay}ms`);
      iziToast.error({
        message: `Rejected promise in ${delay}ms`,
      });
    });
});
