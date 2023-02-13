
let a = '&#128075 Coucou'
let Nom = window.prompt('Quel est votre Nom ?', "Tapez votre Nom ici")

function askName() {
console.log(Nom)
            
document.body.innerHTML += "<h2>" + " " + a + " " + Nom + "</h2>"
            
 }

        let x = 2023
        let anneeDenaissance = parseInt(window.prompt ('Vous etes nee en ? ', "Taper votre annee de naissance ici" ) )
        let age = x - anneeDenaissance

        function askBirthYear() {
    
            console.log(age)
            document.body.innerHTML += "<h3>" + "vous avez " + age + " ans" + "</h3>"
            
            
        }
        
        askName()
        
        askBirthYear()

        

   