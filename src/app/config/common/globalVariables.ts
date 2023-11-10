export class globalVariables {
    private static _apiUrl: string = "http://localhost:9999";
    public static get apiUrl(): string {
        return globalVariables._apiUrl;
    }
}