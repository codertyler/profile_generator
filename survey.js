const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What\'s your name? Nicknames are also acceptable :\)   ', (name) => {
  rl.question('What\'s an activity you like doing?    ', (activity) => {
    rl.question('What do you listen to while doing that?    ', (listen) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)    ', (meal) => {
        rl.question('What\'s your favourite thing to eat for that meal?   ', (favThingToEat) => {
          rl.question('Which sport is your absolute favourite?    ', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!    ', (superpower) => {
              console.log(`Woa, your name is" ${name}, and you like doing ${activity} while listening to ${listen}. Your favourite meal is of the day is ${meal}, and eating ${favThingToEat}. Your favourite sport is ${sport}, and you're amazing at ${superpower} `);
                rl.close();
            });
          });
        });
      });
    });
  });
});








