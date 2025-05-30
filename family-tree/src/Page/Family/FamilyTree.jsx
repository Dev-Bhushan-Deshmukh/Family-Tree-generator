import React, { useState } from 'react'
import classses from './familytree.module.css'
import { Bar } from '../../Component/Bar/Bar'
import { CreateTree } from '../../Component/Card/CreateTree'
import { NodeCard } from '../../Component/Card/NodeCard'
import { useSelector } from 'react-redux'
import { CreateChild } from '../../Component/Card/CreateChild'
export const FamilyTree = () => {
  const[createPrent,setCreateParent]=useState(false);
    const[createChild,setCreateChild]=useState(false);
  const parentState = useSelector((state) => state.parent.value)
  console.log(parentState)
   
  return (
    <div className={classses['main-container']}>

<Bar setCreateParent={setCreateParent} />

{createPrent && <CreateTree  setCreateParent={setCreateParent} />
 }

 {

  createChild && <CreateChild setCreateChild={setCreateChild}/>
 }
 
<NodeCard id='u1' nodeData={parentState} setCreateChild={setCreateChild} />
    </div>
  )
}
