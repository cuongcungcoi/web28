export async function getStudents(callback) {
  try {
    let students = await axios.get("http://localhost:3000/students");
    callback(students.data);
  } catch (e) {
    console.log(e);
  }
}
