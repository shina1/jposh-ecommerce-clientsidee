import React, { useEffect } from "react";
import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, listUsers } from "../../../actions/userActions";
import Loader from "../../../Components/loader/Loader";

 const UserListDash = () => {
  const [data, setData] = useState(userRows);
  const userList = useSelector((state) => state.userList);
  const dispatch = useDispatch()
 
  const allUsers = userList.users;


  useEffect(() => {
      dispatch(listUsers())
  }, [dispatch])

  const handleDelete = (id) => {
    dispatch(deleteUser(id))
    dispatch(listUsers())
  };
  
  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.name}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 120,
    // },
    // {
    //   field: "transaction",
    //   headerName: "Transaction Volume",
    //   width: 160,
    // },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row._id}`}>
              <button className="userListEdit">Detials</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
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
      <main className="user-list-container">
      <Sidebar />
      <div className="userList">
        {
          allUsers ? <DataGrid
          rows={allUsers}
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

export default UserListDash

