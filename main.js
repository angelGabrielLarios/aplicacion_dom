import { students } from "./constants/students"

const form = document.getElementById('form')
const selectStudent = document.getElementById('select_student')
const genders = {
  man: 'man',
  woman: 'woman'
}
let filterByGender = ''


function cleanHTML(parentElement) {

  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
}

function showAlert({ nameStudent }) {

  const alertTemplateHTML = `
  <div role="alert" class="alert alert-info w-11/12 mx-auto md:w-[40rem] mb-6 animate-fade-left" id="alert-choise-student">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 stroke-current shrink-0">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      /svg>
    <span>Escogiste al alumno ${nameStudent}</span>
  </div>
  `

  form.insertAdjacentHTML('beforebegin', alertTemplateHTML)

  setTimeout(() => {
    const alert = document.getElementById('alert-choise-student')
    alert.remove()
  }, 3000)
}


function loadStudentsHTML() {

  cleanHTML(selectStudent)
  filterByGender = genders[document.querySelector('input[type="radio"]:checked').value]
  const fragment = document.createDocumentFragment()
  const studentsFilterByGender = students.filter((student) => student.gender === filterByGender)
  console.log(studentsFilterByGender)
  studentsFilterByGender.forEach((student) => {
    const { name } = student
    const option = document.createElement('option')
    option.value = name
    option.textContent = name
    fragment.appendChild(option)
  })

  selectStudent.appendChild(fragment)

  selectStudent.insertAdjacentHTML('afterbegin', '<option value="" selected> -- Selecciona un estudiante -- </option>')

}
document.addEventListener('DOMContentLoaded', e => {
  loadStudentsHTML()
})

form.addEventListener('change', e => {
  const element = e.target

  if (element.name === 'gender') {
    if (element.checked) {
      filterByGender = element.value
      loadStudentsHTML()
    }
  }

  else if (element.name === 'students') {
    if (element.value) {
      showAlert({ nameStudent: element.value })
    }
  }

})







