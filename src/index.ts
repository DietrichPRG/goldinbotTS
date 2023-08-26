import { Browser } from "./Domain/Browser";
import { LoginUseCase } from "./UseCase/LoginUseCase";

const browser : Browser = new Browser();
const loginUseCase = new LoginUseCase(browser);
const userName = process.env.linkedinUser || 'NaoVeioNada';
const password = process.env.linkedinPass ?? 'NaoVeioNada';


loginUseCase.login(userName, password);

async function main() {
    const input = await prompt("Enter something: ");
    console.log("You entered:", input);
  }
  
  async function prompt(question: string): Promise<string> {
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    return new Promise<string>((resolve) => {
      rl.question(question, (answer: string | PromiseLike<string>) => {
        rl.close();
        resolve(answer);
      });
    });
  }
  
  main();