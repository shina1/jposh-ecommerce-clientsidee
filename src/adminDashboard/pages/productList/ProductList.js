import React, { useEffect } from "react";
import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Topbar  from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, listAllProducts } from "../../../actions/productActions";
import Loader from "../../../Components/loader/Loader";


 const DashProductList = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const {loading, products} = productList

  useEffect(()=> {
    dispatch(listAllProducts())
  }, [dispatch]) 



  const handleDelete = (id) => {
    dispatch(deleteProduct(id))
    dispatch(listAllProducts())
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
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
              <button className="dashproductListEdit">Edit</button>
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
    <main className="product-list-dash-container">
      <Sidebar />
    {/* {
      loading && <Loader />
    } */}
    
      <div className="productList">
      <Link to="/newproduct">
        <button className="productAddButton">Create</button>
      </Link>
      {
        products ?  <DataGrid
        rows={products}
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

export default DashProductList
