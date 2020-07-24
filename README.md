# Ghost Extension Card Starter

This is the 'Hello world" extension card for Ghost blog.

# Build

## Preview in vuepress

This starter project use vuepress as the project documentation and test preview environment.

```
npm install
npm run serve
```

## Build for release

If everything is OK, you can make the release package with command:

```
npm run build
```

## Serve for local testing

After you generate the release package, you can test it against the local Ghost development environment.

To serve the release js file, you can use PHP or any other webserver:

```
php -S localhost:8686
```

# Installation

## Get the Ghost customization distribution

Today, ghost does not have any offical mechanism to enable the developers to develop their own custom card. We made a customized distribution to enable this missing feature.

You need to download the the customized Ghost distribution and install it on your server before you can use this "hello" card.

Download from https://storytelling.cool

## Install a local blog for test

You can install a local blog instance for testing

```
mkdir ghost-extension-card
cd ghost-extension-card
npm install ghost-cli@latest -g
ghost install local
```

For more information about how to install Ghost, please refer to
https://ghost.org/docs/setup/

## Register your extension card

Modify the config.development.json as the following:

```
{
    "enableDeveloperExperiments": true,
    "extCards": [
        {
            "label": "Hello",
            "iconUrl": "http://localhost:8686/hello.svg",
            "matches": ["hello", "test"],
            "type": "card",
            "replaceArg": "extension",
            "payload": {
                "editorComponentName": "ghost-card-starter-editor",
                "editorSrc": "http://localhost:8686/ghost-card-starter.js",
                "editorStyle": "width: 100%; height: 1.25rem;",
                "viewerComponentName": "ghost-card-starter-viewer",
                "viewerSrc": "http://localhost:8686/ghost-card-starter.js",
                "options": {}
            }
        }
    ]
}
```

## Restart Ghost and have fun

Restart your ghost and open the admin-client, you can add the hello card in your post.

```
ghost restart
```
