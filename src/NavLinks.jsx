import React from 'react'
import sublinks from './data'
import { useGlobalContext } from './Context'
const NavLinks = () => {
  const {PageId,setPageId}=useGlobalContext();
  return <div className='nav-links'>
    {sublinks.map((item)=>{
      const {pageId,page}=item;
      return <button onMouseEnter={()=>{
        setPageId(pageId);
      
      }} key={pageId}>{page}</button>
    })}
  </div>
}

export default NavLinks