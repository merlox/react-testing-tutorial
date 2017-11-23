# react-testing-tutorial

Steps to test react, working:

0. Create a npm project with npm init -y
1. Install the following:
npm i -g jest
npm i -D jest react react-test-renderer babel-jest babel-preset-env babel-preset-react

2. Create a .babelrc file like this:
{
	presets: ["env", "react"]
}

3. Create an index.js file with your app like this:
import React from 'react'
class App extends React.Component {
	render () {
		return (
			<div>
			This is a test
			</div>
		)
	}
}
export default App

Remember to export the component.

4. Create an index.test.js file with the following content:
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

5. Finally do in the root folder:
jest
