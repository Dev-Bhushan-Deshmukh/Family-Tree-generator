import React from 'react'
import classses from './familytree.module.css'
import { Bar } from '../../Component/Bar/Bar'
import { CreateTree } from '../../Component/Card/CreateTree'
export const FamilyTree = () => {
  return (
    <div className={classses['main-container']}>

<Bar/>
<CreateTree/>

    </div>
  )
}
