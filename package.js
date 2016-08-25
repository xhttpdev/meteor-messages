Package.describe({
    name: 'invictus:messages',
    version: '0.10.0',
    // Brief, one-line summary of the package.
    summary: 'Boostrap Messages',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/xhttpdev/meteor-messages.git',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.4.1');

    api.use([
        'templating',
        'fourseven:scss@3.8.0_1',
        'jquery@1.11.4'
    ]);

    api.addFiles([
        'messages.html',
        'messages.js',
        'flash.js',
        'messages.sass'
    ], 'client');

    api.export('Msg');
});

