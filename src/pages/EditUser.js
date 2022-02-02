import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useHistory, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {updateUser, getSingleUser} from '../redux/actions';

const EditUser = () => {
  const [state, setState] = useState({
    ename: "",
    age: "",
    city: "",
    gender: "",
    salary: "",
  });

  const [error, setError] = useState("");
  let {id} =  useParams();
  const { user } = useSelector((state) => state.data);
  let history = useHistory();
  let dispatch = useDispatch();
  const {ename, age, city, gender, salary}= state;

  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);

  useEffect(() => {
    if(user) {
        setState({ ...user });
    }
  }, [user]);

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
      dispatch(updateUser(state, id));
      history.push("/");
      setError("");
    }
  };

  return <div>
     <Button variant ="contained" className="secondary bg-secondary text-white"
     style={{width: "100px", marginTop: "20px"}}
     onClick={() => history.push("/")} >
      Go Back</Button>
    <h3 style={{paddingTop: "20px"}}>Edit User</h3>

    {error && <h4 style={{color: "red"}}>{error}</h4>}
    
     <Form style={{padding: "30px 0"}} onKeyPress={(e)=>{e.target.keyCode === 13 && e.preventDefault();}}>
  <Form.Group className="mb-3">
    <Form.Control type="text" label="EName" name="ename" placeholder="EName" defaultValue={ename} onChange={handleInputChange} style={{margin: "0 auto",width: "45pc"}} />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Control type="text" onChange={handleInputChange} placeholder="Age" name="age" defaultValue={age} style={{margin: "0 auto",width: "45pc"}} />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Control type="text" onChange={handleInputChange} placeholder="City" name="city" defaultValue={city} style={{margin: "0 auto",width: "45pc"}}/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Control type="text" onChange={handleInputChange} placeholder="Gender" name="gender" defaultValue={gender} style={{margin: "0 auto",width: "45pc"}} />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Control type="text" onChange={handleInputChange} placeholder="Salary" name="salary" defaultValue={salary} style={{margin: "0 auto",width: "45pc"}}/>
  </Form.Group>
  <Button variant ="contained" className="primary bg-primary text-white"
   style={{width: "100px"}} onClick={handleSubmit} >
      Update</Button>
</Form>
  </div>
};

export default EditUser;
