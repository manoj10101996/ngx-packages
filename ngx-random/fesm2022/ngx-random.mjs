import * as i0 from '@angular/core';
import { Injectable, Component } from '@angular/core';

class NgxRandomService {
    constructor() { }
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
    generateString(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
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
    generateNumber(length) {
        var result = '';
        var characters = '0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return +result;
    }
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
    generateLowerAlphabetsString(length) {
        var result = '';
        var characters = 'abcdefghijklmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
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
    generateUpperAlphabetsString(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
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
    generateMixedString(length) {
        var result = '';
        var characters = '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    /**
     * Generates Hashed string of length - 16
     *
     *
     * ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
     */
    generatHashString() {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < 16; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return this.generateChunkString(result, 4);
    }
    /**
     * Generates secured hashed string of length - 16
     *
     *
     * ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789
     */
    generatSecuredHashString() {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < 16; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return this.generateChunkString(result, 4);
    }
    generateChunkString(str, len) {
        const size = Math.ceil(str.length / len);
        const r = Array(size);
        let offset = 0;
        for (let i = 0; i < size; i++) {
            r[i] = str.substr(offset, len);
            offset += len;
        }
        return r.join('-');
    }
    /**
  * Generates random password string of specified length
  *
  Arguments:
  *  - length : number
  *
  *  (_Use as per your requirement_)
  *
  */
    generatePasswordString(length) {
        var result = '';
        var characters = '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxRandomService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxRandomService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxRandomService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class NgxRandomComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxRandomComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.8", type: NgxRandomComponent, isStandalone: true, selector: "lib-ngx-random", ngImport: i0, template: `
    <p>
      ngx-random works!
    </p>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxRandomComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-ngx-random', template: `
    <p>
      ngx-random works!
    </p>
  `, standalone: true }]
        }] });

/*
 * Public API Surface of ngx-random
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxRandomComponent, NgxRandomService };
//# sourceMappingURL=ngx-random.mjs.map
