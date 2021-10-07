// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import 'cypress-real-events/support'

// Alternatively you can use CommonJS syntax:
// require('./commands')
require('cypress-xpath')
require('cypress-get-table') 

Cypress.on('uncaught:exception', (err, runnable) => {
    
    if (err.message.includes('The client specified not to prompt')) {
      return false
    }
    
  })
module.exports = (on, config) => {    
}

//enable support for XPath
import ('cypress-xpath')