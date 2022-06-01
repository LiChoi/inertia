import React from 'react';
import { useForm } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

type PersonObject = { id: number, name: string, age: number, characteristics: any };

function Test({ message = 'empty', people = [], errors = '' }: any) {
  const {
    data, setData, post, delete: destroy, reset, processing,
  } = useForm({
    name: '',
    age: '0',
  });

  const handleChange = (e: any) => setData(e.target.id, e.target.value);

  const inertiaAPIOptions = {
    preserveScroll: true,
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    post('/test', {
      ...inertiaAPIOptions,
      onSuccess: () => {
        reset();
      },
    });
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
        <label htmlFor="name">
          Name:&nbsp;
          <input id="name" value={data.name} onChange={handleChange} style={{ backgroundColor: 'gray' }} />
        </label>
        <label htmlFor="age">
          Age:&nbsp;
          <input id="age" value={data.age} onChange={handleChange} style={{ backgroundColor: 'gray' }} />
        </label>
        <button style={{ backgroundColor: 'gray' }} type="submit">Submit</button>
        {errors && <div>{errors}</div>}
        {processing && <div>PROCESSING!!!!!</div>}
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

export default Test;
