import { HttpHeaders } from '@angular/common/http';

import { ODataConfiguration } from '../src/index';

export class NorthwindODataConfigurationFactory {

    constructor() {
        const config = new ODataConfiguration();
        config.baseUrl = 'https://odatateststef.azurewebsites.net/odata';

        // Set some new `customRequestOptions` here as an example
        config.customRequestOptions.headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Session': '123'
        });

        return config;
    }
}
