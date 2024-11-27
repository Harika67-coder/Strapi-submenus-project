import {useState,createContext,useContext} from 'react';

const AppContext=createContext();
export const AppProvider=({children})=>{
const [isSidebarOpen,setIsSidebarOpen]=useState(false);
const [PageId,setPageId]=useState(null);
const closeSidebar=()=>{
  setIsSidebarOpen(false);
};
const openSidebar=()=>{
  setIsSidebarOpen(true);
};
return <AppContext.Provider value={{isSidebarOpen,openSidebar,closeSidebar,PageId,setPageId}}>
  {children}
</AppContext.Provider>
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

