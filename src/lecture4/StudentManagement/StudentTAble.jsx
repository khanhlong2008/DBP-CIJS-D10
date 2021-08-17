
import React, { Component } from "react";

export default class StudentTable extends Component {
  state = {
    sortType: null, // 1: GPA up, 2: GPA down, 3: Họ tên
  };

  //   Mỗi lần type thay đổi thì set lại state thì component render lại theo cái type đó
  onSortChange = (e) => {
    this.setState({
      sortType: e.target.value,
    });
  };

  render() {
    let { students ,} = this.props.students;
    const {onDeleteStudents,} = this.props
    
    //Chỗ này sắp xếp lại cái students
    switch (this.state.sortType) {
      case 1:
      // sắp xếp lại student theo GPA down
        break;
 
      case 2:
        break;
      
        // sắp xếp lại student theo GPA up

        
      case 3:
        break;
      
        // sắp xếp lại student theo alphabet

       

      default:
    }
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Mã SV</th>
            <th>Họ Tên</th>
            <th>SĐT</th>
            <th>Email</th>
            <th>Điểm TB</th>
            <th>Hủy Bỏ</th>
            <th>
              <select
                className="form btn btn-primary"
                onChange={this.onSortChange}
              >
                <option value={null} selected>
                  Sort 
                </option>
                <option value={1}>ĐTB tăng dần</option>
                <option value={2}>ĐTB giảm dần</option>
                <option value={3}>Họ tên</option>
              </select>
            </th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((StudentItem) => {
              const { id, email, phoneNumber, fullname , Toan ,Ly ,Hoa} =
                StudentItem;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{fullname}</td>
                  <td>{phoneNumber}</td>
                  <td>{email}</td>
                  <td>
                   {/* {onCreateGPA(StudentItem)} */}
                   {parseFloat((parseInt(Toan) + parseInt(Ly) + parseInt(Hoa)) / 3).toFixed(1)}
                  </td>
                  <td>
                    <button
                      type="submit"
                      className="btn btn-primary "
                      onClick={() => onDeleteStudents(StudentItem, id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>Null</td>
              <td>Null</td>
              <td>Null</td>
              <td>Null</td>
              <td>Null</td>
              <td>Null</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}