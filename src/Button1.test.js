import React from 'react';
import 'react-native';
import Button1 from './Button1';
import renderer from 'react-test-renderer';

test('Button1 Snapshot', () => {
  const snap = renderer.create(
    <Button1 title="there" />
  ).toJSON();
  expect(snap).toMatchSnapshot();
})