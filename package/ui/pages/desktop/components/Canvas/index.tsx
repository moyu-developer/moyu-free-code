import { DropNames } from "@/common/constant";
import { useDrop } from "react-dnd";
import FieldBlock from "./FieldBlock";
import styles from "./index.module.sass";
import { DslNode } from "@moyu-code/render";
import { useSelector } from "react-redux";
import { RootState } from "@/common/model";
import { useMemo } from "react";
import * as SEMI from '@douyinfe/semi-ui'
// import { Thing } from '@moyu-code/renders'

import { MicroView } from '@moyu-code/dsl'
import { Col, Row } from "@douyinfe/semi-ui";


function createBlockNode(nodes: MicroView['children']) {
  if (!nodes || nodes.length === 0) return null;

  return nodes.map((blockNode) => {
    const Element = (SEMI as any)[blockNode.type]
    const { children, ...props } = blockNode.props || {}
    console.log()
    return (
      <FieldBlock key={blockNode.uid}>
        <Element
          {...props}
        >
          {blockNode.children && blockNode.children .length > 0 ? createBlockNode(
            blockNode.children
          ) : children}
        </Element>
      </FieldBlock>
    );
  });
}

export default () => {

  const schemaViews = useSelector((state: RootState) => state.schema.views);
  const dslView = useSelector((state: RootState) => state.schema.dslView);

  /**
   * useDrop，处理外部components 区域拖拽入 canvas区域的内容
   */
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: DropNames.Field,
    drop: (item, monitor) => {
      const didDrop = monitor.didDrop();
      console.log(didDrop, "didDrop");
      if (didDrop) {
        return;
      }
      return { name: "Drop" };
    },
    collect: (monitor) => ({
      isOver: monitor.isOver({
        shallow: true,
      }),
      canDrop: monitor.canDrop(),
    }),
  }));

  const canMoveHover = canDrop && isOver;


  const renderSchemaViews = useMemo(() => {
    if (dslView.children) {
      return createBlockNode(dslView.children)
    }
    return []
  }, [dslView])

  return (
    <div className={styles["canvas"]}>
      <div className={styles["canvasRender"]} ref={drop}>
        {
          renderSchemaViews
        }
        {canMoveHover ? (
          <div
            className={styles["canvasHover"]}
            style={{ background: "red" }}
          />
        ) : null}
      </div>
    </div>
  );
};
