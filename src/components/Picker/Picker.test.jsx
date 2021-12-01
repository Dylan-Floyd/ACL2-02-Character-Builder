import { screen, render } from '@testing-library/react'
import Picker from './Picker.jsx'

it('should render our Picker component', () => {
  const { container } = render(<Picker />)
  const head = screen.getByLabelText(/Head/)
  const middle = screen.getByLabelText(/Torso/)
  const legs = screen.getByLabelText(/Legs/)
  const catchphrase = screen.getByLabelText(/Add a Catchphrase/)

  expect(head).toBeInTheDocument()
  expect(middle).toBeInTheDocument()
  expect(legs).toBeInTheDocument()
  expect(catchphrase).toBeInTheDocument()
  expect(container).toMatchSnapshot()
})