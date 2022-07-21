import Statistics from "./Statistics";
import css from "./Statistics.module.css";



import PropTypes from "prop-types";




function StatisticsList({ stats }) {
   

    

    return (
    <ul className={css.stat_list}>
    {stats.map(statistic => (
        <li className={css.item} key={statistic.id}>
            
    <Statistics 
        label={statistic.label}
        percentage={statistic.percentage}
    />
    </li>
          ))}
    </ul>
  );
}


 
StatisticsList.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
}



export default StatisticsList;