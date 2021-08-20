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
  findIndex = (id) => {
    var { students } = this.state;
    var result = -1;
    students.forEach((students, index) => {
      if (students.id === id) {
        result = index;
      }
    });
    return result;
  };
  onDeleteStudents = (id) => {
    var {students} = this.state
    var index = this.findIndex(id);
    if (index !== -1) {
      students.splice(index, 1);
      this.setState({
        students: students,
      });
    }
    console.log(students)
  };
 
  render() {
    const {students} = this.state
    return (
      <div className="container">
        <h1 className="text-center text-primary display-4">
         MANAGING STUDENTS
        </h1>

        <StudentForm onAddStudent={this.onAddStudent} />
        <StudentTable
          students={students}
          onDeleteStudents={this.onDeleteStudents}
        />
      </div>
    );
  }
}
