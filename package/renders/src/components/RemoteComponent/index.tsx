import { ReactComponent } from '@moyu-code/shared';
import * as React from 'react';
import { LoadRemoteComponentSync } from '../../Remote';

export interface RemoteComponentProps {
  url: string;
  schemaProps?: Record<string, any>
}

const RemoteComponent: React.FC<RemoteComponentProps> = (props) => {

  const [Component, setComponent] = React.useState<ReactComponent>()


  React.useEffect(() => {
    LoadRemoteComponentSync(props.url, {}).then(res => {
      if (res?.component?.render) {
        setComponent(res?.component?.render)
      }
    })
  }, [props.url])

  if (!Component) {
    return null
  }

  return <Component {...props.schemaProps} />
}

export default React.memo(RemoteComponent)