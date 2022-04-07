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
  onDeleteStudents = (id) => {
    const students = this.state.students;
    const idx = students.findIndex((students) => students.id === id)
    if(idx !== -1 ){
      students.splice(idx,1)
      this.setState({
        students: students
      })
    }
  };
 
  render() {
    const {students} = this.state
    return (
      <div className="">
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
