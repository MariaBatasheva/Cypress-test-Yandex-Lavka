const SELECTORS = require('../utils/selectors')
const item = 'овощи'

describe('Check catalog picture', () => {
   it('Load Main Page', () => {
        cy.visit('https://lavka.yandex.ru/')
        cy.wait(3000)
    })
    it('Open vegetables section', () => {
        cy.get(SELECTORS.SEARCH_LABEL).type(item)
        cy.wait(5000)
    })

/** if the 1st part doesn't work with vpn:
    it('Load Main Page', () => {
         cy.visit('https://lavka.yandex.ru/2/search?text=%D0%9E%D0%B2%D0%BE%D1%89%D0%B8')
         cy.wait(3000)
    })
*/

    it('Check catalog single item pictures', () => {
        cy.get(SELECTORS.MAIN_CONTENT_ID).within(() => {
            const selector = SELECTORS.SINGLE_PRODUCT
            // count all products items on the page
            const counter = Cypress.$(selector).length
            // check picture of counted items
            for (let i = 0; i < counter; i++) {
                cy.get(SELECTORS.SINGLE_PRODUCT).eq(i).find("img").should('be.visible');
            }
        })
    })
})