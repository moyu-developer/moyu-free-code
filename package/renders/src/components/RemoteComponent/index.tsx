import { ReactComponent } from '@moyu-code/shared';
import * as React from 'react';
import { LoadRemoteComponentSync } from '../../Remote';

export interface RemoteComponentProps {
  url: string;
}

const RemoteComponent: React.FC<RemoteComponentProps> = (props) => {

  const [Component, setComponent] = React.useState<ReactComponent>()


  React.useEffect(() => {
    LoadRemoteComponentSync('http://175.178.14.116:9000/avatars/moyuremotevideo.umd.development.js', {}).then(res => {
      if (res?.component?.render) {
        setComponent(res?.component?.render)
      }
    })
  }, [props.url])

  if (!Component) {
    return null
  }

  return <Component/>
}

export default React.memo(RemoteComponent)