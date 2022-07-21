import PropTypes from "prop-types";
import css from "./Statistics.module.css";

function StatisticsSection({ title, children }) {
    return (<section className="statistics">
        
        {title && <h2 className={css.title}>{title}</h2>}
        {children}
    </section>)
        
}

StatisticsSection.propTypes = {
    title: PropTypes.string,
};




export default StatisticsSection;