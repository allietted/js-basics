// There are 3 main ways to create conditionals in code:
// 1. if (comes in many flavors)
// 2. switch (great for many different conditions)
// 3. ternary (short hand for if / else) 



//First lets set up some variables

const age = 19; 

//lets set up the most basic if statement:

if (age >= 18)  {
 console.log('Welcome. Come on in!')
}

//What about people that aren't yet 18?
//Let's use an if....else

if (age >= 21) {
    console.log('Drink up!')
} else { console.log ('Here\'s some water')
}

//What if we have more than 2 possibilities?
// Then we can use an else if

const hour = 9;

if (hour < 11) {console.log ('Good Morning') 
} else if (hour < 17) { console.log ('Good Afternoon')}
else if (hour <22) {console.log ('Good Evening')}
else { console.log ('Go To Bed')}

//When dealing with many different conditions, we often use a switch

 const yourpet = 'dog'

 switch (yourpet) {
    case 'dog':
        console.log ('woof woof')
    break
    case 'cat': 
    console.log ('meow meow')
    break
    case 'bird': 
    console.log ('Charlie, want a cracker')
    break
    case 'fox': 
    console.log ('Hello food!')
    break
    case 'turle':
    console.log ('Love you Turtle')
    break
    case 'raccoon':
    case 'lizard':
    case 'snake':
        console.log ('crazy pet')   
        break
        case 'ferret':
        case 'owl':
    default:
       console.log ('Never heard of that') 
        break
}

//For more on ternaries,look at ternary.js

