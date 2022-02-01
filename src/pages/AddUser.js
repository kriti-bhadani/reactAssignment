import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { addUser } from '../redux/actions';

const AddUser = () => {
  const [state, setState] = useState({
    ename: "",
    age: "",
    city: "",
    gender: "",
    salary: "",
  });

  const [error, setError] = useState("");

  let history = useHistory();
  let dispatch = useDispatch();
  const {ename, age, city, gender, salary}= state;

  
  const handleInputChange = (e) => {
    let {name, value} = e.target;
    setState({...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!ename || !age || !city || !gender || !salary) {
      setError("Please provide all the input fields");
    } 
    else {
      dispatch(addUser(state));
      history.push("/");
      setError("");
    }
  };

  return <div>
     <Button variant ="contained" className="secondary bg-secondary text-white"
     style={{width: "100px", marginTop: "20px"}}
     onClick={() => history.push("/")} >
      Go Back</Button>
    <h3 style={{paddingTop: "20px"}}>Add User</h3>

    {error && <h4 style={{color: "red"}}>{error}</h4>}
    
     <Form style={{padding: "30px 0"}} onKeyPress={(e)=>{e.target.keyCode === 13 && e.preventDefault();}}>
  <Form.Group className="mb-3">
    <Form.Control type="text" label="EName" name="ename" defaultValue="Ename" onChange={handleInputChange} style={{margin: "0 auto",width: "45pc"}} />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Control type="text" onChange={handleInputChange} name="age" defaultValue="Age" style={{margin: "0 auto",width: "45pc"}} />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Control type="text" onChange={handleInputChange} name="city" defaultValue="City" style={{margin: "0 auto",width: "45pc"}}/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Control type="text" onChange={handleInputChange} name="gender" defaultValue="Gender" style={{margin: "0 auto",width: "45pc"}} />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Control type="text" onChange={handleInputChange} name="salary" defaultValue="Salary" style={{margin: "0 auto",width: "45pc"}}/>
  </Form.Group>
  <Button variant ="contained" className="primary bg-primary text-white"
   style={{width: "100px"}} onClick={handleSubmit} >
      Submit</Button>
</Form>
  </div>
};

export default AddUser;
