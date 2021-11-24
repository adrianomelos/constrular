export class BaseUrls {

    public static get base(): string {
        return 'http://192.168.0.102:8080/';
    }

    public static get basePolitica(): string {
        return this.base + 'politica/1';
    }

    public static get baseTermos(): string {
        return this.base + 'termos/1';
    }

    public static get baseFaleConosco(): string {
        return this.base + 'contato';
    }

}
