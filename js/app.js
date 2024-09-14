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

  console.log(prezzoOrario)

  let prezzoTot = prezzoOrario * 10
  prezzoOutputElement.innerHTML = prezzoTot

})
