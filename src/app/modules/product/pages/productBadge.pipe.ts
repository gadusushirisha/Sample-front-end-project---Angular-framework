import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'iconpipe'
})

//pipe to display the badge based on the switch condition
export class ProductBadgePipe implements PipeTransform {
    constructor() { }

    transform(value: any) {
        let properIconName = undefined;

        switch (value) {
            case 'badge-ECO':
                properIconName = '/assets/icons/product-en-sprite/svg/symbols.svg#badge-ECO';
                break;
            case 'badge-NLP':
                properIconName = '/assets/icons/product-en-sprite/svg/symbols.svg#badge-NLP';
                break;
            case 'badge-SB':
                properIconName = '/assets/icons/product-en-sprite/svg/symbols.svg#badge-SB';
                break;

            case 'badge-ES':
                properIconName = '/assets/icons/product-en-sprite/svg/symbols.svg#badge-ES';
                break;                

            
            default:
                properIconName = null;
        }
        return properIconName;
    }
}