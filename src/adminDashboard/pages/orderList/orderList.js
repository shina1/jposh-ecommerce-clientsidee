import React, { useEffect } from "react";
import "./orderList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Topbar  from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, listAllProducts } from "../../../actions/productActions";
import Loader from "../../../Components/loader/Loader";
import { deleteOrder, listOrders } from "../../../actions/orderActions";


 const DashOrderList = () => {
  const dispatch = useDispatch()
  const orderList = useSelector((state) => state.orderList)
 
  const {loading, orders} = orderList

  
  console.log(orders);
 

  const handleDelete = (id) => {
    if (window.confirm("Are you sure You want to delete?"));
    dispatch(deleteOrder(id));
    dispatch(listOrders())
  };

  useEffect(()=> {
    dispatch(listOrders())
  }, [dispatch]) 


  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "createdAt",
      headerName: "createdAt",
      width: 200,
    },
    {
      field: "isPaid",
      headerName: "isPaid",
      width: 90,
    },
    { field: "isDelivered", headerName: "isDelivered", width: 200 },

    {
      field: "paymentMethod",
      headerName: "paymentMethod",
      width: 200,
    },
    {
      field: "totalPrice",
      headerName: "totalPrice (£)",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/dash-order/${params.row._id}`}>
              <button className="dashorderListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
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
    {
      loading && <Loader />
    }
    
      <div className="orderList">
      {
        orders ?  <DataGrid
        rows={orders}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      /> :
      <div className="loader-box">
            <Loader />
      </div>
      }
  </div>
    
    </main>
  </div>
  );
}

export default DashOrderList
