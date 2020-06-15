import React from 'react';
const Content = (props) => {
     const sidebarBackground = {
      backgroundImage: "url(" + props.image + ")"
    };
    return (
        <div className="content">
        {props.hasImage ? (
            <div className="sidebar-background" style={sidebarBackground} />
          ) : (
            null
          )}
           {props.children} 
        </div>
    );
};

export default Content;