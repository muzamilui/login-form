import React from 'react'
import dashboard from '../data/dashboard.json'

import './Dashboard.css'


const  Row=(props) =>{
const {row}=props
    return(
    <tr key={row.id}>
				<td>{row.name}</td>
				<td>{row.age}</td>
				<td>{row.gender}</td>
				<td>{row.email}</td>
				<td>{row.phoneNo}</td>
			</tr>
    )
}

const Dashboard = () => {
    return (
        <div class="container">
            <div>
             <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Phone number</th>
                    </tr>
                </thead>
                <tbody>
                   
                {dashboard.length
                    ? dashboard.map((row) => (
                        <Row  key={row.id}   row={row} />
                      ))
                    : ""}
                </tbody>
            </table>

            </div>    
	
</div>
    )
}

export default Dashboard
