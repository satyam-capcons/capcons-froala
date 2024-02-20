import React from 'react'
import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('./components/editor/Editor'), {
  ssr: false,
});

function Page() {
  return (
    <div className='flex flex-1 h-screen bg-white'>
      <Editor />
    </div>
  )
}

export default Page
