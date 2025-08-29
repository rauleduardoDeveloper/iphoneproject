/*
 Raul — Full-Stack Developer
 Portfolio Project: iPhone 15 Pro UX/UI Showcase
 Note: Author branding comment. No functional changes.
*/
import { Html } from '@react-three/drei'
import React from 'react'

const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="w-[10vw] h-[10vw] rounded-full">
          Loading...
        </div>
      </div>
    </Html>
  )
}

export default Loader