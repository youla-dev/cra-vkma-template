import React from 'react'
import {
  ConfigProvider,
  AdaptivityProvider,
  AppRoot,
  SplitLayout,
  View,
  PanelHeader,
  Panel,
  Div,
} from '@vkontakte/vkui'
import bridge, { AppearanceSchemeType } from '@vkontakte/vk-bridge'

export const App: React.FC = () => {
  const initialScheme =
    (document.body.getAttribute('scheme') as AppearanceSchemeType) || 'client_light'
  const [scheme, setScheme] = React.useState<AppearanceSchemeType>(initialScheme)

  bridge.subscribe((event) => {
    switch (event.detail.type) {
      case 'VKWebAppUpdateConfig': {
        setScheme(event.detail.data.scheme)
      }
    }
  })

  return (
    <ConfigProvider scheme={scheme}>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout header={<PanelHeader separator={false} />}>
            <View activePanel="main">
              <Panel id="main">
                <PanelHeader>Header</PanelHeader>
                <Div>Hello, world</Div>
              </Panel>
            </View>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  )
}
