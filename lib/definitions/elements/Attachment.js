var Attachment = {
    title: 'Attachment',
    allOf: [
        {$ref: 'Element'}
    ],
    properties: {
        contentType: {$ref: 'code'},//TODO: ensure MimeType
        language: {$ref: 'code'},//TODO: ensure Language
        data: {$ref: 'base64Binary'},
        url: {$ref: 'uri'},
        size: {$ref: 'unsignedInt'},
        hash: {$ref: 'base64Binary'},
        title: {$ref: 'string'},
        creation: {$ref: 'dateTime'}
    }
};

module.exports = Attachment;