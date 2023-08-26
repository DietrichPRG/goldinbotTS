import { Browser } from "../Domain/Browser";
import { LoginPage } from "../Domain/Pages/LoginPage";

export class LoginUseCase {
    private readonly loginUrl : string = "https://linkedin.com/login";
    private readonly loginPage : LoginPage;

    constructor(private browser : Browser) {
        this.loginPage = new LoginPage(browser);

        this.browser.driver.get(this.loginUrl).then(x => console.log("Login page opened"));
    }

    public login = async (userName : string, password : string) => {
        await this.loginPage.writeLoginInput(userName);
        await this.loginPage.writePasswordInput(password);
        await this.loginPage.pressLoginButton();
    }
}