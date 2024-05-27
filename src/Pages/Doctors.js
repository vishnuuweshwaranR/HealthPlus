// src/Pages/Doctors.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/doctor')
            .then(response => {
                setDoctors(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the doctors!', error);
            });
    }, []);

    return (
        <div>
            <h1>Doctors</h1>
            <ul>
                {doctors.map(doctor => (
                    <li key={doctor.id}>{doctor.name} - {doctor.specialization}</li>
                ))}
            </ul>
        </div>
    );
};

export default Doctors;
