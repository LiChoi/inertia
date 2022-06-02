import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import LocalLayout from '../Layouts/LocalLayout';

type PersonObject = { id: number, name: string, age: number, characteristics: any };

function InertiaTest({ message = 'empty', people = [] }: any) {
  const [values, setValues] = useState({
    name: '',
    age: 0,
  });

  const handleChange = (e: any) => {
    const key = e.target.id;
    const { value } = e.target;
    setValues({
      ...values,
      [key]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    Inertia.post('/inertia', values);
  };

  const handleDelete = (id: number) => Inertia.delete(`/inertia/${id}`);

  const handleAddAge = (update: { id: number, age: number }) => Inertia.patch('/inertia', update);

  return (
    <div style={{ color: 'cyan' }}>
      <h1 style={{ color: 'cyan' }}>Inertia Demo</h1>
      <h1 style={{ color: 'cyan' }}>
        {message}
      </h1>
      <h1 style={{ color: 'cyan' }}>Create People</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:&nbsp;
          <input id="name" value={values.name} onChange={handleChange} style={{ backgroundColor: 'gray' }} />
        </label>
        <label htmlFor="age">
          Age:&nbsp;
          <input id="age" value={values.age} onChange={handleChange} style={{ backgroundColor: 'gray' }} />
        </label>
        <button style={{ backgroundColor: 'gray' }} type="submit">Submit</button>
      </form>
      <h1 style={{ color: 'cyan' }}>List of people</h1>
      {people.map((person: PersonObject) => (
        <div key={`person-${person.id}`}>
          <p>
            Name:
            {person.name}
            ; age:
            {person.age}
          </p>
          <button type="button" style={{ backgroundColor: 'gray' }} onClick={() => handleDelete(person.id)}>
            Delete
            {person.name}
          </button>
          <button type="button" style={{ backgroundColor: 'gray' }} onClick={() => handleAddAge({ id: person.id, age: person.age + 1 })}>
            Add Age to
            {person.name}
          </button>
        </div>
      ))}
    </div>
  );
}

InertiaTest.layout = (page:any) => <LocalLayout title="Home">{page}</LocalLayout>;

export default InertiaTest;
