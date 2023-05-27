import { useMemo, useState } from 'react';
import styled from 'styled-components';

import { resetDiffs, setDiffs } from '@/stores/diffs';
import { Event, setEvent } from '@/stores/event';
import { calcMarks } from '@/stores/marks';

import { CardTextVariant } from './CardTextVariant';

const MAX_DEG = 10;

const CardWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--cCardBg);
  position: relative;
  width: 286px;
  height: 373px;

  background: #fffaec;
  border: 3px dashed #242424;
  border-radius: 60px;

  transition: all 0.2s ease-out 0s;
  overflow: hidden;
`;

const Image = styled.img`
  height: 100%;
  width: auto;

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

interface Props {
  event: Event;
}

export const Card = ({ event }: Props) => {
  const [startPoint, setStartPoint] = useState<Point | undefined>(undefined);
  const [point, setPoint] = useState<Point>(Point(0, 0));

  const startDrag = (point: Point) => {
    setStartPoint(point);
  };

  const endDrag = () => {
    if (Math.abs(point.x) > 5) {
      if (deg > 0) {
        setEvent(event.rightLink);
        calcMarks(
          event.rightHealth,
          event.rightLaw,
          event.rightMoney,
          event.rightSociety,
          event.rightTime
        );
      } else {
        setEvent(event.leftLink);
        calcMarks(
          event.leftHealth,
          event.leftLaw,
          event.leftMoney,
          event.leftSociety,
          event.leftTime
        );
      }
    }

    resetDiffs();

    setPoint(Point(0, 0));
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
      transform: `translate(${point.x}px, ${point.y}px) rotate(${deg}deg)`
    };
  }, [point, startPoint]);

  return (
    <CardWrapper
      onMouseMove={onMouseMove}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onTouchMove={onTouchMove}
      style={style}
    >
      <CardTextVariant deg={deg}>{deg > 0 ? event.rightText : event.leftText}</CardTextVariant>
      <Image src={'/events/' + event.img}></Image>
    </CardWrapper>
  );
};
