import { screen, render } from '@testing-library/react'
import Catchphrase from './Catchphrase.jsx'

it('Should render the Catchphrase compononet', () => {
  const { container } = render(<Catchphrase catchphrases={ ['one', 'two'] } />)
  const catchphraseOne = screen.getByText('one')
  const catchphraseTwo = screen.getByText('two')

  expect(catchphraseOne).toBeInTheDocument()
  expect(catchphraseTwo).toBeInTheDocument()
  expect(container).toMatchSnapshot()
})
