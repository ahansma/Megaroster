$(document).foundation()

const megaroster = 
{
    init()
    {
        this.max = 0;
        //adds event listener to form
        document
            .querySelector('#new-student')
            .addEventListener('submit', this.addStudent.bind(this))
    },

    addStudent(ev)
    {
        event.preventDefault()
        const f = ev.target
        const student = {
            id: this.max + 1,
            name: f.studentName.value,
        }
        this.buildListItem(studentName)
        this.max ++
    },

    buildListItem(student)
    {
        console.log(student)
    },
}
megaroster.init()