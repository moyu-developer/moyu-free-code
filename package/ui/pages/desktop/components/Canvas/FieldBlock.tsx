import { useDrag, useDrop } from "react-dnd";
import { DropNames } from "@/common/constant";
import { useRef } from "react";
import styles from "./index.module.sass";
import { Button } from "@douyinfe/semi-ui";
import { useDispatch } from "react-redux";
import { Dispatch } from "@/common/model";

const FieldBlock: React.FC = (props) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const dispatch = useDispatch<Dispatch>()

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: DropNames.Field,
    drop: (item, monitor) => {
      const didDrop = monitor.didDrop();
      if (didDrop) {
        return;
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver({
        shallow: true,
      }),
      canDrop: monitor.canDrop(),
    }),
  }));

  const [{ isDragging }, drag] = useDrag(() => {
    return {
      type: DropNames.Field,
      item: {},
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult()
        console.log(dropResult, item, 'dropResult ...')
        if (item && dropResult) {
          alert(`You dropped fields`)
        }
      },
    };
  }, []);

  drag(drop(ref));

  const canMoveHover = canDrop && isOver;

  /**
   * 点击元素后需要选中当前节点
   */
  const onClickSelectedField = () => {
    // dispatch.schema.setFocusComponentId()
  };

  return (
    <div onClick={onClickSelectedField} ref={ref} className={styles['canvasField']}>
      {
        props.children
      }
      {canMoveHover ? <div className={styles["canvasHover"]} /> : null}
    </div>
  );
};

export default FieldBlock;
