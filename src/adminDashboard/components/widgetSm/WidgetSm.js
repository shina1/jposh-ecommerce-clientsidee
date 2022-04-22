import React, { useEffect } from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { listNewUsers } from "../../../actions/userActions";
import {format} from "timeago.js"
import Loader from "../../../Components/loader/Loader";

export default function WidgetSm() {

  const dispatch = useDispatch()
  const userNewList = useSelector((state) => state.userNewList)

  const {loading, users} = userNewList

useEffect(() => {
  dispatch(listNewUsers())
}, [dispatch])

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users ? users.map(user => (
             <li className="widgetSmListItem" key={user._id}>
             <img
               src={user.img || "https://icons-for-free.com/iconfiles/png/512/avatar+people+profile+user+icon-1320185001671922416.png"}
               alt=""
               className="widgetSmImg"
             />
             <div className="widgetSmUser">
               <span className="widgetSmUsername">{user.name}</span>
             </div>
             <div>
               <span>{format(user.createdAt)}</span>
             </div>
             {/* <button className="widgetSmButton">
               <Visibility className="widgetSmIcon" />
               Display
             </button> */}
           </li>
        ))
        :
        <div className="loader-box">
          <Loader />
        </div>
      }
      </ul>
    </div>
  );
}
