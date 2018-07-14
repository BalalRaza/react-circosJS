import React from 'react';
import Circos from './Circos';

const data = [
  {
    len: 31, color: '#8dd3c7', label: 'January', id: 'january',
  },
  {
    len: 28, color: '#ffffb3', label: 'February', id: 'february',
  },
  {
    len: 31, color: '#bebada', label: 'March', id: 'march',
  },
  {
    len: 30, color: '#fb8072', label: 'April', id: 'april',
  },
  {
    len: 31, color: '#80b1d3', label: 'May', id: 'may',
  },
  {
    len: 30, color: '#fdb462', label: 'June', id: 'june',
  },
  {
    len: 31, color: '#b3de69', label: 'July', id: 'july',
  },
  {
    len: 31, color: '#fccde5', label: 'August', id: 'august',
  },
  {
    len: 30, color: '#d9d9d9', label: 'September', id: 'september',
  },
  {
    len: 31, color: '#bc80bd', label: 'October', id: 'october',
  },
  {
    len: 30, color: '#ccebc5', label: 'November', id: 'november',
  },
  {
    len: 31, color: '#ffed6f', label: 'December', id: 'december',
  },
];

const CircosDefaultTest = () => (
  <Circos data={data} size={800} />
);
CircosDefaultTest.displayName = 'CircosDefaultTest';

module.exports = CircosDefaultTest;
