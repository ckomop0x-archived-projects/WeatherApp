import React from 'react'
import Home from '../../../src/components/Home'

describe('<Home/>', () => {
  it('works', () => {
    // mount the component under test
    cy.mount(<Home city="Amsterdam" />)
    // start testing!
    cy.get('[data-cy=homeComponent]').contains('Because of http source at api.openweathermap.org you could allow to load resources from unsecure places to let the WeatherApp work.')
    // mounted component can be selected via its name, function, or JSX
    // e.g. '@HelloState', HelloState, or <HelloState />
    // cy.get(HelloState)
    //   .invoke('setState', { name: 'React' })
    // cy.get(HelloState)
    //   .its('state')
    //   .should('deep.equal', { name: 'React' })
    // // check if GUI has rerendered
    // cy.contains('Hello React!')
  })
})
