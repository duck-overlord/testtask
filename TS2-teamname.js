describe('TS2 - teamname', () => {

    var testedApp = 'https://test-stfu-applifting.herokuapp.com/'

    //input
    var nameCorrect = 'test'
    var nameInvalid = ' '
    //errors
    var errInvalid = 'Team name contains forbidden characters'
    //CSS selectors
    var input = 'input'
    var button = 'button'
    var errInvSel = '.sc-gzVnrw.hEUWbM'

   it('TS2/1 - valid name', () => { 
        cy.visit(testedApp)
        cy.get(input).type(nameCorrect, {force: true})
        cy.get(button).click()
        cy.url().should('eq', testedApp.concat(nameCorrect))
    })

    it('TS2/2 - invalid name', () =>
    {
        cy.visit(testedApp)
        cy.get(input).type(nameInvalid, {force: true})
        cy.get(button).click()

        cy.get(errInvSel).should((error) => {
            expect(error.text()).to.equal(errInvalid)
        })

        cy.url().should('eq', testedApp)
    })
})