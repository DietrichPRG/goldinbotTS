//const {Builder, WebDriver}  = require('selenium-webdriver');
import { Builder, By, Key, until, WebDriver } from 'selenium-webdriver';
const chrome = require('selenium-webdriver/chrome');

export class Browser {
    public driver: WebDriver;

    constructor() {
        this.driver = new Builder()
            .forBrowser('chrome')
            .build();

        this.driver.manage().window().maximize();
    }
}