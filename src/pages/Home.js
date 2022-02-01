import React, { useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, loadUsers } from "../redux/actions";
import { useHistory } from "react-router-dom";

const Home = () => {
  const myStyle = {
    marginTop: 100,
    minWidth: 900,
  };

  const myButtonStyle = {
    marginRight: 7,
    marginTop: 5,
    marginBottom: 5,
  };
  let dispatch = useDispatch();
  let history = useHistory();
  const { users } = useSelector(state => state.data)

  useEffect(() => {
    dispatch(loadUsers());
  }, [])
  console.log(users)

  const handleDelete = (id) => {
    if (window.confirm("Are you sure wanted to delete the user ?")) {
      dispatch(deleteUser(id));
    }
  };
  return (
    <>
      <div className="buttonstyles" style={{ marginTop: "20px" }}>
        <Button variant="contained" className="secondary bg-danger text-white"
          onClick={() => history.push("/addUser")}>
          Add user</Button>
      </div>
      <Table style={myStyle} striped bordered hover>
        <thead>
          <tr className="bg-dark text-white">
            <th>S No.</th>
            <th>Ename</th>
            <th>Age</th>
            <th>City</th>
            <th>Gender</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((each) => (
            <tr>
              <td>{each.id}</td>
              <td>{each.ename}</td>
              <td>{each.age}</td>
              <td>{each.city}</td>
              <td>{each.gender}</td>
              <td>{each.salary}</td>
              <>
                <Button style={myButtonStyle} className="primary bg-primary text-white"
                  onClick={() => handleDelete(each.id)}>
                  Delete</Button>{' '}
                <Button className="secondary bg-danger text-white" onClick={() => history.push(`/editUser/${each.id}`)}>Edit</Button>{' '}
              </>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
export default Home