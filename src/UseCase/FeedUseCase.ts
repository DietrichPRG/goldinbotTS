import { Browser } from "../Domain/Browser";
import { FeedPage } from "../Domain/Pages/FeedPage";

export class FeedUseCase {
    private readonly feedUrl : string = "https://linkedin.com/feed";
    private readonly feedPage : FeedPage;

    constructor(private browser : Browser) {
        this.feedPage = new FeedPage(browser);

        this.browser.driver.get(this.feedUrl).then(x => console.log("Feed page opened"));
    }

    public search = async (search : string) => {
        await this.feedPage.writeSearchInput(search);
    }

    public getReactionsCount = async () => {
        return await this.feedPage.getReactionsCount();
    }

    public like = async () => {
        await this.feedPage.pressLikeButton();
    }
}