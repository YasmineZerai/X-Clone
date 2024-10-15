import HomeIcon from "../icons/homeIcon";
import MessageIcon from "../icons/messageIcon";
import NotificationIcon from "../icons/notificationIcon";
import PostIcon from "../icons/postIcon";
import ProfileIcon from "../icons/profileIcon";
import SearchIcon from "../icons/searchIcon";
import XIcon from "../icons/xIcon";
import SideBarComponent from "./sideBarComponent";
export default function SideBar(){
    return(<div className="bg-black  h-screen border-r border-stone-900  w-1/6 flex flex-col items-end justify-start pt-2 pr-6">
        <SideBarComponent>
            <XIcon/>
        </SideBarComponent>
        <SideBarComponent>
            <HomeIcon/>
        </SideBarComponent>
        <SideBarComponent>
            <SearchIcon/>
        </SideBarComponent>
        <SideBarComponent>
            <NotificationIcon/>
        </SideBarComponent>
        <SideBarComponent>
            <MessageIcon/>
        </SideBarComponent>
        <SideBarComponent>
            <ProfileIcon/>
        </SideBarComponent>
        <SideBarComponent>
            <PostIcon/>
        </SideBarComponent>
    </div>)
}