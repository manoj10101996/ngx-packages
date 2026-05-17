import * as i0 from '@angular/core';

declare class NgxLogsService {
    /**
     * Logs current page info with all require information's (URL, PATH etc.)
     */
    log(text: string): void;
    /**
     * Logs Error message for custom strings as console logs
     */
    error(text: string): void;
    /**
     * Logs Error message for custom strings as console logs
     */
    warn(text: string): void;
    /**
     * Same as console logs
     */
    info(text: string): void;
    /**
     * Clears the entire console logs
     */
    clear(): void;
    /**
     * Console logs for iterations with index value - Can be used with for , forin, foreach, do..while
     */
    counter(text: string): void;
    /**
     * Logs current page info with all require information's (URL, PATH etc.)
     */
    directory(): void;
    /**
     * Displays array or JSON of array/dictionary input as a table in console
     */
    table(array: any): void;
    /**
     * Logs current page info with all require information's (URL, PATH etc.)
     */
    private currentTime;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxLogsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxLogsService>;
}

declare class NgxLogsComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxLogsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxLogsComponent, "lib-ngx-logs", never, {}, {}, never, never, true, never>;
}

export { NgxLogsComponent, NgxLogsService };
