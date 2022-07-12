import * as React from "react";
import { Button, Badge } from "antd";
import { useSelector, useDispatch } from "react-redux";
import Icon from "src/common/components/AntSvg";
import { DeviceMobile, DevicesPc } from "tabler-icons-react";
import { RootState, Dispatch } from "src/common/model";

const Device = () => {
  const env = useSelector((state: RootState) => state.common.pageInfo.env);
  const dispatch: Dispatch = useDispatch();

  return (
    <>
      <Button
        type="link"
        onClick={() => dispatch.common.setPageInfo({ env: 0 })}
        icon={
          env === 0 ? (
            <Badge dot>
              <Icon icon={DeviceMobile} />
            </Badge>
          ) : (
            <Icon icon={DeviceMobile} />
          )
        }
      />
      <Button
        type="link"
        onClick={() => dispatch.common.setPageInfo({ env: 1 })}
        icon={
          env === 1 ? (
            <Badge dot>
              <Icon icon={DevicesPc} />
            </Badge>
          ) : (
            <Icon icon={DevicesPc} />
          )
        }
      />
    </>
  );
};

export default Device;
