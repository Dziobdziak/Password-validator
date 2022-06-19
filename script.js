const hidePass = document.querySelector('.hidePass')
const visiblePass = document.querySelector('.visiblePass')
const condition1 = document.querySelector('.condition1')
const condition2 = document.querySelector('.condition2')
const condition3 = document.querySelector('.condition3')
const condition4 = document.querySelector('.condition4')
const condition5 = document.querySelector('.condition5')
const lettersCondition = /[a-z]/i; //Warunek dotyczący małych liter
const bigLettersCondition = /[A-Z]/; //Warunek dotyczący wielkich liter
const numbersCondition = /[0-9]/;  //Warunek dotyczący liczb
const specialSignsCondition = /[!@#$%^&*()]/ //Warunek dotyczący znaków specjalnych
const finalInfo = document.querySelector('.finalText')
const minimalValueLength = 10 //Minimalna długość hasła



const showingPasswordInBox = () => {
        //Pokzaywanie wpisanego hasła
        visiblePass.textContent = `Twoje hasło to: ${hidePass.value}`

        //Sprawdzanie długości hasła
        if(hidePass.value.length <= minimalValueLength){

            condition1.style.color = "red"

        }else if(hidePass.value.length > minimalValueLength){

            condition1.style.color = "lime"
        }

        // Sprawdzanie czy hasło zawiera małe litery
        if(hidePass.value.match(lettersCondition)){
            condition2.style.color = "lime"
        }else{
            condition2.style.color = "red"
        }

        //Sprawdzanie czy hasło zawiera wielkie litery
        if(hidePass.value.match(bigLettersCondition)){
            condition3.style.color = "lime"
        }else{
            condition3.style.color = "red"
        }

        //Sprawdzanie czy hasło zawiera cyfry
        if(hidePass.value.match(numbersCondition)){
            condition4.style.color = "lime"
        }else{
            condition4.style.color = "red"
        }

        // Sprawdzanie czy hasło zawiera znaki specjalne
        if(hidePass.value.match(specialSignsCondition)){
            condition5.style.color = "lime"
        }else{
            condition5.style.color = "red"
        }
        
        if(hidePass.value.length > minimalValueLength && hidePass.value.match(lettersCondition) && hidePass.value.match(bigLettersCondition) && hidePass.value.match(numbersCondition) && hidePass.value.match(specialSignsCondition)){

            finalInfo.textContent = `Masz świetne hasło ✔`

        }else{
            finalInfo.textContent = ` `
        }
}

const chceckPassValue = () => {
    if(hidePass.value !== ''){
        showingPasswordInBox()
    }else {
        condition1.style.color = 'white'
        condition2.style.color = ''
        condition3.style.color = ''
        condition4.style.color = ''
        condition5.style.color = ''
        visiblePass.textContent = 'Twoje hasło to:'
    }
}

hidePass.addEventListener('keyup', chceckPassValue)
