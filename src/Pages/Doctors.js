    // src/Pages/Doctors.js
import React, { useEffect, useState } from 'react';
import { getDoctors, deleteDoctor  } from '../Services/doctorService';
import { format } from 'date-fns';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    //get api response
    const loadDoctors = async () => {
        const response = await getDoctors();
        setDoctors(response.data);
      };
      
      //useeffect hook for constant variable loadDoctors
      useEffect(() => {
        loadDoctors();
      }, []);

      //To change date format using date-fns library
      const formatDate = (dateString) => {
        return format(new Date(dateString), 'yyyy-MM-dd');
      };
      //handleDelete Function
      const handleDelete = async (id) => {
        await deleteDoctor(id);
        loadDoctors();
      };

      //handleEdit Function
      const handleEdit = (selectedDoctor) => {
        setSelectedDoctor(selectedDoctor);
      };
      console.log(selectedDoctor);
      //handleSave Function
      const handleSave = (doctor) => {
        setSelectedDoctor(doctor);
        loadDoctors();
      };

    return (
        <div>
            <h1>Doctors</h1>
            <button onClick={() => handleSave}>Add</button><br/>
            <ul>
        {doctors.map(doctor => (
          <li key={doctor.id}>
            {doctor.first_name} {doctor.last_name} - {doctor.specialization} - {doctor.phone_number} - {doctor.email} - {formatDate(doctor.date_of_birth)} - {doctor.gender} - {doctor.years_of_experience}
            <button onClick={() => handleEdit(doctor)}>Edit</button>
            <button onClick={() => handleDelete(doctor.id)}>Delete</button>
          </li>
        ))}
      </ul>
        </div>
    );
};

export default Doctors;
