import React, { Component } from 'react'
import DoctorService from '../services/DoctorService'
import { Route , history} from 'react-router-dom';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Button,Typography,} from '@material-ui/core'

class ListDoctorComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                doctors: []
        }
        this.addDoctor = this.addDoctor.bind(this);
        this.editDoctor = this.editDoctor.bind(this);
        this.deleteDoctor = this.deleteDoctor.bind(this);
    }

    deleteDoctor(id){
        DoctorService.deleteDoctor(id).then( res => {
            this.setState({doctors: this.state.doctors.filter(doctor => doctor.id !== id) });          
        });
    }
    viewDoctor(id){
        this.props.history.push(`/view-doctor/${id}`);
    }
    editDoctor(id){
        this.props.history.push(`/add-doctor/${id}`);
    }

    componentDidMount(){
        DoctorService.getDoctors().then((res) => {
            this.setState({ doctors: res.data});
        });
    }
    addDoctor(){
        this.props.history.push('/add-doctor/_add');
    }
    render() {
        return (
            <div className="bg">
                  <div className="tableDoctor">
                 <Typography variant="h4" className="allign">
                 Doctor List
                </Typography>
                <div className="button">
                  <Button className="button" color="primary" variant="contained"size="small" onClick={this.addDoctor}>Add Doctor</Button>
                  </div>
                 <TableContainer component={Paper} >
                        <Table className="material-table"aria-label="simple table">
                             <TableHead className="tableHead">
                                <TableRow>
                                   
                                    <TableCell align="center">Doctor Name</TableCell>
                                    <TableCell align="center">Speciality</TableCell>
                                    <TableCell align="center">Location</TableCell>
                                    <TableCell align="center">Hospital Name</TableCell>
                                    <TableCell align="center">Mobile No</TableCell>
                                    <TableCell align="center">Email</TableCell>
                                    <TableCell align="center">Password</TableCell>
                                    <TableCell align="center">Charged Per Visit</TableCell>
                                    <TableCell align="center">Action</TableCell>
                                </TableRow>
                            </TableHead>
                             <tbody>
                                {
                                    this.state.doctors.map(
                                        doctor => 
                                        <TableRow key = {doctor.userId}>
                                                    
                                                    
                                                    <TableCell align="center">{doctor.doctorName}</TableCell>
                                                    <TableCell align="center">{doctor.speciality}</TableCell>
                                                    <TableCell align="center">{doctor.location}</TableCell>
                                                    <TableCell align="center">{doctor.hospitalName}</TableCell>
                                                    <TableCell align="center">{doctor.mobileNo}</TableCell>
                                                    <TableCell align="center">{doctor.email}</TableCell>
                                                    <TableCell align="center">{doctor.password}</TableCell>
                                                    <TableCell align="center">{doctor.chargedPerVisit}</TableCell>
                                                    <TableCell align="center">
                                                        
                                                        <Button variant="contained"size="small" color="primary" onClick={ () => this.editDoctor(doctor.userId)}>Update</Button>
                                                        <Button variant="contained"size="small" color="secondary"onClick={ () => this.deleteDoctor(doctor.userId)}>Delete</Button>
                                                        <Button variant="contained"size="small" onClick={ () => this.viewDoctor(doctor.userId)}>View</Button>
      </TableCell>

                                                </TableRow>
                                    ) }
                            </tbody> 
                         
                 </Table>
                </TableContainer>
                </div>
                </div>
        )
    }
}

export default ListDoctorComponent
