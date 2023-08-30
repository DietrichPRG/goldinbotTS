import { By, WebElement } from "selenium-webdriver";
import { Browser } from "../Browser";

export class FeedPage {
    private readonly searchInputXPath : string = "//input[@aria-label='Pesquisar' or 'Search']";
    private readonly reactionsCountButtonXPath : string = "//span[@class='social-details-social-counts__reactions-count'] | //span[@class='social-details-social-counts__social-proof-text']";
    private readonly likeButtonXPath : string = "//button[starts-with(@aria-label, 'React Like to')] | //button[starts-with(@aria-label, 'Reagir com gostar')]";

    constructor(private browser : Browser) {};

    private searchInput = async () : Promise<WebElement> => await this.browser.driver.findElement(By.xpath(this.searchInputXPath));

    private reactionsCountButton = async () : Promise<WebElement> => await this.browser.driver.findElement(By.xpath(this.reactionsCountButtonXPath));

    private likeButton = async () : Promise<WebElement> => await this.browser.driver.findElement(By.xpath(this.likeButtonXPath));

    public writeSearchInput = async(search : string) => {
        ((await this.searchInput()).sendKeys(search));
    }

    public getReactionsCount = async() => {
        return ((await this.reactionsCountButton()).getText());
    }

    public pressLikeButton = async() => {
        ((await this.likeButton()).click());
    }
}