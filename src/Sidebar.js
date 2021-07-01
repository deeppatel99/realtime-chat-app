import { Avatar, IconButton } from "@material-ui/core";
import  DonutLargeIcon from "@material-ui/icons/DonutLarge";
import  ChatIcon from "@material-ui/icons/Chat"
import  MoreVert from "@material-ui/icons/MoreVert"
import React from "react";
import "./Sidebar.css";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
          <Avatar src="https://media-exp3.licdn.com/dms/image/C4E03AQGvZARCs8DNYw/profile-displayphoto-shrink_200_200/0/1623517243189?e=1629936000&v=beta&t=K5HRepOy1LeWUsi_Erdir4fxC0cToU2_d5TWx1l6bvw"/>
        <div className="sidebar__headerRight">
            <IconButton >
                <DonutLargeIcon />
            </IconButton>
            <IconButton >
                <ChatIcon />
            </IconButton>
            <IconButton >
                <MoreVert />
            </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
          <div className="sidebar__searchContainer">
              <SearchOutlined />
              <input type="text" placeholder="Search or start a new chat" />
          </div>
      </div>

      <div className="sidebar__chats">
          <SidebarChat />
          <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
