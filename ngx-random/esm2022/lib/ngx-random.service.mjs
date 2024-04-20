import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class NgxRandomService {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxRandomService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxRandomService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxRandomService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXJhbmRvbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXJhbmRvbS9zcmMvbGliL25neC1yYW5kb20uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQyxNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLGdCQUFlLENBQUM7SUFFaEI7Ozs7Ozs7OztPQVNHO0lBRUksY0FBYyxDQUFDLE1BQWM7UUFDbEMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksVUFBVSxHQUNaLGdFQUFnRSxDQUFDO1FBQ25FLElBQUksZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUN6QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQy9CLE1BQU0sSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLGdCQUFnQixDQUFDLENBQUMsQ0FBQztTQUMzRTtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFFSSxjQUFjLENBQUMsTUFBYztRQUNsQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxVQUFVLEdBQUcsWUFBWSxDQUFDO1FBQzlCLElBQUksZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUN6QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQy9CLE1BQU0sSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLGdCQUFnQixD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TUFBTTs7MkZBRVAsZ0JBQWdCO2tCQUg1QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE5neFJhbmRvbVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhbHBoYWJldHMgc3RyaW5nIG9mIHNwZWNpZmllZCBsZW5ndGhcbiAgICpcbiAgICogQXJndW1lbnRzOlxuICAgKiAgLSBsZW5ndGggOiBudW1iZXJcbiAgICpcbiAgICogIChfVXNlIGFzIHBlciB5b3VyIHJlcXVpcmVtZW50XylcbiAgICpcbiAgICogQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODlcbiAgICovXG5cbiAgcHVibGljIGdlbmVyYXRlU3RyaW5nKGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGNoYXJhY3RlcnMgPVxuICAgICAgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5JztcbiAgICB2YXIgY2hhcmFjdGVyc0xlbmd0aCA9IGNoYXJhY3RlcnMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdCArPSBjaGFyYWN0ZXJzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFyYWN0ZXJzTGVuZ3RoKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGVzIG51bWJlcnMgb2Ygc3BlY2lmaWVkIGxlbmd0aFxuICAgKlxuICAgKiBBcmd1bWVudHM6XG4gICAqICAtIGxlbmd0aCA6IG51bWJlclxuICAgKlxuICAgKiAgKF9Vc2UgYXMgcGVyIHlvdXIgcmVxdWlyZW1lbnRfKVxuICAgKlxuICAgKiAwMTIzNDU2Nzg5XG4gICAqL1xuXG4gIHB1YmxpYyBnZW5lcmF0ZU51bWJlcihsZW5ndGg6IG51bWJlcik6IG51bWJlciB7XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHZhciBjaGFyYWN0ZXJzID0gJzAxMjM0NTY3ODknO1xuICAgIHZhciBjaGFyYWN0ZXJzTGVuZ3RoID0gY2hhcmFjdGVycy5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0ICs9IGNoYXJhY3RlcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJhY3RlcnNMZW5ndGgpKTtcbiAgICB9XG4gICAgcmV0dXJuICtyZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGVzIGxvd2VyY2FzZSBjaGFyYXRlcnMgc3RyaW5nIG9mIHNwZWNpZmllZCBsZW5ndGhcbiAgICpcbiAgICogQXJndW1lbnRzOlxuICAgKiAgLSBsZW5ndGggOiBudW1iZXJcbiAgICpcbiAgICogIChfVXNlIGFzIHBlciB5b3VyIHJlcXVpcmVtZW50XylcbiAgICpcbiAgICogYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpcbiAgICovXG4gIHB1YmxpYyBnZW5lcmF0ZUxvd2VyQWxwaGFiZXRzU3RyaW5nKGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGNoYXJhY3RlcnMgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonO1xuICAgIHZhciBjaGFyYWN0ZXJzTGVuZ3RoID0gY2hhcmFjdGVycy5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0ICs9IGNoYXJhY3RlcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJhY3RlcnNMZW5ndGgpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgdXBwZXJjYXNlIGNoYXJhdGVycyBzdHJpbmcgb2Ygc3BlY2lmaWVkIGxlbmd0aFxuICAgKlxuICAgKiBBcmd1bWVudHM6XG4gICAqICAtIGxlbmd0aCA6IG51bWJlclxuICAgKlxuICAgKiAgKF9Vc2UgYXMgcGVyIHlvdXIgcmVxdWlyZW1lbnRfKVxuICAgKlxuICAgKiBBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWlxuICAgKi9cbiAgcHVibGljIGdlbmVyYXRlVXBwZXJBbHBoYWJldHNTdHJpbmcobGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgY2hhcmFjdGVycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWic7XG4gICAgdmFyIGNoYXJhY3RlcnNMZW5ndGggPSBjaGFyYWN0ZXJzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHQgKz0gY2hhcmFjdGVycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcmFjdGVyc0xlbmd0aCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBNaXhlZCBkaWdpdHMgfCBzeW1ib2xzIHwgY2hhcmF0ZXJzIC0gc3RyaW5nIG9mIHNwZWNpZmllZCBsZW5ndGhcbiAgICpcbiAgICogQXJndW1lbnRzOlxuICAgKiAgLSBsZW5ndGggOiBudW1iZXJcbiAgICpcbiAgICogIChfVXNlIGFzIHBlciB5b3VyIHJlcXVpcmVtZW50XylcbiAgICpcbiAgICogIVxcXCIjJCUmJygpKissLS4vOjs8PT4/QFtcXF1eX2B7fH1+QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODlcbiAgICovXG4gIHB1YmxpYyBnZW5lcmF0ZU1peGVkU3RyaW5nKGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGNoYXJhY3RlcnMgPVxuICAgICAgJyFcIiMkJSZcXCcoKSorLC0uLzo7PD0+P0BbXV5fYHt8fX5BQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XG4gICAgdmFyIGNoYXJhY3RlcnNMZW5ndGggPSBjaGFyYWN0ZXJzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHQgKz0gY2hhcmFjdGVycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcmFjdGVyc0xlbmd0aCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBIYXNoZWQgc3RyaW5nIG9mIGxlbmd0aCAtIDE2XG4gICAqXG4gICAqXG4gICAqIEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5XG4gICAqL1xuICBwdWJsaWMgZ2VuZXJhdEhhc2hTdHJpbmcoKTogc3RyaW5nIHtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGNoYXJhY3RlcnMgPVxuICAgICAgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5JztcbiAgICB2YXIgY2hhcmFjdGVyc0xlbmd0aCA9IGNoYXJhY3RlcnMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7IGkrKykge1xuICAgICAgcmVzdWx0ICs9IGNoYXJhY3RlcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJhY3RlcnNMZW5ndGgpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVDaHVua1N0cmluZyhyZXN1bHQsIDQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBzZWN1cmVkIGhhc2hlZCBzdHJpbmcgb2YgbGVuZ3RoIC0gMTZcbiAgICpcbiAgICpcbiAgICogQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVowMTIzNDU2Nzg5XG4gICAqL1xuICBwdWJsaWMgZ2VuZXJhdFNlY3VyZWRIYXNoU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHZhciBjaGFyYWN0ZXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaMDEyMzQ1Njc4OSc7XG4gICAgdmFyIGNoYXJhY3RlcnNMZW5ndGggPSBjaGFyYWN0ZXJzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyBpKyspIHtcbiAgICAgIHJlc3VsdCArPSBjaGFyYWN0ZXJzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFyYWN0ZXJzTGVuZ3RoKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmdlbmVyYXRlQ2h1bmtTdHJpbmcocmVzdWx0LCA0KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVDaHVua1N0cmluZyhzdHI6IGFueSwgbGVuOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IHNpemUgPSBNYXRoLmNlaWwoc3RyLmxlbmd0aCAvIGxlbik7XG4gICAgY29uc3QgciA9IEFycmF5KHNpemUpO1xuICAgIGxldCBvZmZzZXQgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgIHJbaV0gPSBzdHIuc3Vic3RyKG9mZnNldCwgbGVuKTtcbiAgICAgIG9mZnNldCArPSBsZW47XG4gICAgfVxuXG4gICAgcmV0dXJuIHIuam9pbignLScpO1xuICB9XG5cbiAgLyoqXG4qIEdlbmVyYXRlcyByYW5kb20gcGFzc3dvcmQgc3RyaW5nIG9mIHNwZWNpZmllZCBsZW5ndGhcbipcbkFyZ3VtZW50czpcbiogIC0gbGVuZ3RoIDogbnVtYmVyXG4qXG4qICAoX1VzZSBhcyBwZXIgeW91ciByZXF1aXJlbWVudF8pXG4qXG4qL1xuXG4gIHB1YmxpYyBnZW5lcmF0ZVBhc3N3b3JkU3RyaW5nKGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGNoYXJhY3RlcnMgPSAnIVwiIyQlJlxcJygpKissLS4vOjs8PT4/QFtdXl9ge3x9fic7XG4gICAgdmFyIGNoYXJhY3RlcnNMZW5ndGggPSBjaGFyYWN0ZXJzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHQgKz0gY2hhcmFjdGVycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcmFjdGVyc0xlbmd0aCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iXX0=