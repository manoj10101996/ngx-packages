import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class NgxArrayService {
    constructor() { }
    /**
     * _min: Returns the minimum value in the array
     * @param arr: Array of values of any type[].
     */
    _min(arr) {
        try {
            if (!Array.isArray(arr)) {
                throw new Error('_min - Invalid Arguments: Array / Item should be valid');
            }
            return Math.min.apply(null, arr);
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     * _max: Returns the maximum value in the array
     * @param arr: Array of values of any type[].
     */
    _max(arr) {
        try {
            if (!Array.isArray(arr)) {
                throw new Error('_max - Invalid Arguments: Array / Item should be valid');
            }
            return Math.max.apply(null, arr);
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     * _sortNumbers: method sorts the elements of an numbers array in place and returns the sorted array. The default sort order is ascending
     ** Use only array of numbers (or) strings for better result
     * @param arr: Array of values of any type[].
     * @param mode: 1 for ascending , -1 for descending - Default 1
     */
    _sortNumbers(arr, mode = 1) {
        try {
            if (!Array.isArray(arr)) {
                throw new Error('_sortNumbers - Invalid Arguments: Array / Item should be valid');
            }
            return mode === 1 ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     * _sort: method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending
     ** Use only array of numbers (or) strings for better result
     * @param arr: Array of values of any type[].
     */
    _sort(arr) {
        try {
            if (!Array.isArray(arr)) {
                throw new Error('_sort - Invalid Arguments: Array / Item should be valid');
            }
            return arr.sort();
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     * _reverse: Returns the reverse ordered array
     * @param arr: Array of values of any type[].
     */
    _reverse(arr) {
        try {
            if (!Array.isArray(arr)) {
                throw new Error('_reverse - Invalid Arguments: Array / Item should be valid');
            }
            return arr.reverse();
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     * _join: New string by concatenating all of the elements in an array
     * @param arr: Array of values of any type[].
     * @param joinBy: Concatenate by the string example = (-). Default is ''
     */
    _join(arr, joinBy = '') {
        try {
            if (!Array.isArray(arr)) {
                throw new Error('_join - Invalid Arguments: Array / Item should be valid');
            }
            return arr.join(joinBy);
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     * _isValidArray: Checks whether the passed item is array or not
     * * return true if valid
     * * return false if not valid
     * @param arr: Array of values of any type[].
     */
    _isValidArray(arr) {
        try {
            return Array.isArray(arr);
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     * _indexOfFrom: Returns the index of item from given array from starting at particular index
     * * return index of exists
     * * return -1 if not exists
     * @param arr: Array of values of any type[].
     * @param item: Searchable item in array of any type
     * @param start: Starting index
     */
    _indexOfFrom(arr, item, start) {
        try {
            if (!item || !Array.isArray(arr)) {
                throw new Error('_indexOfFrom - Invalid Arguments: Array / Item should be valid');
            }
            return arr.indexOf(item, start);
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     * _indexOf: Returns the index of item from given array
     * * return index of exists
     * * return -1 if not exists
     * @param arr: Array of values of any type[].
     * @param item: Searchable item in array of any type
     */
    _indexOf(arr, item) {
        try {
            if (!item || !Array.isArray(arr)) {
                throw new Error('_indexOf - Invalid Arguments: Array / Item should be valid');
            }
            return arr.indexOf(item);
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     * _hasAt: Checks whether the array contains the item at particular given index
     * * return true if exists
     * * return false if not exists
     * @param arr: Array of values of any type[].
     * @param item: Searchable item in array of any type
     * @param positionIndex: Starting index
     */
    _hasAt(arr, item, positionIndex) {
        try {
            if (!item || !Array.isArray(arr)) {
                throw new Error('_hasAt - Invalid Arguments: Array / Item should be valid');
            }
            return arr.includes(item, positionIndex);
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     * _has: Checks whether the array contains the item
     * * return true if exists
     * * return false if not exists
     * @param arr: Array of values of any type[].
     * @param item: Searchable item in array of any type
     */
    _has(arr, item) {
        try {
            if (!item || !Array.isArray(arr)) {
                throw new Error('_has - Invalid Arguments: Array / Item should be valid');
            }
            return arr.includes(item);
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     * _filterNumbersArray: Filters integer array for an given condition and returns a new array.
     * * return filtered new array
     * @param arr: Array of values of any type [].
     * @param condition: Possible conditions  ('>' , '<' , '>=', '<=' , '!==')
     * @param expected: Resulted value should be in
     */
    _filterNumbersArray(arr, condition, expected) {
        try {
            if (!Array.isArray(arr)) {
                throw new Error('_filterNumbersArray - Invalid Arguments: Invalid length of Array');
            }
            switch (condition) {
                case '>':
                    return arr.filter((value) => value > expected);
                case '<':
                    return arr.filter((value) => value < expected);
                case '<=':
                    return arr.filter((value) => value <= expected);
                case '>=':
                    return arr.filter((value) => value >= expected);
                case '!=':
                    return arr.filter((value) => value !== expected);
                default:
                    throw new Error("Invalid condition: Invalid type of condition passed use ('>' , '<' , '>=', '<=' , '!==' )");
            }
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     * _fill: method shallow copies part of an array to another location in the same array and returns it without modifying its length method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
     * * Returns new array
     * @param arr: Array of values of any type [].
     * @param value: value to be filled in array
     * @param from: Start from this position
     * @param to: End at this position
     */
    _fill(arr, value, from, to) {
        try {
            if (!from || !Array.isArray(arr)) {
                throw new Error('_fill - Invalid Arguments: Array / Item should be valid');
            }
            else if (from > arr.length - 1 || to > arr.length - 1) {
                throw new Error('_fill - Invalid index: Start / End index out of range');
            }
            return arr.fill(value, from, to);
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     * _copyWithin: method shallow copies part of an array to another location in the same array and returns it without modifying its length
     * return new array
     * @param arr: Array of values of any type [].
     * @param from: Start from this position
     * @param to: End at this position
  
     */
    _copyWithin(arr, from, to) {
        try {
            if (!from || !Array.isArray(arr)) {
                throw new Error('_copyWithin - Invalid Arguments: Array / Item should be valid');
            }
            else if (from > arr.length - 1 || to > arr.length - 1) {
                throw new Error('_copyWithin - Invalid index: Start / End index out of range');
            }
            return arr.copyWithin(from, to);
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     * _concat: method is used to merge two or more arrays.
     * This method does not change the existing arrays, but instead returns a new array.
     * * return new concatenated array
     * @param args: Multiple Array of values at any length .
     */
    _concat(...args) {
        try {
            let concatArray = [];
            args.forEach((element) => {
                if (element.length === -1) {
                    throw new Error('_concat - Invalid Arguments: Invalid Array');
                }
                else {
                    for (const iterator of element) {
                        concatArray.push(iterator);
                    }
                }
            });
            return concatArray;
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     * _length: Returns the length of the given array
     * * return length of the array
     * @param arr: Array of values of any type [].
     */
    _length(arr) {
        try {
            if (!Array.isArray(arr)) {
                throw new Error('_length - Invalid Arguments: Invalid length of Array');
            }
            return arr.length || 0;
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     * _copy: Duplicates an array
     * * returns same array as result
     * @param arr: Array of values of any type [].
     */
    _copy(arr) {
        return [...arr];
    }
    /**
     * _slice: returns a shallow copy of a portion of an array into a new array object selected from start to end
     * * return removed array
     * @param arr: Array of values of any type [].
     * @param start: Start from this position
     * @param end: End at this position , Default is length of the array
     */
    _slice(arr, start, end = arr.length - 1) {
        try {
            if (!start || !Array.isArray(arr)) {
                throw new Error('_slice - Invalid Arguments: Array / Item should be valid');
            }
            else if (start > arr.length - 1 || end > arr.length - 1) {
                throw new Error('_slice - Invalid index: Start / End index out of range');
            }
            return arr.slice(start, end);
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     * _splice: Cut of / Splice of an items at particular valid index
     * * return removed array
     * @param arr: Array of values of any type [].
     * @param start: Start from this position
     * @param end: End at this position , Default is 1
     */
    _splice(arr, start, end = 1) {
        try {
            if (!start || !Array.isArray(arr)) {
                throw new Error('_splice - Invalid Arguments: Array / Item should be valid');
            }
            else if (start > arr.length - 1 || end > arr.length - 1) {
                throw new Error('_splice - Invalid index: Start / End index out of range');
            }
            return arr.splice(start, end);
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     *  _shift: It will remove the array item at beginning & return item
     * * return the item if removed from array at beginning
     * @param arr: Array of values of any type [].
     */
    _shift(arr) {
        try {
            if (!Array.isArray(arr)) {
                throw new Error('_shift - Invalid Arguments: Array should be valid');
            }
            return arr.shift();
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     *  _shift: method adds one or more elements to the beginning of an array and returns the new length of the array.
     ** Use spread operator while passing array [...arr]
     * @param arr: Array of values of any type []. use spread operator [...arr]
     * @param args: Any length of values seperated by comma to unshift in array example _unshift(array,1,2,3,4,5...)
     */
    _unshift(arr, ...args) {
        try {
            if (!Array.isArray(arr)) {
                throw new Error('_unshift - Invalid Arguments: Array should be valid');
            }
            arr.unshift(args);
            return arr.reduce((acc, val) => acc.concat(val), []);
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     * _pop: It will remove the array item at end & return item
     * * return the item if removed from array at end
     * @param arr: Array of values of any type [].
     */
    _pop(arr) {
        try {
            if (!Array.isArray(arr)) {
                throw new Error('_pop - Invalid Arguments: Array should be valid');
            }
            return arr.pop();
        }
        catch (error) {
            console.trace(error);
        }
    }
    /**
     * _push: It will add / push new item to the array at end & return new array
     * * return the new array.
     * @param arr: Array of values of any type [].
     * @param item: item to be pushed of any type
     */
    _push(arr, item) {
        try {
            if (!item) {
                throw new Error('_push - Invalid Arguments: Item should be valid');
            }
            return [...arr, item];
        }
        catch (error) {
            console.trace(error);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxArrayService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxArrayService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxArrayService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWFycmF5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYXJyYXkvc3JjL2xpYi9uZ3gtYXJyYXkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQyxNQUFNLE9BQU8sZUFBZTtJQUMxQixnQkFBZ0IsQ0FBQztJQUVqQjs7O09BR0c7SUFDSSxJQUFJLENBQUMsR0FBZTtRQUN6QixJQUFJO1lBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3ZCLE1BQU0sSUFBSSxLQUFLLENBQ2Isd0RBQXdELENBQ3pELENBQUM7YUFDSDtZQUNELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2xDO1FBQUMsT0FBTyxLQUFVLEVBQUU7WUFDbkIsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUVyQjtJQUNILENBQUM7SUFDRDs7O09BR0c7SUFDSSxJQUFJLENBQUMsR0FBZTtRQUN6QixJQUFJO1lBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3ZCLE1BQU0sSUFBSSxLQUFLLENBQ2Isd0RBQXdELENBQ3pELENBQUM7YUFDSDtZQUNELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2xDO1FBQUMsT0FBTyxLQUFVLEVBQUU7WUFDbkIsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUVyQjtJQUNILENBQUM7SUFDRDs7Ozs7T0FLRztJQUNJLFlBQVksQ0FBQyxHQUFlLEVBQUUsT0FBcUIsQ0FBQztRQUN6RCxJQUFJO1lBQ0YsSUFBSSxDQUFDLEtBQUss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QUFDLENBQUM7U0FDdkI7UUFBQyxPQUFPLEtBQVUsRUFBRTtZQUNuQixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBRXJCO0lBQ0gsQ0FBQzs4R0FyZVUsZUFBZTtrSEFBZixlQUFlLGNBRmQsTUFBTTs7MkZBRVAsZUFBZTtrQkFIM0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hBcnJheVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIC8qKlxuICAgKiBfbWluOiBSZXR1cm5zIHRoZSBtaW5pbXVtIHZhbHVlIGluIHRoZSBhcnJheVxuICAgKiBAcGFyYW0gYXJyOiBBcnJheSBvZiB2YWx1ZXMgb2YgYW55IHR5cGVbXS5cbiAgICovXG4gIHB1YmxpYyBfbWluKGFycjogQXJyYXk8YW55Pik6IGFueSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnX21pbiAtIEludmFsaWQgQXJndW1lbnRzOiBBcnJheSAvIEl0ZW0gc2hvdWxkIGJlIHZhbGlkJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIE1hdGgubWluLmFwcGx5KG51bGwsIGFycik7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgY29uc29sZS50cmFjZShlcnJvcilcblxuICAgIH1cbiAgfVxuICAvKipcbiAgICogX21heDogUmV0dXJucyB0aGUgbWF4aW11bSB2YWx1ZSBpbiB0aGUgYXJyYXlcbiAgICogQHBhcmFtIGFycjogQXJyYXkgb2YgdmFsdWVzIG9mIGFueSB0eXBlW10uXG4gICAqL1xuICBwdWJsaWMgX21heChhcnI6IEFycmF5PGFueT4pOiBhbnkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ19tYXggLSBJbnZhbGlkIEFyZ3VtZW50czogQXJyYXkgLyBJdGVtIHNob3VsZCBiZSB2YWxpZCdcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBNYXRoLm1heC5hcHBseShudWxsLCBhcnIpO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUudHJhY2UoZXJyb3IpXG5cbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIF9zb3J0TnVtYmVyczogbWV0aG9kIHNvcnRzIHRoZSBlbGVtZW50cyBvZiBhbiBudW1iZXJzIGFycmF5IGluIHBsYWNlIGFuZCByZXR1cm5zIHRoZSBzb3J0ZWQgYXJyYXkuIFRoZSBkZWZhdWx0IHNvcnQgb3JkZXIgaXMgYXNjZW5kaW5nXG4gICAqKiBVc2Ugb25seSBhcnJheSBvZiBudW1iZXJzIChvcikgc3RyaW5ncyBmb3IgYmV0dGVyIHJlc3VsdFxuICAgKiBAcGFyYW0gYXJyOiBBcnJheSBvZiB2YWx1ZXMgb2YgYW55IHR5cGVbXS5cbiAgICogQHBhcmFtIG1vZGU6IDEgZm9yIGFzY2VuZGluZyAsIC0xIGZvciBkZXNjZW5kaW5nIC0gRGVmYXVsdCAxXG4gICAqL1xuICBwdWJsaWMgX3NvcnROdW1iZXJzKGFycjogQXJyYXk8YW55PiwgbW9kZTogbnVtYmVyIHwgYW55ID0gMSk6IEFycmF5PGFueT4gfCBhbnkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ19zb3J0TnVtYmVycyAtIEludmFsaWQgQXJndW1lbnRzOiBBcnJheSAvIEl0ZW0gc2hvdWxkIGJlIHZhbGlkJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1vZGUgPT09IDEgPyBhcnIuc29ydCgoYSwgYikgPT4gYSAtIGIpIDogYXJyLnNvcnQoKGEsIGIpID0+IGIgLSBhKTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBjb25zb2xlLnRyYWNlKGVycm9yKVxuXG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBfc29ydDogbWV0aG9kIHNvcnRzIHRoZSBlbGVtZW50cyBvZiBhbiBhcnJheSBpbiBwbGFjZSBhbmQgcmV0dXJucyB0aGUgc29ydGVkIGFycmF5LiBUaGUgZGVmYXVsdCBzb3J0IG9yZGVyIGlzIGFzY2VuZGluZ1xuICAgKiogVXNlIG9ubHkgYXJyYXkgb2YgbnVtYmVycyAob3IpIHN0cmluZ3MgZm9yIGJldHRlciByZXN1bHRcbiAgICogQHBhcmFtIGFycjogQXJyYXkgb2YgdmFsdWVzIG9mIGFueSB0eXBlW10uXG4gICAqL1xuICBwdWJsaWMgX3NvcnQoYXJyOiBBcnJheTxhbnk+KTogQXJyYXk8YW55PiB8IGFueSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnX3NvcnQgLSBJbnZhbGlkIEFyZ3VtZW50czogQXJyYXkgLyBJdGVtIHNob3VsZCBiZSB2YWxpZCdcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhcnIuc29ydCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUudHJhY2UoZXJyb3IpXG5cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogX3JldmVyc2U6IFJldHVybnMgdGhlIHJldmVyc2Ugb3JkZXJlZCBhcnJheVxuICAgKiBAcGFyYW0gYXJyOiBBcnJheSBvZiB2YWx1ZXMgb2YgYW55IHR5cGVbXS5cbiAgICovXG4gIHB1YmxpYyBfcmV2ZXJzZShhcnI6IEFycmF5PGFueT4pOiBBcnJheTxhbnk+IHwgYW55IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdfcmV2ZXJzZSAtIEludmFsaWQgQXJndW1lbnRzOiBBcnJheSAvIEl0ZW0gc2hvdWxkIGJlIHZhbGlkJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFyci5yZXZlcnNlKCk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgY29uc29sZS50cmFjZShlcnJvcilcblxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBfam9pbjogTmV3IHN0cmluZyBieSBjb25jYXRlbmF0aW5nIGFsbCBvZiB0aGUgZWxlbWVudHMgaW4gYW4gYXJyYXlcbiAgICogQHBhcmFtIGFycjogQXJyYXkgb2YgdmFsdWVzIG9mIGFueSB0eXBlW10uXG4gICAqIEBwYXJhbSBqb2luQnk6IENvbmNhdGVuYXRlIGJ5IHRoZSBzdHJpbmcgZXhhbXBsZSA9ICgtKS4gRGVmYXVsdCBpcyAnJ1xuICAgKi9cbiAgcHVibGljIF9qb2luKGFycjogQXJyYXk8YW55Piwgam9pbkJ5OiBzdHJpbmcgfCBhbnkgPSAnJyk6IHN0cmluZyB8IGFueSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnX2pvaW4gLSBJbnZhbGlkIEFyZ3VtZW50czogQXJyYXkgLyBJdGVtIHNob3VsZCBiZSB2YWxpZCdcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhcnIuam9pbihqb2luQnkpO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUudHJhY2UoZXJyb3IpXG5cbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIF9pc1ZhbGlkQXJyYXk6IENoZWNrcyB3aGV0aGVyIHRoZSBwYXNzZWQgaXRlbSBpcyBhcnJheSBvciBub3RcbiAgICogKiByZXR1cm4gdHJ1ZSBpZiB2YWxpZFxuICAgKiAqIHJldHVybiBmYWxzZSBpZiBub3QgdmFsaWRcbiAgICogQHBhcmFtIGFycjogQXJyYXkgb2YgdmFsdWVzIG9mIGFueSB0eXBlW10uXG4gICAqL1xuICBwdWJsaWMgX2lzVmFsaWRBcnJheShhcnI6IGFueSk6IGJvb2xlYW4gfCBhbnkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShhcnIpO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUudHJhY2UoZXJyb3IpXG5cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogX2luZGV4T2ZGcm9tOiBSZXR1cm5zIHRoZSBpbmRleCBvZiBpdGVtIGZyb20gZ2l2ZW4gYXJyYXkgZnJvbSBzdGFydGluZyBhdCBwYXJ0aWN1bGFyIGluZGV4XG4gICAqICogcmV0dXJuIGluZGV4IG9mIGV4aXN0c1xuICAgKiAqIHJldHVybiAtMSBpZiBub3QgZXhpc3RzXG4gICAqIEBwYXJhbSBhcnI6IEFycmF5IG9mIHZhbHVlcyBvZiBhbnkgdHlwZVtdLlxuICAgKiBAcGFyYW0gaXRlbTogU2VhcmNoYWJsZSBpdGVtIGluIGFycmF5IG9mIGFueSB0eXBlXG4gICAqIEBwYXJhbSBzdGFydDogU3RhcnRpbmcgaW5kZXhcbiAgICovXG4gIHB1YmxpYyBfaW5kZXhPZkZyb20oYXJyOiBBcnJheTxhbnk+LCBpdGVtOiBhbnksIHN0YXJ0OiBudW1iZXIgfCBhbnkpOiBudW1iZXIgfCBhbnkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIWl0ZW0gfHwgIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ19pbmRleE9mRnJvbSAtIEludmFsaWQgQXJndW1lbnRzOiBBcnJheSAvIEl0ZW0gc2hvdWxkIGJlIHZhbGlkJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFyci5pbmRleE9mKGl0ZW0sIHN0YXJ0KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBjb25zb2xlLnRyYWNlKGVycm9yKVxuXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIF9pbmRleE9mOiBSZXR1cm5zIHRoZSBpbmRleCBvZiBpdGVtIGZyb20gZ2l2ZW4gYXJyYXlcbiAgICogKiByZXR1cm4gaW5kZXggb2YgZXhpc3RzXG4gICAqICogcmV0dXJuIC0xIGlmIG5vdCBleGlzdHNcbiAgICogQHBhcmFtIGFycjogQXJyYXkgb2YgdmFsdWVzIG9mIGFueSB0eXBlW10uXG4gICAqIEBwYXJhbSBpdGVtOiBTZWFyY2hhYmxlIGl0ZW0gaW4gYXJyYXkgb2YgYW55IHR5cGVcbiAgICovXG4gIHB1YmxpYyBfaW5kZXhPZihhcnI6IEFycmF5PGFueT4sIGl0ZW06IGFueSk6IG51bWJlciB8IGFueSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghaXRlbSB8fCAhQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnX2luZGV4T2YgLSBJbnZhbGlkIEFyZ3VtZW50czogQXJyYXkgLyBJdGVtIHNob3VsZCBiZSB2YWxpZCdcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhcnIuaW5kZXhPZihpdGVtKTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBjb25zb2xlLnRyYWNlKGVycm9yKVxuXG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBfaGFzQXQ6IENoZWNrcyB3aGV0aGVyIHRoZSBhcnJheSBjb250YWlucyB0aGUgaXRlbSBhdCBwYXJ0aWN1bGFyIGdpdmVuIGluZGV4XG4gICAqICogcmV0dXJuIHRydWUgaWYgZXhpc3RzXG4gICAqICogcmV0dXJuIGZhbHNlIGlmIG5vdCBleGlzdHNcbiAgICogQHBhcmFtIGFycjogQXJyYXkgb2YgdmFsdWVzIG9mIGFueSB0eXBlW10uXG4gICAqIEBwYXJhbSBpdGVtOiBTZWFyY2hhYmxlIGl0ZW0gaW4gYXJyYXkgb2YgYW55IHR5cGVcbiAgICogQHBhcmFtIHBvc2l0aW9uSW5kZXg6IFN0YXJ0aW5nIGluZGV4XG4gICAqL1xuICBwdWJsaWMgX2hhc0F0KGFycjogQXJyYXk8YW55PiwgaXRlbTogYW55LCBwb3NpdGlvbkluZGV4OiBudW1iZXIgfCBhbnkpOiBib29sZWFuIHwgYW55IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFpdGVtIHx8ICFBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdfaGFzQXQgLSBJbnZhbGlkIEFyZ3VtZW50czogQXJyYXkgLyBJdGVtIHNob3VsZCBiZSB2YWxpZCdcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhcnIuaW5jbHVkZXMoaXRlbSwgcG9zaXRpb25JbmRleCk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgY29uc29sZS50cmFjZShlcnJvcilcblxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBfaGFzOiBDaGVja3Mgd2hldGhlciB0aGUgYXJyYXkgY29udGFpbnMgdGhlIGl0ZW1cbiAgICogKiByZXR1cm4gdHJ1ZSBpZiBleGlzdHNcbiAgICogKiByZXR1cm4gZmFsc2UgaWYgbm90IGV4aXN0c1xuICAgKiBAcGFyYW0gYXJyOiBBcnJheSBvZiB2YWx1ZXMgb2YgYW55IHR5cGVbXS5cbiAgICogQHBhcmFtIGl0ZW06IFNlYXJjaGFibGUgaXRlbSBpbiBhcnJheSBvZiBhbnkgdHlwZVxuICAgKi9cbiAgcHVibGljIF9oYXMoYXJyOiBBcnJheTxhbnk+LCBpdGVtOiBhbnkpOiBib29sZWFuIHwgYW55IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFpdGVtIHx8ICFBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdfaGFzIC0gSW52YWxpZCBBcmd1bWVudHM6IEFycmF5IC8gSXRlbSBzaG91bGQgYmUgdmFsaWQnXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYXJyLmluY2x1ZGVzKGl0ZW0pO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUudHJhY2UoZXJyb3IpXG5cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogX2ZpbHRlck51bWJlcnNBcnJheTogRmlsdGVycyBpbnRlZ2VyIGFycmF5IGZvciBhbiBnaXZlbiBjb25kaXRpb24gYW5kIHJldHVybnMgYSBuZXcgYXJyYXkuXG4gICAqICogcmV0dXJuIGZpbHRlcmVkIG5ldyBhcnJheVxuICAgKiBAcGFyYW0gYXJyOiBBcnJheSBvZiB2YWx1ZXMgb2YgYW55IHR5cGUgW10uXG4gICAqIEBwYXJhbSBjb25kaXRpb246IFBvc3NpYmxlIGNvbmRpdGlvbnMgICgnPicgLCAnPCcgLCAnPj0nLCAnPD0nICwgJyE9PScpXG4gICAqIEBwYXJhbSBleHBlY3RlZDogUmVzdWx0ZWQgdmFsdWUgc2hvdWxkIGJlIGluXG4gICAqL1xuICBwdWJsaWMgX2ZpbHRlck51bWJlcnNBcnJheShcbiAgICBhcnI6IEFycmF5PG51bWJlcj4sXG4gICAgY29uZGl0aW9uOiBhbnksXG4gICAgZXhwZWN0ZWQ6IG51bWJlciB8IGFueVxuICApOiBhbnkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ19maWx0ZXJOdW1iZXJzQXJyYXkgLSBJbnZhbGlkIEFyZ3VtZW50czogSW52YWxpZCBsZW5ndGggb2YgQXJyYXknXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAoY29uZGl0aW9uKSB7XG4gICAgICAgIGNhc2UgJz4nOlxuICAgICAgICAgIHJldHVybiBhcnIuZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUgPiBleHBlY3RlZCk7XG4gICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgIHJldHVybiBhcnIuZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUgPCBleHBlY3RlZCk7XG5cbiAgICAgICAgY2FzZSAnPD0nOlxuICAgICAgICAgIHJldHVybiBhcnIuZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUgPD0gZXhwZWN0ZWQpO1xuXG4gICAgICAgIGNhc2UgJz49JzpcbiAgICAgICAgICByZXR1cm4gYXJyLmZpbHRlcigodmFsdWUpID0+IHZhbHVlID49IGV4cGVjdGVkKTtcblxuICAgICAgICBjYXNlICchPSc6XG4gICAgICAgICAgcmV0dXJuIGFyci5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZSAhPT0gZXhwZWN0ZWQpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIFwiSW52YWxpZCBjb25kaXRpb246IEludmFsaWQgdHlwZSBvZiBjb25kaXRpb24gcGFzc2VkIHVzZSAoJz4nICwgJzwnICwgJz49JywgJzw9JyAsICchPT0nIClcIlxuICAgICAgICAgICk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgY29uc29sZS50cmFjZShlcnJvcilcblxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBfZmlsbDogbWV0aG9kIHNoYWxsb3cgY29waWVzIHBhcnQgb2YgYW4gYXJyYXkgdG8gYW5vdGhlciBsb2NhdGlvbiBpbiB0aGUgc2FtZSBhcnJheSBhbmQgcmV0dXJucyBpdCB3aXRob3V0IG1vZGlmeWluZyBpdHMgbGVuZ3RoIG1ldGhvZCBjaGFuZ2VzIGFsbCBlbGVtZW50cyBpbiBhbiBhcnJheSB0byBhIHN0YXRpYyB2YWx1ZSwgZnJvbSBhIHN0YXJ0IGluZGV4IChkZWZhdWx0IDApIHRvIGFuIGVuZCBpbmRleCAoZGVmYXVsdCBhcnJheS5sZW5ndGgpLiBJdCByZXR1cm5zIHRoZSBtb2RpZmllZCBhcnJheS5cbiAgICogKiBSZXR1cm5zIG5ldyBhcnJheVxuICAgKiBAcGFyYW0gYXJyOiBBcnJheSBvZiB2YWx1ZXMgb2YgYW55IHR5cGUgW10uXG4gICAqIEBwYXJhbSB2YWx1ZTogdmFsdWUgdG8gYmUgZmlsbGVkIGluIGFycmF5XG4gICAqIEBwYXJhbSBmcm9tOiBTdGFydCBmcm9tIHRoaXMgcG9zaXRpb25cbiAgICogQHBhcmFtIHRvOiBFbmQgYXQgdGhpcyBwb3NpdGlvblxuICAgKi9cbiAgcHVibGljIF9maWxsKFxuICAgIGFycjogQXJyYXk8YW55PixcbiAgICB2YWx1ZTogYW55LFxuICAgIGZyb206IG51bWJlciB8IGFueSxcbiAgICB0bzogbnVtYmVyIHwgYW55XG4gICk6IEFycmF5PGFueT4gfCBhbnkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIWZyb20gfHwgIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ19maWxsIC0gSW52YWxpZCBBcmd1bWVudHM6IEFycmF5IC8gSXRlbSBzaG91bGQgYmUgdmFsaWQnXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKGZyb20gPiBhcnIubGVuZ3RoIC0gMSB8fCB0byA+IGFyci5sZW5ndGggLSAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnX2ZpbGwgLSBJbnZhbGlkIGluZGV4OiBTdGFydCAvIEVuZCBpbmRleCBvdXQgb2YgcmFuZ2UnXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYXJyLmZpbGwodmFsdWUsIGZyb20sIHRvKTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBjb25zb2xlLnRyYWNlKGVycm9yKVxuXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIF9jb3B5V2l0aGluOiBtZXRob2Qgc2hhbGxvdyBjb3BpZXMgcGFydCBvZiBhbiBhcnJheSB0byBhbm90aGVyIGxvY2F0aW9uIGluIHRoZSBzYW1lIGFycmF5IGFuZCByZXR1cm5zIGl0IHdpdGhvdXQgbW9kaWZ5aW5nIGl0cyBsZW5ndGhcbiAgICogcmV0dXJuIG5ldyBhcnJheVxuICAgKiBAcGFyYW0gYXJyOiBBcnJheSBvZiB2YWx1ZXMgb2YgYW55IHR5cGUgW10uXG4gICAqIEBwYXJhbSBmcm9tOiBTdGFydCBmcm9tIHRoaXMgcG9zaXRpb25cbiAgICogQHBhcmFtIHRvOiBFbmQgYXQgdGhpcyBwb3NpdGlvblxuXG4gICAqL1xuICBwdWJsaWMgX2NvcHlXaXRoaW4oYXJyOiBBcnJheTxhbnk+LCBmcm9tOiBudW1iZXIgfCBhbnksIHRvOiBudW1iZXIgfCBhbnkpOiBBcnJheTxhbnk+IHwgYW55IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFmcm9tIHx8ICFBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdfY29weVdpdGhpbiAtIEludmFsaWQgQXJndW1lbnRzOiBBcnJheSAvIEl0ZW0gc2hvdWxkIGJlIHZhbGlkJ1xuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChmcm9tID4gYXJyLmxlbmd0aCAtIDEgfHwgdG8gPiBhcnIubGVuZ3RoIC0gMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ19jb3B5V2l0aGluIC0gSW52YWxpZCBpbmRleDogU3RhcnQgLyBFbmQgaW5kZXggb3V0IG9mIHJhbmdlJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFyci5jb3B5V2l0aGluKGZyb20sIHRvKTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBjb25zb2xlLnRyYWNlKGVycm9yKVxuXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIF9jb25jYXQ6IG1ldGhvZCBpcyB1c2VkIHRvIG1lcmdlIHR3byBvciBtb3JlIGFycmF5cy5cbiAgICogVGhpcyBtZXRob2QgZG9lcyBub3QgY2hhbmdlIHRoZSBleGlzdGluZyBhcnJheXMsIGJ1dCBpbnN0ZWFkIHJldHVybnMgYSBuZXcgYXJyYXkuXG4gICAqICogcmV0dXJuIG5ldyBjb25jYXRlbmF0ZWQgYXJyYXlcbiAgICogQHBhcmFtIGFyZ3M6IE11bHRpcGxlIEFycmF5IG9mIHZhbHVlcyBhdCBhbnkgbGVuZ3RoIC5cbiAgICovXG4gIHB1YmxpYyBfY29uY2F0KC4uLmFyZ3M6IEFycmF5PGFueT4pOiBhbnkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgY29uY2F0QXJyYXk6IEFycmF5PGFueT4gfCBhbnkgPSBbXTtcbiAgICAgIGFyZ3MuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudC5sZW5ndGggPT09IC0xKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdfY29uY2F0IC0gSW52YWxpZCBBcmd1bWVudHM6IEludmFsaWQgQXJyYXknKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IGl0ZXJhdG9yIG9mIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbmNhdEFycmF5LnB1c2goaXRlcmF0b3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gY29uY2F0QXJyYXk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgY29uc29sZS50cmFjZShlcnJvcilcblxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBfbGVuZ3RoOiBSZXR1cm5zIHRoZSBsZW5ndGggb2YgdGhlIGdpdmVuIGFycmF5XG4gICAqICogcmV0dXJuIGxlbmd0aCBvZiB0aGUgYXJyYXlcbiAgICogQHBhcmFtIGFycjogQXJyYXkgb2YgdmFsdWVzIG9mIGFueSB0eXBlIFtdLlxuICAgKi9cbiAgcHVibGljIF9sZW5ndGgoYXJyOiBBcnJheTxhbnk+KTogbnVtYmVyIHwgYW55IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdfbGVuZ3RoIC0gSW52YWxpZCBBcmd1bWVudHM6IEludmFsaWQgbGVuZ3RoIG9mIEFycmF5Jyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYXJyLmxlbmd0aCB8fCAwO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUudHJhY2UoZXJyb3IpXG5cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogX2NvcHk6IER1cGxpY2F0ZXMgYW4gYXJyYXlcbiAgICogKiByZXR1cm5zIHNhbWUgYXJyYXkgYXMgcmVzdWx0XG4gICAqIEBwYXJhbSBhcnI6IEFycmF5IG9mIHZhbHVlcyBvZiBhbnkgdHlwZSBbXS5cbiAgICovXG4gIHB1YmxpYyBfY29weShhcnI6IEFycmF5PGFueT4pOiBBcnJheTxhbnk+IHwgYW55IHtcbiAgICByZXR1cm4gWy4uLmFycl07XG4gIH1cblxuICAvKipcbiAgICogX3NsaWNlOiByZXR1cm5zIGEgc2hhbGxvdyBjb3B5IG9mIGEgcG9ydGlvbiBvZiBhbiBhcnJheSBpbnRvIGEgbmV3IGFycmF5IG9iamVjdCBzZWxlY3RlZCBmcm9tIHN0YXJ0IHRvIGVuZFxuICAgKiAqIHJldHVybiByZW1vdmVkIGFycmF5XG4gICAqIEBwYXJhbSBhcnI6IEFycmF5IG9mIHZhbHVlcyBvZiBhbnkgdHlwZSBbXS5cbiAgICogQHBhcmFtIHN0YXJ0OiBTdGFydCBmcm9tIHRoaXMgcG9zaXRpb25cbiAgICogQHBhcmFtIGVuZDogRW5kIGF0IHRoaXMgcG9zaXRpb24gLCBEZWZhdWx0IGlzIGxlbmd0aCBvZiB0aGUgYXJyYXlcbiAgICovXG4gIHB1YmxpYyBfc2xpY2UoXG4gICAgYXJyOiBBcnJheTxhbnk+LFxuICAgIHN0YXJ0OiBudW1iZXIgfCBhbnksXG4gICAgZW5kOiBudW1iZXIgfCBhbnkgPSBhcnIubGVuZ3RoIC0gMVxuICApOiBBcnJheTxhbnk+IHwgYW55IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFzdGFydCB8fCAhQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnX3NsaWNlIC0gSW52YWxpZCBBcmd1bWVudHM6IEFycmF5IC8gSXRlbSBzaG91bGQgYmUgdmFsaWQnXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKHN0YXJ0ID4gYXJyLmxlbmd0aCAtIDEgfHwgZW5kID4gYXJyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdfc2xpY2UgLSBJbnZhbGlkIGluZGV4OiBTdGFydCAvIEVuZCBpbmRleCBvdXQgb2YgcmFuZ2UnXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUudHJhY2UoZXJyb3IpXG5cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogX3NwbGljZTogQ3V0IG9mIC8gU3BsaWNlIG9mIGFuIGl0ZW1zIGF0IHBhcnRpY3VsYXIgdmFsaWQgaW5kZXhcbiAgICogKiByZXR1cm4gcmVtb3ZlZCBhcnJheVxuICAgKiBAcGFyYW0gYXJyOiBBcnJheSBvZiB2YWx1ZXMgb2YgYW55IHR5cGUgW10uXG4gICAqIEBwYXJhbSBzdGFydDogU3RhcnQgZnJvbSB0aGlzIHBvc2l0aW9uXG4gICAqIEBwYXJhbSBlbmQ6IEVuZCBhdCB0aGlzIHBvc2l0aW9uICwgRGVmYXVsdCBpcyAxXG4gICAqL1xuICBwdWJsaWMgX3NwbGljZShhcnI6IEFycmF5PGFueT4sIHN0YXJ0OiBudW1iZXIgfCBhbnksIGVuZDogbnVtYmVyIHwgYW55ID0gMSk6IEFycmF5PGFueT4gfCBhbnkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXN0YXJ0IHx8ICFBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdfc3BsaWNlIC0gSW52YWxpZCBBcmd1bWVudHM6IEFycmF5IC8gSXRlbSBzaG91bGQgYmUgdmFsaWQnXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKHN0YXJ0ID4gYXJyLmxlbmd0aCAtIDEgfHwgZW5kID4gYXJyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdfc3BsaWNlIC0gSW52YWxpZCBpbmRleDogU3RhcnQgLyBFbmQgaW5kZXggb3V0IG9mIHJhbmdlJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFyci5zcGxpY2Uoc3RhcnQsIGVuZCk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgY29uc29sZS50cmFjZShlcnJvcilcblxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiAgX3NoaWZ0OiBJdCB3aWxsIHJlbW92ZSB0aGUgYXJyYXkgaXRlbSBhdCBiZWdpbm5pbmcgJiByZXR1cm4gaXRlbVxuICAgKiAqIHJldHVybiB0aGUgaXRlbSBpZiByZW1vdmVkIGZyb20gYXJyYXkgYXQgYmVnaW5uaW5nXG4gICAqIEBwYXJhbSBhcnI6IEFycmF5IG9mIHZhbHVlcyBvZiBhbnkgdHlwZSBbXS5cbiAgICovXG4gIHB1YmxpYyBfc2hpZnQoYXJyOiBBcnJheTxhbnk+KTogYW55IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdfc2hpZnQgLSBJbnZhbGlkIEFyZ3VtZW50czogQXJyYXkgc2hvdWxkIGJlIHZhbGlkJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYXJyLnNoaWZ0KCk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgY29uc29sZS50cmFjZShlcnJvcilcblxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiAgX3NoaWZ0OiBtZXRob2QgYWRkcyBvbmUgb3IgbW9yZSBlbGVtZW50cyB0byB0aGUgYmVnaW5uaW5nIG9mIGFuIGFycmF5IGFuZCByZXR1cm5zIHRoZSBuZXcgbGVuZ3RoIG9mIHRoZSBhcnJheS5cbiAgICoqIFVzZSBzcHJlYWQgb3BlcmF0b3Igd2hpbGUgcGFzc2luZyBhcnJheSBbLi4uYXJyXVxuICAgKiBAcGFyYW0gYXJyOiBBcnJheSBvZiB2YWx1ZXMgb2YgYW55IHR5cGUgW10uIHVzZSBzcHJlYWQgb3BlcmF0b3IgWy4uLmFycl1cbiAgICogQHBhcmFtIGFyZ3M6IEFueSBsZW5ndGggb2YgdmFsdWVzIHNlcGVyYXRlZCBieSBjb21tYSB0byB1bnNoaWZ0IGluIGFycmF5IGV4YW1wbGUgX3Vuc2hpZnQoYXJyYXksMSwyLDMsNCw1Li4uKVxuICAgKi9cbiAgcHVibGljIF91bnNoaWZ0KGFycjogQXJyYXk8YW55PiwgLi4uYXJnczogYW55W10pOiBhbnkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ191bnNoaWZ0IC0gSW52YWxpZCBBcmd1bWVudHM6IEFycmF5IHNob3VsZCBiZSB2YWxpZCcpO1xuICAgICAgfVxuICAgICAgYXJyLnVuc2hpZnQoYXJncyk7XG4gICAgICByZXR1cm4gYXJyLnJlZHVjZSgoYWNjLCB2YWwpID0+IGFjYy5jb25jYXQodmFsKSwgW10pO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUudHJhY2UoZXJyb3IpXG5cbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIF9wb3A6IEl0IHdpbGwgcmVtb3ZlIHRoZSBhcnJheSBpdGVtIGF0IGVuZCAmIHJldHVybiBpdGVtXG4gICAqICogcmV0dXJuIHRoZSBpdGVtIGlmIHJlbW92ZWQgZnJvbSBhcnJheSBhdCBlbmRcbiAgICogQHBhcmFtIGFycjogQXJyYXkgb2YgdmFsdWVzIG9mIGFueSB0eXBlIFtdLlxuICAgKi9cbiAgcHVibGljIF9wb3AoYXJyOiBBcnJheTxhbnk+KTogYW55IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdfcG9wIC0gSW52YWxpZCBBcmd1bWVudHM6IEFycmF5IHNob3VsZCBiZSB2YWxpZCcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFyci5wb3AoKTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBjb25zb2xlLnRyYWNlKGVycm9yKVxuXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIF9wdXNoOiBJdCB3aWxsIGFkZCAvIHB1c2ggbmV3IGl0ZW0gdG8gdGhlIGFycmF5IGF0IGVuZCAmIHJldHVybiBuZXcgYXJyYXlcbiAgICogKiByZXR1cm4gdGhlIG5ldyBhcnJheS5cbiAgICogQHBhcmFtIGFycjogQXJyYXkgb2YgdmFsdWVzIG9mIGFueSB0eXBlIFtdLlxuICAgKiBAcGFyYW0gaXRlbTogaXRlbSB0byBiZSBwdXNoZWQgb2YgYW55IHR5cGVcbiAgICovXG4gIHB1YmxpYyBfcHVzaChhcnI6IEFycmF5PGFueT4sIGl0ZW06IGFueSk6IEFycmF5PGFueT4gfCBhbnkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdfcHVzaCAtIEludmFsaWQgQXJndW1lbnRzOiBJdGVtIHNob3VsZCBiZSB2YWxpZCcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFsuLi5hcnIsIGl0ZW1dO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUudHJhY2UoZXJyb3IpXG5cbiAgICB9XG4gIH1cbn1cbiJdfQ==