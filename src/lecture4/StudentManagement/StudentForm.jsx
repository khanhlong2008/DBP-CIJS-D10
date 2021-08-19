import React, { Component } from "react";

export default class StudentForm extends Component {
  state = {
    id: "",
    fullname: "",
    phoneNumber: "",
    email: "",
    Toan: "",
    Ly: "",
    Hoa: "",
  };

  onChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    // Đưa cái object student ra component cha
    this.props.onAddStudent(this.state);
  };
  render() {
    const {id,email,fullname,phoneNumber,Toan,Ly,Hoa} = this.state
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="id">Mã SV</label>
                <input
                  required
                  type="text"
                  name="id"
                  className="form-control"
                  aria-describedby="helpId"
                  onChange={this.onChangeHandler}
                  value={id}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="fullname">Họ tên</label>
                <input
                  required
                  type="text"
                  name="fullname"
                  className="form-control"
                  aria-describedby="helpId"
                  onChange={this.onChangeHandler}
                  value={fullname}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="fullname">SĐT</label>
                <input
                  required
                  type="text"
                  name="phoneNumber"
                  className="form-control"
                  aria-describedby="helpId"
                  onChange={this.onChangeHandler}
                  value={phoneNumber}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  required
                  type="text"
                  name="email"
                  className="form-control"
                  aria-describedby="helpId"
                  onChange={this.onChangeHandler}
                  value={email}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="email">Điểm Toán</label>
                <input
                  required
                  type="text"
                  name="Toan"
                  className="form-control"
                  aria-describedby="helpId"
                  onChange={this.onChangeHandler}
                  value={Toan}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="email">Điểm Lý</label>
                <input
                  required
                  type="text"
                  name="Ly"
                  className="form-control"
                  aria-describedby="helpId"
                  onChange={this.onChangeHandler}
                  value={Ly}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="email">Điểm Hóa</label>
                <input
                  required
                  type="text"
                  name="Hoa"
                  className="form-control"
                  aria-describedby="helpId"
                  onChange={this.onChangeHandler}
                  value={Hoa}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <button type="submit" className="mt-4 btn btn-primary" >
                  Thêm sinh viên
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
