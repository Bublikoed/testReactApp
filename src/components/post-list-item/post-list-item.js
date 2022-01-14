import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './post-list-item.css'

const PostListItem = ({data}) => {
    const [showInfo, setShowInfo] = useState(false);

        return(
            <div className='app-list-item'>
                <div className='app-list-item-label' onClick={() => setShowInfo(prev => !prev)}>
                    {data.name}
                    <span className="mark">
                        {showInfo ? "-" : "+"}
                    </span>
                </div>
                {showInfo && 
                     <div className="app-list-item-info">
                         <div>
                             <span>Username</span>
                            {data.username} 
                         </div>
                         <div>
                             <span>Email</span>
                             {data.email} 
                         </div>
                         <div>
                             <span>Address</span>
                            {data.address.street} 
                         </div>
                         <div>
                             <span>Phone</span>
                            {data.phone} 
                         </div>
                    </div>
                }
            </div>
        )
}

export default PostListItem