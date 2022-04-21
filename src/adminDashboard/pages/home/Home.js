
import React, { useEffect, useMemo, useState } from 'react'
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useDispatch, useSelector } from 'react-redux';
import { listUsersStats } from '../../../actions/userActions';

const AdminHome = () => {
  const [fetchedUserStats, setFetchedUserStats] = useState()
  const dispatch = useDispatch()
  const userStats = useSelector((state) => state.userStats)
  const {laoding, users} = userStats
  

  const MONTHS = useMemo(() => [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ], []);

  useEffect(() => {
    dispatch(listUsersStats())
   
  }, [dispatch])

  useEffect(() => {
    const getUserStats = () => {
      users && users.map((item) => (
        setFetchedUserStats((prev) => [
          {name: MONTHS[item._id], "Active User": item.total}
        ])
      ))
    }
    
    getUserStats()
  }, [MONTHS, users])

  return (
    <div >
      <Topbar />
      <main className='admin-container'>
      <Sidebar />
        <div className="home">
            <FeaturedInfo />
            <Chart data={fetchedUserStats} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    </main>
    </div>
  )
}

export default AdminHome






