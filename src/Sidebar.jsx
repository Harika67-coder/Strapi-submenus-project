import sublinks from './data';
import {FaTimes} from 'react-icons/fa';
import { useGlobalContext } from './Context'
const Sidebar = () => {
   const {isSidebarOpen,closeSidebar}=useGlobalContext();
   return <aside className={isSidebarOpen?'sidebar show-sidebar':'sidebar'}>
    <div className='sidebar-container'>
      <button className='close-button' onClick={closeSidebar}>
        <FaTimes />
      </button>
      <div className='sidebar-sublinks'>
      {sublinks.map((link)=>{
        const {pageId,page,links}=link;
        return <article key={pageId}>
          <h4>{page}</h4>
          <div className='sidebar-links'>
            {links.map((link)=>{
              const {id,label,icon,url}=link;
              return <a href={url} key={id}>{icon}{label}</a>
            })}
          </div>
        </article>
      })}
      </div>
    </div>
   </aside>
}

export default Sidebar