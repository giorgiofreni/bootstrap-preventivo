console.log('check funzionamento')


const formElement = document.getElementById('form-preventivo')

const prezzoOutputElement = document.getElementById('prezzoOutput')
console.log(formElement, prezzoOutputElement)

formElement.addEventListener('submit', function(event){
  //impedisci l'invio del form
  event.preventDefault()
  console.log('submit'), event

//tipo di lavoro
  const selectWorkElement = document.getElementById('Work')

//valore select Work
  const selectedWork = selectWorkElement.value

//seleziona il prezzo orario in base al lavoro
  let prezzoOrario = 0

  if (selectedWork === '1') {
    prezzoOrario = 20.5
  } else if (selectedWork === '2') {
    prezzoOrario = 15.3
  } else if (selectedWork === '3') {
    prezzoOrario = 33.6
  }


  let prezzoTot = prezzoOrario * 10
  
//   verifica codice promo
  const promoCodeElement = document.getElementById('promoCode')
  let validPromoCode = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'] //array(string)
  let sconto = 0

  //ciclo
  for (let i = 0; i < validPromoCode.length; i++) {
    const CurrentPromo = validPromoCode[i]
    console.log(CurrentPromo)
    if (CurrentPromo === promoCodeElement.value) {
        sconto = prezzoOrario * 10 * 0.25
        console.log(sconto)
        prezzoTot = prezzoTot - sconto
        console.log(prezzoTot)
      }
  }




  prezzoOutputElement.innerHTML = '€ ' + prezzoTot + ' Euro'

})
