import React, { Fragment, ReactElement } from "react";

interface Props {
  condition?: boolean | false;
  truth?: any;
  untruth?: any;
}

/**
 *
 * condition boolean default false;
 * truth React Component;
 * untruth React Component
 *
 */
const ConditionRender = (props: Props) => {
  if (props?.condition) {
    if (props?.truth) {
      return props?.truth;
    }
    return <Fragment />;
  }

  if (props?.untruth) {
    return props?.untruth;
  }

  return <Fragment />;
};

export default ConditionRender;
