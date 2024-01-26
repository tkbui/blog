import React from 'react';

// TODO: to use with onmouseenter/leave? or figure out html tooltip?
function HoverBox({ text, classes = '' }) {
  return <p className={`border border-primary${classes}`}>{text}</p>;
}

export default HoverBox;
