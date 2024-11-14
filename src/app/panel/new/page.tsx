import CreatePanelForm from '@/components/panel-form/create-panel-form'
import React from 'react'

type Props = {}

const NewPanel = (props: Props) => {
  return (
    <div className='flex items-center justify-center h-full w-full'>
        <CreatePanelForm/>
    </div>
  )
}

export default NewPanel