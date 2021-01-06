describe('TS1 - score', () => {
    
   var testedApp = 'http://localhost/index.html'
   //var testedApp = 'https://test-stfu-applifting.herokuapp.com/test' 
   
   var clicks = 1 //number of times the button will be clicked - to be adjusted
   var button = 'button'
   var teamscoreSel = '.sc-chPdSV.gvLmyx>p:last' //CSS sel for teamscore

    it('TS1/TC1 - score matches clickcount', () =>
    {
        cy.visit(testedApp)
        cy.get(button).should('be.visible')

        var getscore 
        cy.get(teamscoreSel).should((score) => {
            getscore = parseInt(score.text())
            //expect(parseInt(score.text())).to.equal(getscore)
        })

        for(let i = 0; i < clicks; i++){
            cy.get(button).click()
        }
        

        cy.get(teamscoreSel).should((score) => {
            var finalscore = getscore+clicks
            expect(parseInt(score.text())).to.equal(finalscore)
          })

    })
    
})