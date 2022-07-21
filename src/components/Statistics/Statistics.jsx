import React from "react";
import PropTypes from "prop-types";
import css from "./Statistics.module.css";

const Statistics = ({ label, percentage }) => {
    return (


 
<>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
  </>
   
 

    )
}

Statistics.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number
}

export default Statistics;