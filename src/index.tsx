/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import { render } from 'react-dom';
import { createInertiaApp } from '@inertiajs/inertia-react';
import GlobalLayout from './Layouts/GlobalLayout';

createInertiaApp({
  resolve: (name) => require(`./Pages/${name}`),
  setup({ el, App, props }) {
    render(<GlobalLayout title="User Name"><App {...props} /></GlobalLayout>, el);
  },
});
