$(document).foundation()

const megaroster = {
  students: [],

  init() {
    this.studentList = document.querySelector('#student-list')
    this.max = 0
    document
      .querySelector('#new-student')
      .addEventListener('submit', this.addStudent.bind(this))
  },

  addStudent(ev) {
    ev.preventDefault()
    const f = ev.target
    const student = {
      id: this.max + 1,
      name: f.studentName.value,
    }

    this.students.unshift(student) //use push instead of unshift to put the list item after instead of before in the array
    
    const listItem = this.buildListItem(student)
    this.prependChild(this.studentList, listItem)
    //this.studentList.appendChild(listItem) --> to put the next list item after instead of before
    this.max ++
    f.reset()
  },

  prependChild(parent, child)
  {
    parent.insertBefore(child, this.studentList.firstChild)
  },

  buildListItem(student) {
    const li = document.createElement('li')
    li.textContent = student.name
    li.dataset.id =  student.id
    return li
  },
}
megaroster.init()