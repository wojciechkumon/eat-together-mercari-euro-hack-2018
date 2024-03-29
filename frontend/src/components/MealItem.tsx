import * as React from 'react';
import {FullMeal} from "./Event";
import {intolerancesTypes} from "./intolerancesTypes";

class MealItem extends React.PureComponent<MealItemProps> {

  render() {
    const {meal} = this.props;
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-et">{meal.name}</h5>
          <div>
            {meal.ingredients.split(',').map(ingredient =>
              <span key={ingredient} className="badge badge-dark">{ingredient}</span>
            )}
          </div>
          <div>
            {meal.intolerances.map(intolerance =>
              intolerancesTypes.filter(x => x.name === intolerance.intoleranceType).map(intoleranceType =>
                <button key={intoleranceType.name} type="button" className="btn btn-outline-secondary p-1"><span
                  style={{textDecoration: 'line-through'}}>{intoleranceType.icon}</span> {intoleranceType.text}</button>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

interface MealItemProps {
  meal: FullMeal;
}

export default MealItem;
