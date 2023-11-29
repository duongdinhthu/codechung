import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./book.css";

export default function Book() {
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    favorite: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setNewBook((prevBook) => ({
      ...prevBook,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAddShow = (event) => {
    event.preventDefault();
    // You can use the 'newBook' state here to access the entered data

    // Add any additional logic for handling the new book data
  };

  return (
    <div>
      <meta charSet="UTF-8" />
      <title>AngularJS Practical Examples</title>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"
      />
      <div className="container">
        <div className="input-group">
          <span className="search">
            <FaSearch />
          </span>
          <input type="text" className="formInput"></input>
        </div>
        <h3>A list of Books</h3>
        <ul className="list-group">
          <li className="list-group-item">
            {" Life of Pi "}
            <span className="badge">Davan</span>
          </li>
          <li className="list-group-item">
            <span className="glyphicon glyphicon-star" />
            {" Học code today "}
            <span className="badge">Fpt</span>
          </li>
          <li className="list-group-item">
            <span className="glyphicon glyphicon-star" />
            {" Learn Angular by example "}
            <span className="badge">Fpt Aptech</span>
          </li>
          <li className="list-group-item">
            <span />
            {" Họ nhà trai "}
            <span className="badge">Nguyễn Anh Tú</span>
          </li>
          <li className="list-group-item">
            <span className="glyphicon glyphicon-star" />
            {" Đôi mắt có lửa "}
            <span className="badge">Nguyễn Hùng Sơn</span>
          </li>
        </ul>
        <select className="form-control pull-right">
          <option>Davan</option>
          <option>Fpt</option>
          <option>Fpt Aptect</option>
          <option>Nguyễn Anh Tú</option>
          <option>Nguyễn Hùng Sơn</option>
        </select>

        <div className="clearfix" />
        <h3>Add a new Book</h3>
        <form name="main.addForm" className="form">
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Author</label>
            <input
              type="text"
              className="form-control"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
              required
            />
            {/*<input type="number" min="1900" max="2030" class="form-control" ng-model="main.new.year" required />*/}
          </div>
          <div className="row">
            <div className="col-xs-6">
              <label>
                Favorite: <input type="checkbox" />
              </label>
            </div>
            <div className="button1">
              <button className="btn btn-success pull-right">
                <span
                  className="glyphicon glyphicon-plus-sign"
                  onClick={handleAddShow}
                  disabled={!newBook.author || !newBook.title}
                />{" "}
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
