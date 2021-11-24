export class BaseUrls {

    public static get base(): string {
        return 'http://localhost:8080/';
    }

    public static get basePolitica(): string {
        return this.base + 'privacy_policy';
    }

    public static get baseTermos(): string {
        return this.base + 'termos';
    }

}
