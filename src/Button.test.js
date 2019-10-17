import React from 'react';
import 'react-native';
import Button from './Button';
import renderer from 'react-test-renderer';

test('Button Snapshot', () => {
  const snap = renderer.create(
    <Button title="hello" />
  ).toJSON();
  expect(snap).toMatchSnapshot();
})