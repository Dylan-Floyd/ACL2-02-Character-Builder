import { screen, render } from '@testing-library/react'
import Character from './Character.jsx'

it('should render the character component', () => {
  const { container } = render(<Character head='dog' torso='blue' legs='leg'/>)
  const head = screen.getByLabelText(/head/)
  const torso = screen.getByLabelText(/torso/)
  const legs = screen.getByLabelText(/legs/)

  expect(head).toHaveStyle('backgroundImage: url(./dog-head.png)')
  expect(torso).toHaveStyle('backgroundImage: url(./blue-middle.png)')
  expect(legs).toHaveStyle('backgroundImage: url(./leg-pants.png)')
  expect(head).toBeInTheDocument()
  expect(torso).toBeInTheDocument()
  expect(legs).toBeInTheDocument()
  expect(container).toMatchSnapshot()
})
