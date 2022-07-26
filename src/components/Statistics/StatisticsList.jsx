import Statistics from "./Statistics";
import css from "./Statistics.module.css";
import PropTypes from "prop-types";

import React from 'react';


class StatisticsList extends React.Component {
    static defaultProps = {
        initialBackground: '#fff',
    }
    state = {
    background: this.props.initialBackground,
    };

    getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }



  static propTypes = {
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  render() {
    const { stats } = this.props;
    return (
      <ul className={css.stat_list}>
        {stats.map(statistic => (
            <li style={{backgroundColor: this.getRandomColor()}}  className={css.item} key={statistic.id} >
            <Statistics label={statistic.label} percentage={statistic.percentage} />
          </li>
        ))}
      </ul>
    );
  }
}


export default StatisticsList;