'use strict';

exports.handler = (event, context, callback) => {
    const response = event.Records[0].cf.response;
    const headers = response.headers;

    headers["access-control-allow-methods"] = [{
            "value": "GET, HEAD, POST, PUT, OPTIONS"
        }
    ];

    headers["access-control-allow-origin"] = [{
            "value": "*"
        }
    ];

    headers["access-control-allow-headers"] = [{
            "value": "content-type, authorization"
        }
    ];
    
    if (response.status >= 400 && response.status <= 499) {
        response.status = 302;
        response.statusDescription = 'Found';
        response.body = '';
        response.headers["location"] = [{ key: "location", value: "/" }];
        
    }
    
    callback(null, response);
};
