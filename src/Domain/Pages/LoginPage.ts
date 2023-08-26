import { By, WebElement } from "selenium-webdriver";
import { Browser } from "../Browser";

export class LoginPage {
    private readonly loginInputXPath : string = "//input[@Id='username']";
    private readonly passwordInputXPath : string = "//input[@Id='password']";
    private readonly loginButtonXPath : string = "//button[@aria-label='Sign in' or @aria-label='Entrar']";

    private loginInput = async () : Promise<WebElement> => await this.browser.driver.findElement(By.xpath(this.loginInputXPath));

    private passwordInput = async () : Promise<WebElement> => await this.browser.driver.findElement(By.xpath(this.passwordInputXPath));

    private loginButton = async () : Promise<WebElement> => await this.browser.driver.findElement(By.xpath(this.loginButtonXPath));

    constructor(private browser : Browser) {}

    public writeLoginInput = async(userName : string) => {
        ((await this.loginInput()).sendKeys(userName));
    }

    public writePasswordInput = async(password : string) => {
        ((await this.passwordInput()).sendKeys(password));
    }

    public pressLoginButton = async() => {
        ((await this.loginButton()).click());
    }
}