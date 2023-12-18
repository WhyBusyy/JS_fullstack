import { useState } from "react";
// import React from 'react';  React 17 이후부터는 불필요

const CounterResult = (props) => {
  return (
    <div>
        { props.num % 2 === 0 ? '짝수' : "홀수"}
    </div>
  )
};

export default CounterResult;
