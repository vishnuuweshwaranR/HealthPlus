import React, { useState, useEffect } from 'react';
import { createDoctor, updateDoctor } from '../Services/doctorService';

const DoctorForm = ({ selectedDoctor, onSave }) => {
  const [doctor, setDoctor] = useState({
    first_name: '',
    last_name: '',
    specialization: '',
    phone_number: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip_code: '',
    date_of_birth: '',
    gender: '',
    years_of_experience: 0,
    active_flag:''
  });

  useEffect(() => {
    if (selectedDoctor) {
      setDoctor(selectedDoctor);
    }
  }, [selectedDoctor]);
console.log(selectedDoctor);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor({ ...doctor, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (doctor.id) {
      await updateDoctor(doctor.id, doctor);
    } else {
      await createDoctor(doctor);
    }
    onSave();
    setDoctor({ first_name: '', last_name: '',specialization: '', phone_number: '',email: '', address: '', city: '', state: '', zip_code: '', date_of_birth: '',  gender: '', years_of_experience:'', active_flag: false });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>{doctor.id ? 'Edit Doctor' : 'Add Doctor'}</h2>
      <input type="text" name="first_name" value={doctor.first_name} onChange={handleChange} placeholder="First Name" required /><br/>
      <input type="text" name="last_name" value={doctor.last_name} onChange={handleChange} placeholder="Last Name" required /><br/>
      <input type="text" name="specialization" value={doctor.specialization} onChange={handleChange} placeholder="Specialization" required /><br/>
      <input type="text" name="phone_number" value={doctor.phone_number} onChange={handleChange} placeholder="Phone Number" required /><br/>
      <input type="email" name="email" value={doctor.email} onChange={handleChange} placeholder="Email" required /><br/>
      <input type="text" name="address" value={doctor.address} onChange={handleChange} placeholder="Address" required /><br/>
      <input type="text" name="city" value={doctor.city} onChange={handleChange} placeholder="City" required /><br/>
      <input type="text" name="state" value={doctor.state} onChange={handleChange} placeholder="State" required /><br/>
      <input type="text" name="zip_code" value={doctor.zip_code} onChange={handleChange} placeholder="Zip Code" required /><br/>
      <input type="date" name="date_of_birth" value={doctor.date_of_birth} onChange={handleChange} required /><br/>
      <select name="gender" value={doctor.gender} onChange={handleChange} required><br/>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <input type="number" name="years_of_experience" value={doctor.years_of_experience} onChange={handleChange} placeholder="Years of Experience" required /><br></br>
      <button type="submit">Save</button>
      <button type='clear'>Cancel</button>
    </form>
  );
};

export default DoctorForm;
