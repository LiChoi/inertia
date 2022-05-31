import React from 'react';
import { useForm } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

type personObject = { id: number, name: string, age: number, characteristics: any };

function Test({ message = 'empty', people = [], errors = '' }) {
  const {
    data, setData, post, delete: destroy,
  } = useForm({
    name: '',
    age: 0,
  });

  const handleChange = (e: any) => setData(e.target.id, e.target.value);

  const inertiaAPIOptions = {
    preserveScroll: true,
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    post('/test', inertiaAPIOptions);
  };

  const handleDelete = (id: number) => destroy(`/test/${id}`, inertiaAPIOptions);

  const handleAddAge = (update: { id: number, age: number }) => Inertia.patch('/test', update, inertiaAPIOptions);

  return (
    <div style={{ color: 'cyan' }}>
      <h1 style={{ color: 'cyan' }}>TEST</h1>
      <h1 style={{ color: 'cyan' }}>
        {message}
      </h1>
      <h1 style={{ color: 'cyan' }}>Create People</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" value={data.name} onChange={handleChange} style={{ backgroundColor: 'gray' }} />
        <label htmlFor="age">Age:</label>
        <input id="age" value={data.age} onChange={handleChange} style={{ backgroundColor: 'gray' }} />
        <button style={{ backgroundColor: 'gray' }} type="submit">Submit</button>
        {errors && <div>{errors}</div>}
      </form>
      <h1 style={{ color: 'cyan' }}>List of people</h1>
      {people.map((person: personObject, i) => (
        <div key={i}>
          <p>
            Name:
            {person.name}
            ; age:
            {person.age}
          </p>
          <button style={{ backgroundColor: 'gray' }} onClick={() => handleDelete(person.id)}>
            Delete
            {person.name}
          </button>
          <button style={{ backgroundColor: 'gray' }} onClick={() => handleAddAge({ id: person.id, age: person.age + 1 })}>
            Add Age to
            {person.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Test;
