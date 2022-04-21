import React, { useEffect, useState } from "react";
import "./orderList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Topbar  from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { listOrders } from "../../../actions/orderActions";



 const DashOrderList = () => {
     const [data, setData] = useState([])
  const dispatch = useDispatch()
  const orderList = useSelector((state) => state.orderList)
//   const {loading, products} = orderList
 

  useEffect(()=> {
    dispatch(listOrders())
  }, [dispatch]) 


  const columns = [
    { field: "id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="orderListItem">
            <img className="orderListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "countInStock", headerName: "Stock", width: 150 },
    {
      field: "category",
      headerName: "Category",
      width: 200,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/dash-product/${params.row._id}`}>
              <button className="dashorderListEdit">View</button>
            </Link>
          </>
        );
      },
    },
  ];

  return (
  <div>
    <Topbar />
    <main className="order-list-dash-container">
      <Sidebar />
    <div className="orderList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
    </main>
  </div>
  );
}

export default DashOrderList
