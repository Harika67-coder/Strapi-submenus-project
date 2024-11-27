import sublinks from "./data"
import { useRef } from 'react';
import { useGlobalContext } from "./Context"
const Submenu = () => {
  const {PageId,setPageId}=useGlobalContext();
  const currentObj=sublinks.find((link)=>link.pageId===PageId);
  
  const submenuContainer = useRef(null);
  const handleMouseLeave = (event) => {
    const submenu = submenuContainer.current;
    const { left, right, bottom } = submenu.getBoundingClientRect();
    const { clientX, clientY } = event;

    if (clientX < left + 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
    }
  };
  return <div className={currentObj ? 'submenu show-submenu' : 'submenu'} onMouseLeave={handleMouseLeave}
  ref={submenuContainer}>
     <h5>{currentObj?.page}</h5>
     <div className="submenu-links" style={{gridTemplateColumns:currentObj?.links?.length>3 ?'1fr 1fr':'1fr',}}>
      {currentObj?.links?.map((link)=>{
        const {id,label,icon,url}=link;
        return <a href={url} key={id}>{icon}{label}</a>
      })}
     </div>
     </div>
}

export default Submenu