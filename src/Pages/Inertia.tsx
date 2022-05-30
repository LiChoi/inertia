import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

type personObject = { id: number, name: string, age: number, characteristics: any };

const InertiaTest = ({message = "empty", people = []}) => {
  const [values, setValues] = useState({
    name: "",
    age: 0
  })

  const handleChange = (e: any) => {
    const key = e.target.id;
    const value = e.target.value
    setValues({
      ...values,
      [key]: value,
    });
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    Inertia.post('/inertia', values)
  }

  const handleDelete = (id: number) => Inertia.delete(`/inertia/${id}`);

  const handleAddAge = (update: {id: number, age: number}) => Inertia.patch("/inertia", update);

  return (
    <div style={{color: "cyan"}}>
      <h1 style={{color: "cyan"}}>Inertia Demo</h1>
      <h1 style={{color: "cyan"}}>
        {message}
      </h1>
      <h1 style={{color: "cyan"}}>Create People</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" value={values.name} onChange={handleChange} style={{backgroundColor: "gray"}} />
        <label htmlFor="age">Age:</label>
        <input id="age" value={values.age} onChange={handleChange} style={{backgroundColor: "gray"}} />
        <button style={{backgroundColor: "gray"}} type="submit">Submit</button>
      </form>
      <h1 style={{color: "cyan"}}>List of people</h1>
      {people.map((person: personObject, i) =>
        <div key={i}>
          <p>Name: {person.name}; age: {person.age}</p>
          <button style={{backgroundColor: "gray"}} onClick={() => handleDelete(person.id)}>Delete {person.name}</button>
          <button style={{backgroundColor: "gray"}} onClick={() => handleAddAge({id: person.id, age: person.age + 1})}>Add Age to {person.name}</button>
        </div>
      )}
    </div>
  );
}

export default InertiaTest;