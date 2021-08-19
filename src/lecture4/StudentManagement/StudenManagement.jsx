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
    students.forEach((tasks, index) => {
      if (students.id === id) {
        result = students;
      }
    });
    return result;
  };
  onDeleteStudents = (stu, id) => {
    const {students} = this.state
    var index = this.findIndex(id);
    if (index !== -1) {
      students.slice(index, 1);
      this.setState({
        students: students,
      });
    }
    console.log(students)
  };
 
  render() {
    return (
      <div className="container">
        <h1 className="text-center text-primary display-4">
         MANAGING STUDENTS
        </h1>

        <StudentForm onAddStudent={this.onAddStudent} />
        <StudentTable
          students={this.state}
          onDeleteStudents={this.onDeleteStudents}
        />
      </div>
    );
  }
}
