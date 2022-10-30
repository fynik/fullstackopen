import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const req = axios.get(baseUrl);
  return req.then(resp => resp.data);
}

const createPerson = newPerson => {
  const req = axios.post(baseUrl, newPerson);
  return req.then(resp => resp.data);
}

const deletePerson = id => {
  const req = axios.delete(`${baseUrl}/${id}`);
  return req.then(resp => resp.data);
}

const updatePerson = (id, modifiedPerson) => {
  const req = axios.put(`${baseUrl}/${id}`, modifiedPerson);
  return req.then(resp => resp.data);
}

const phonebookService = { getAll, createPerson, deletePerson, updatePerson };

export default phonebookService;