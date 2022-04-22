import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listNewOrders} from "../../../actions/orderActions";
import "./widgetLg.css";
import {format} from "timeago.js"
import Loader from "../../../Components/loader/Loader";


export default function WidgetLg() {

  const dispatch = useDispatch()
  const orderListNew = useSelector((state) => state.orderListNew)

  const {loading, orders} = orderListNew

useEffect(() => {
  dispatch(listNewOrders())
}, [dispatch])
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
       {
         orders ? orders.map((order) => (
          <tr className="widgetLgTr" key={order._id}>
          <td className="widgetLgUser">
            <img
              src={order.user && order.user.img || "https://icons-for-free.com/iconfiles/png/512/avatar+people+profile+user+icon-1320185001671922416.png"}
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">{order.user ? order.user.name : "deleted user"}</span>
          </td>
          <td className="widgetLgDate">{format(order.createdAt)}</td>
          <td className="widgetLgAmount">£ {order.totalPrice}</td>
          <td className="widgetLgStatus">
            <Button type={order.isDelivered ? "Approved " : "Pending"} />
          </td>
        </tr>
         )):
         <div className="loader-box">
             <Loader />
        </div>
       }
      </table>
    </div>
  );
}
