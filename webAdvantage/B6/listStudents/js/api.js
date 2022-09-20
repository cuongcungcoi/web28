import { fillEditStudent } from "./view.js";

export async function getStudents(callback) {
  try {
    let students = await axios.get("http://localhost:3000/students");
    callback(students.data);
  } catch (e) {
    console.log(e);
  }
}
export async function createStudent(...student) {
  try {
    await axios.post(`http://localhost:3000/students`, ...student);
    window.location.href = "/listStudents/";
  } catch (e) {
    console.log(e);
  }
}

export async function deleteStudent(id) {
  try {
    await axios.delete(`http://localhost:3000/students/${id}`);
  } catch (e) {
    console.log(e);
  }
}

export async function getEditStudent(id) {
  try {
    let editStudent = await axios.get(`http://localhost:3000/students/${id}`);
    fillEditStudent(editStudent.data);
  } catch (e) {
    console.log(e);
  }
}

export async function updateStudent(id, student) {
  try {
    await axios.put(`http://localhost:3000/students/${id}`, student);
    window.location.href = "/listStudents/";
  } catch (e) {
    console.log(e);
  }
}
