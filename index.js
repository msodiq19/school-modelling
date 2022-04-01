class School {
    constructor(schoolName, students, departments){
        this.schoolName = schoolName;
        this.students = students;
        this.departments = departments;
    }

    displayStudents(){
        console.log(`There are ${this.students.length} student(s) in ${this.schoolName}`);
        this.students.forEach( student => {
            console.log(student)
        });
    }

    admitStudent(student) {
        this.students.push(student)
    }

    rusticateStudent(fullName){
        const students = this.students.filter(student=>{
            if(student.fullName !== fullName){
                return student;
            }
        })
        console.log(students)
    }
}

const nithub = new School('Nithub', [{id:1,fullName:'Muhammed Sodiq'},{id:2,fullName:'Kwagmire Abdullah'}],['web development','mobilr development','data analysis'])

nithub.admitStudent({id:3,fullName:'Taiwo Stephen'});
nithub.rusticateStudent('Kwagmire Abdullah')
nithub.displayStudents();