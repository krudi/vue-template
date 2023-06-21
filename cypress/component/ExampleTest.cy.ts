import ExampleTest from '../../components/ExampleTest.vue'

describe('Component: ExampleTest', () => {
  it('checks the functionality of the props', () => {
    const props = 'Lorem Ipsum'

    cy.mount(ExampleTest, {
      props: {
        msg: props
      }
    })

    cy.get('h1').should('have.text', props)
  })
})
