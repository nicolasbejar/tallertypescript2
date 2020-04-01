import { Course } from './course.js';
import { dataCourses } from './datacourses.js';
import { Student } from './Student.js';

let coursesTbody: HTMLElement = document.getElementById('courses')!;
let studentTbody: HTMLElement = document.getElementById('student')!;
const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
const totalCreditElm: HTMLElement = document.getElementById("total-credits")!;


btnfilterByName.onclick = () => applyFilterByName();


renderCoursesInTable(dataCourses);
renderStudent();


totalCreditElm.innerHTML = `${getTotalCredits(dataCourses)}`


function renderCoursesInTable(courses: Course[]): void {
  console.log('Desplegando cursos');
  courses.forEach((course) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${course.name}</td>
                           <td>${course.professor}</td>
                           <td>${course.credits}</td>`;
    coursesTbody.appendChild(trElement);
  });
}

function renderStudent():void{
  let estudiante = new Student();
  let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>codigo<td>
    <td>${estudiante.codigo}</td>`;
    studentTbody.appendChild(trElement) ;

    trElement = document.createElement("tr");
    trElement.innerHTML = `<td>cedula<td>
    <td>${estudiante.cedula}</td>`;
    studentTbody.appendChild(trElement) ; 

    trElement = document.createElement("tr");
    trElement.innerHTML = `<td>edad<td>
    <td>${estudiante.edad}</td>`;
    studentTbody.appendChild(trElement) ;

    trElement = document.createElement("tr");
    trElement.innerHTML = `<td>direccion<td>
    <td>${estudiante.direccion}</td>`;
    studentTbody.appendChild(trElement) ; 

    trElement = document.createElement("tr");
    trElement.innerHTML = `<td>telefono<td>
    <td>${estudiante.telefono}</td>`;
    studentTbody.appendChild(trElement) ;

}
 

 

function applyFilterByName() { 
  let text = inputSearchBox.value;
  text = (text == null) ? '' : text;
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByName(text, dataCourses);
  renderCoursesInTable(coursesFiltered);
}

function searchCourseByName(nameKey: string, courses: Course[]) {
  return nameKey === '' ? dataCourses : courses.filter( c => 
    c.name.match(nameKey));
}


function getTotalCredits(courses: Course[]): number {
  let totalCredits: number = 0;
  courses.forEach((course) => totalCredits = totalCredits + course.credits);
  return totalCredits;
}

function clearCoursesInTable() {
  while (coursesTbody.hasChildNodes()) {
    if (coursesTbody.firstChild != null) {
      coursesTbody.removeChild(coursesTbody.firstChild);
     
    }
  }
}