import React from 'react'
import renderer from 'react-test-renderer'
import App from './index'

test('App loads', () => {
  const component = renderer.create(
    <App />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
