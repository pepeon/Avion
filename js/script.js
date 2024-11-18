const notice = document.querySelector('.notice')
const stepperEl = document.querySelector('.stepper')

if (notice){
    const noticeCloseEl = document.querySelector('.notice__close')
    noticeCloseEl.addEventListener('click', ()=>{

        notice.classList.add('notice--hidden');
    })
}

if (stepperEl) {
    const stepperInputEl = stepperEl.querySelector('.stepper__input'),
          stepperBtnMinusEl = stepperEl.querySelector('.stepper__btn--minus'),
          stepperBtnPlusEl = stepperEl.querySelector('.stepper__btn--plus');
        

    const stepperMin = stepperInputEl.getAttribute('min'),
          stepperMax = stepperInputEl.getAttribute('max');

    let count = Number(stepperInputEl.value);

    stepperInputEl.addEventListener('input', () => {
        if (stepperInputEl.value <= +stepperMin) {
            stepperInputEl.value = stepperMin
            count = stepperMin
            stepperBtnMinusEl.classList.add('stepper__btn--disabled');
            stepperBtnPlusEl.classList.remove('stepper__btn--disabled')
        }
        if (stepperInputEl.value >= +stepperMax) {
            
            stepperInputEl.value = stepperMax
            count = stepperMax
            stepperBtnPlusEl.classList.add('stepper__btn--disabled');
            stepperBtnMinusEl.classList.remove('stepper__btn--disabled');
        }
    })

    stepperBtnPlusEl.addEventListener('click', () => {
        
        if (stepperMax > count) {
            stepperBtnMinusEl.classList.remove('stepper__btn--disabled')
            stepperBtnPlusEl.classList.remove('stepper__btn--disabled')
            stepperInputEl.value = ++count

        } 
        if (count == stepperMax) {
            stepperBtnPlusEl.classList.add('stepper__btn--disabled')
        }
   
    })
    stepperBtnMinusEl.addEventListener('click', () => {
        if (stepperMin < count) {
            stepperBtnPlusEl.classList.remove('stepper__btn--disabled')
            stepperBtnMinusEl.classList.remove('stepper__btn--disabled')
            count--
            stepperInputEl.value = count

        }
        if (count == stepperMin) {
            stepperBtnMinusEl.classList.add('stepper__btn--disabled')
        }
   
    })
}