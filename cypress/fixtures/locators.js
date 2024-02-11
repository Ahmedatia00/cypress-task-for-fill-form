const formPage = {
 name : {idLocator:'[data-testid="ContactName"]'},
 mail : {idLocator:'[data-testid="ContactEmail"]'},
 phone : {idLocator:'[data-testid="ContactPhone"]'},
 subject : {idLocator:'[data-testid="ContactSubject"]'},
 Description : {idLocator:'[data-testid="ContactDescription"]'},
 submitButton : {idLocator:'#submitContact'},
 thanksText: {idLocator:':nth-child(2) > div > h2'},
}

module.exports={formPage}