import { useMemo, useState } from 'react';
import styled from 'styled-components';

import { useDied } from '@/hooks/useDied';
import { resetDiffs, setDiffs } from '@/stores/diffs';
import { Event, setEvent } from '@/stores/event';
import { calcMarks, resetMarks } from '@/stores/marks';

import { CardTextVariant } from './CardTextVariant';

const MAX_DEG = 10;

const CardWrapper = styled.div<{ visible: boolean; isAdd: boolean }>`
  position: relative;

  display: flex;
  opacity: ${(props) => (props.visible ? '1' : '0')};
  align-items: center;
  justify-content: center;

  background-color: var(--cCardBg);
  position: relative;
  width: 286px;
  height: 310px;

  background: ${(props) => (props.isAdd ? '#fee772' : '#FFFAEC')};
  border: 3px dashed #242424;
  border-radius: 60px;

  transition: transform 0.5s ease-out 0s;
  overflow: hidden;
  z-index: 2;
`;

const Image = styled.img`
  pointer-events: none;
`;

interface Point {
  x: number;
  y: number;
}

function Point(x: number, y: number): Point {
  return {
    x,
    y
  };
}

const Holder = styled.div`
  position: fixed;

  top: 0;
  left: 0;

  height: 100vh;
  width: 100vw;
`;

interface Props {
  event: Event;
}

export const Card = ({ event }: Props) => {
  const [startPoint, setStartPoint] = useState<Point | undefined>(undefined);
  const [point, setPoint] = useState<Point>(Point(0, 0));
  const [visible, setVisible] = useState(true);

  const startDrag = (point: Point) => {
    setStartPoint(point);
  };

  const isDied = useDied();

  const endDrag = () => {
    if (Math.abs(point.x) > 5) {
      if (deg > 0) {
        setPoint(Point(100, 500));
        setTimeout(() => {
          setPoint(Point(0, 0));
          setVisible(false);
          setTimeout(() => {
            setVisible(true);
            setEvent(isDied ? 1 : event.rightLink);
          }, 550);
        }, 400);
        calcMarks(
          event.rightHealth,
          event.rightLaw,
          event.rightMoney,
          event.rightSociety,
          event.rightTime
        );
      } else {
        setPoint(Point(-100, 500));
        setTimeout(() => {
          setPoint(Point(0, 0));
          setVisible(false);
          setTimeout(() => {
            setVisible(true);
            setEvent(isDied ? 1 : event.leftLink);
          }, 550);
        }, 400);
        calcMarks(
          event.leftHealth,
          event.leftLaw,
          event.leftMoney,
          event.leftSociety,
          event.leftTime
        );
      }

      if (isDied) {
        resetMarks();
        setEvent(1);
      }
    } else {
      setPoint(Point(0, 0));
    }

    resetDiffs();

    setStartPoint(undefined);
  };

  const drag = (point: Point) => {
    if (startPoint) {
      let pDiffX = point.x - startPoint.x;

      if (pDiffX > 0) {
        pDiffX = Math.min(pDiffX, 70);
        setDiffs(event.rightHealth, event.rightLaw, event.rightMoney, event.rightSociety);
      } else {
        pDiffX = Math.max(pDiffX, -70);
        setDiffs(event.leftHealth, event.leftLaw, event.leftMoney, event.leftSociety);
      }

      let pDiffY = point.y - startPoint.y;

      if (pDiffY > 0) {
        pDiffY = Math.min(pDiffY, 20);
      } else {
        pDiffY = Math.max(pDiffY, -30);
      }

      setPoint(Point(pDiffX, pDiffY));
    }
  };

  const onMouseDown = (event: React.MouseEvent) => {
    startDrag(Point(event.clientX, event.clientY));
  };

  const onMouseUp = () => {
    endDrag();
  };

  const onMouseMove = (event: React.MouseEvent) => {
    if (event.buttons === 1) {
      drag(Point(event.clientX, event.clientY));
    }
  };

  const onTouchStart = (event: React.TouchEvent) => {
    const touch = event.changedTouches[0];
    startDrag(Point(touch.clientX, touch.clientY));
  };
  const onTouchEnd = () => {
    endDrag();
  };
  const onTouchMove = (event: React.TouchEvent) => {
    const touch = event.changedTouches[0];

    drag(Point(touch.clientX, touch.clientY));
  };

  const deg = useMemo(() => {
    if (point.x > 0) {
      return Math.min(point.x / 7, MAX_DEG);
    }

    return Math.max(point.x / 7, -1 * MAX_DEG);
  }, [point.x]);

  const style = useMemo<React.CSSProperties>(() => {
    return {
      transform: `translate(${point.x}px, ${point.y}px) rotate(${deg}deg) scale(${
        startPoint ? '1.05' : '1'
      })`
    };
  }, [point, startPoint]);

  return (
    <>
      <CardWrapper
        onMouseMove={onMouseMove}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onTouchMove={onTouchMove}
        onMouseUp={onMouseUp}
        style={style}
        visible={visible}
        isAdd={event.img.includes('_')}
      >
        <CardTextVariant deg={deg}>{deg > 0 ? event.rightText : event.leftText}</CardTextVariant>
        <Image src={'/events/' + event.img}></Image>
      </CardWrapper>
      <Holder onMouseUp={onMouseUp}></Holder>
    </>
  );
};
