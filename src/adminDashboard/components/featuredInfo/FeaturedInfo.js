import React, { useEffect, useState } from "react";
import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getAnalysis } from "../../../actions/orderActions";
import Loader from "../../../Components/loader/Loader";

export default function FeaturedInfo() {
  // const [income, setIncome] = useState([])
  // const [percentage, setPercentage] = useState(0)
  const dispatch = useDispatch()
  const orderAnalysis = useSelector((state) => state.orderAnalysis)
  const {loading, analysis} = orderAnalysis;

  useEffect(() => {
      dispatch(getAnalysis())
  },[dispatch])
 
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
       {
         analysis ? <div className="featuredMoneyContainer">
         <span className="featuredMoney">£{analysis[1].total}</span>
         <span className="featuredMoneyRate">
           %{Math.floor((analysis[1].total*100) / analysis[0].total - 100)}
           {
             Math.floor((analysis[1].total*100) / analysis[0].total - 100) < 0 ? 
             <ArrowDownward  className="featuredIcon negative"/>
             :
             <ArrowUpward className="featuredIcon"/>
           } 
           
         </span>
       </div> :
       <div className="loader-box">
         <Loader />
      </div>
       }
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">£4,415</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">£2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
