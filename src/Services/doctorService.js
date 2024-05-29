import axios from 'axios';

const API_URL = 'http://localhost:5000/doctor';

export const getDoctors = async () => {
  return await axios.get(API_URL);
};

export const createDoctor = async (doctor) => {
  return await axios.post(API_URL, doctor);
};

export const updateDoctor = async (id, doctor) => {
  return await axios.put(`${API_URL}/${id}`, doctor);
};

export const deleteDoctor = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
