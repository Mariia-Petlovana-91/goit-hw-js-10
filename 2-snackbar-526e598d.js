import{i as t}from"./iziToast.min-98ae614a.js";/* empty css              */const o={form:document.querySelector(".form"),delay:document.querySelector('[name="delay"]')};o.form.addEventListener("submit",l);function l(s){s.preventDefault();const e=o.delay.value;o.selectedStatusElement=document.querySelector('input[name="state"]:checked'),new Promise((r,i)=>{setTimeout(()=>{o.selectedStatusElement.value==="fulfilled"?r(e):i(e)},e)}).then(()=>{t.show({backgroundColor:"green",messageColor:"white",message:`✅ Fulfilled promise in ${e} ms`,position:"topRight",close:!1})}).catch(()=>{t.show({backgroundColor:"red",messageColor:"white",message:`❌ Rejected promise in ${e} ms`,position:"topRight",close:!1})}),o.form.reset()}
//# sourceMappingURL=2-snackbar-526e598d.js.map
