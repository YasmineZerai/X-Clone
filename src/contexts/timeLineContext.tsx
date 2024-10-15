import { createContext, useState, PropsWithChildren } from "react"
export const timeLineContext=createContext({timeLine :"ForYou"});
export function TimeLineContextProvider({children}:PropsWithChildren){
    const [timeLine, setTimeLine]=useState("ForYou")
    const GoToFollowing=()=>setTimeLine("Following")
    const GoToForYou=()=>setTimeLine("ForYou")
    const store={timeLine, GoToFollowing,GoToForYou }
    return(<timeLineContext.Provider value={store}>
        {children}
    </timeLineContext.Provider>)
}
