describe('Картинки к товарам на Яндекс Лавке', () => {
    it("visit Яндекс лавка", () => {
        cy.visit ("https://lavka.yandex.ru/");
        cy.viewport(1920,1080);
        cy.location('protocol').should('eq','https:');
        cy.title().should('eq', 'Заказать продукты с быстрой доставкой на дом из Яндекс Лавки')
        cy.get('input[type="search"]').type('Овощи')
        cy.get('div[class="p159305c"]').each((element, index,list)=>{
            expect(Cypress.$(element)).to.be.visible;
            expect(index).to.be.greaterThan(-1);
            expect(list).to.have.length(1);
                    });
                });
            
                });
            