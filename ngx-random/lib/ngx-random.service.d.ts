import * as i0 from "@angular/core";
export declare class NgxRandomService {
    constructor();
    /**
     * Generates alphabets string of specified length
     *
     * Arguments:
     *  - length : number
     *
     *  (_Use as per your requirement_)
     *
     * ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
     */
    generateString(length: number): string;
    /**
     * Generates numbers of specified length
     *
     * Arguments:
     *  - length : number
     *
     *  (_Use as per your requirement_)
     *
     * 0123456789
     */
    generateNumber(length: number): number;
    /**
     * Generates lowercase charaters string of specified length
     *
     * Arguments:
     *  - length : number
     *
     *  (_Use as per your requirement_)
     *
     * abcdefghijklmnopqrstuvwxyz
     */
    generateLowerAlphabetsString(length: number): string;
    /**
     * Generates uppercase charaters string of specified length
     *
     * Arguments:
     *  - length : number
     *
     *  (_Use as per your requirement_)
     *
     * ABCDEFGHIJKLMNOPQRSTUVWXYZ
     */
    generateUpperAlphabetsString(length: number): string;
    /**
     * Generates Mixed digits | symbols | charaters - string of specified length
     *
     * Arguments:
     *  - length : number
     *
     *  (_Use as per your requirement_)
     *
     * !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
     */
    generateMixedString(length: number): string;
    /**
     * Generates Hashed string of length - 16
     *
     *
     * ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
     */
    generatHashString(): string;
    /**
     * Generates secured hashed string of length - 16
     *
     *
     * ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789
     */
    generatSecuredHashString(): string;
    private generateChunkString;
    /**
  * Generates random password string of specified length
  *
  Arguments:
  *  - length : number
  *
  *  (_Use as per your requirement_)
  *
  */
    generatePasswordString(length: number): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxRandomService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxRandomService>;
}
