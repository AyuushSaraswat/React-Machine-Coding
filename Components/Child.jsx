import React,{memo} from 'react'

function Child({ name }) {
  console.log(`Child rendered: ${name}`);
  return <h1>{name}</h1>;
}

export default React.memo(Child)