"use client";
import React from "react";
import SkeletonPure, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface SkeletonProps {
  baseColor: string;
  highlightColor: string;
  borderRadius: number;
  count: number;
  wrapClassName?: string;
  className?: string;
}

const Skeleton = (props: SkeletonProps) => {
  return (
    <div className={props.wrapClassName}>
      <SkeletonTheme
        baseColor={props.baseColor}
        highlightColor={props.highlightColor}
      >
        <p>
          <SkeletonPure
            borderRadius={props.borderRadius}
            count={props.count}
            className={props.className}
          />
        </p>
      </SkeletonTheme>
    </div>
  );
};

export default Skeleton;
