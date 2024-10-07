import React, { Fragment } from 'react';
import {Button, Table}  from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import {Link, useNavigate} from 'react-router-dom';

function Home(){

    let history = useNavigate();

    const handleDelete =(id) => {
        var index  = Employees.map(function(e){
            return e.id
        }).indexOf(id);

        Employees.splice(index,1);
        history('/');
    }

    const handleEdit = (id , name , age) => {
        localStorage.setItem('name',name);
        localStorage.setItem('age',age);
        localStorage.setItem('id',id);

    }
    return(
        <Fragment>
            <div style ={{margin:"10rem"}}>
                <Table striped bordered hover size ="sm">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees && Employees.length  > 0 ?
                            Employees.map((item) =>{
                                return (
                                    <tr>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.age}
                                        </td>
                                        <td>
                                            <Link to = {'/edit'}>
                                            <Button onClick = { () =>
                                                handleEdit(item.id,item.name,item.age)}>Edit</Button>
                                            </Link>
                                            &nbsp;
                                            <Button onClick = { () =>handleDelete(item.id)}>Delete</Button>
                                        </td>
                                    </tr>
                                )
                            }) : "No data Available"
                        }
                    </tbody>
                </Table>
                <br></br>
                <Link className ="d-frid gap-2" to= {'/create'}>
                     <Button size = "lg"> Create</Button>
                </Link>
            </div>
        </Fragment>
    )
}

export default Home;
