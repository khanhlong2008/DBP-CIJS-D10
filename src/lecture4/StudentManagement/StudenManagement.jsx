import React, { Component } from "react";
import StudentForm from "./StudentForm";
import StudentTable from "./StudentTAble";

export default class StudentManagement extends Component {
  state = {
    students: [],
  };

  onAddStudent = (student) => {
    this.setState({
      students: [...this.state.students, student],
    });
  };

  onDeleteStudents = (stu, id) => {
    const students = this.state.students;
    const studentRemove = stu;
    const newStudents = students.filter((item) => item !== studentRemove);
    this.setState({
      students: newStudents,
    });
  };
  onCreateGPA=(StudentItem) => {  
    const {Hoa,Toan,Ly,GPA} = StudentItem
    var gpa = parseFloat((parseInt(Toan) + parseInt(Ly) + parseInt(Hoa)) / 3).toFixed(1)
    // const newStudents = {GPA: gpa}
    // console.log(GPA)
    this.setState({
      GPA :gpa
    })
  }
  render() {
    return (
      <div className="container">
        <h1 className="text-center text-primary display-4ý">
         MANAGING STUDENTS
        </h1>

        <StudentForm onAddStudent={this.onAddStudent} />
        <StudentTable
        onCreateGPA={this.onCreateGPA}
          students={this.state}
          onDeleteStudents={this.onDeleteStudents}
        />
      </div>
    );
  }
}
