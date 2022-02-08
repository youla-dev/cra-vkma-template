### Creating a VK mini-app.

https://vk.com/editapp?act=create

### Starting the project locally

`yarn start`

### Starting the project inside VK mini-app

1)Start the tunnel `npm run tunnel`/`yarn tunnel`

https://www.npmjs.com/package/@vkontakte/vk-tunnel

2)Start the project locally `npm start`/`yarn start`

3)Insert the link to the VK mini-apps admin panel (https://vk.com/editapp?id=<app_id>&section=options)

4)Open the mini-app with the link vk.com/app<app_id>

### Deployment

1)Create the build `yarn build`

2)Create a config `vk-hosting-config.json` For example

```json
{
  "static_path": "build",
  "app_id": <app_id>,
  "endpoints": {
    "mobile": "index.html",
    "mvk": "index.html",
    "web": "index.html"
  }
}
```

3)Deploy the app `vk-miniapps-deploy`

https://dev.vk.com/mini-apps/development/hosting
