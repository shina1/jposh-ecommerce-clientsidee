import React, {useEffect, useState} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import "./style.css"
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrder, listMyOrders } from '../../actions/orderActions';
import { Link, useParams } from 'react-router-dom';
import Loader from '../../Components/loader/Loader'
import { DeleteOutline } from '@material-ui/icons';
import OpenNotificationWithIcon from '../../Components/Notification';
import Alert from '../../Components/Alert';
import AlertComponent from '../../Components/Alert';
import { ORDER_LIST_MY_SUCCESS } from '../../constants/orderConstants';






;
 
 


const MyOrders = () => {

    const params = useParams()
    // const [loading, setLoading] = useState(false);

    const dispatch = useDispatch()
    const orderListMy = useSelector((state)=> state.orderListMy)
    // const userDetials  = useSelector((state) => state.userDetials)
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    const userId = userInfo._id

    const {loading, orders} = orderListMy

    console.log(orders)

    const handleDelete = (id) => {
      if (window.confirm("Are you sure You want to delete?"));
      dispatch(deleteOrder(id));
      dispatch(listMyOrders(userId))
      console.log('clicked');
    };

    useEffect(()=> {
      dispatch(listMyOrders(userId))
  }, [dispatch, userId])

    

    const columns: GridColDef[] = [
        { field: '_id', headerName: 'ORDER ID', width: 220 },
        { field: 'isPaid', headerName: 'Paid', width: 200 },
        { field: 'isDelivered', headerName: 'Delivered', width: 200 },
        {
          field: 'createdAt',
          headerName: 'Date',
          type: 'number',
          width: 200,
        },
        {
            field: 'totalPrice',
            headerName: 'Amount',
            type: 'number',
            width: 200,
          },
          { field: 'paymentMethod',type: 'string', headerName: 'Payment Method', width: 200 },
       
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
              return (
                <>
                  <DeleteOutline
                    className="orderListDelete"
                    onClick={() => handleDelete(params.row._id)}
                  />
                </>
              );
            },
          },
      ]

      return (
          
        <div className='my-orders-cont'>
        {
              loading && <Loader />
        }
      {
          orders && <DataGrid
          rows={orders}
          columns={columns}
          getRowId={(row) => row._id}
          pageSize={10}
          rowsPerPageOptions={[10]}
          disableSelectionOnClick
          checkboxSelection
        />
      }
    </div>
      )
}

export default MyOrders;








