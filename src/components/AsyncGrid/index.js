import PropTypes from 'prop-types';
import './asyncGrid.css';

const AsyncGrid = ({ cards }) => {
    return (
        <div className="async-grid">
            {cards.map((CardComponent, index) => (
                <div key={index} className={`async-grid-item asg-item${index + 1}`}>
                    {CardComponent}
                </div>
            ))}
        </div>
    );
};

AsyncGrid.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default AsyncGrid;