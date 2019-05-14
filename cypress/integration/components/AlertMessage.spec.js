import React from 'react'
import AlertMessage from '../../../src/components/AlertMessage'

describe('<AlertMessage/>', () => {
  it('works', () => {
    // mount the component under test
    cy.mount(<AlertMessage />)
    // start testing!
    cy.get('[data-cy=alertMessageContant]').contains('Because of http source at api.openweathermap.org you could allow to load resources from unsecure places to let the WeatherApp work.')
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
