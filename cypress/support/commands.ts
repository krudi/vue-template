import { mount } from 'cypress/vue'

Cypress.Commands.add('mount', (component, options) => {
  return mount(component, options)
})
