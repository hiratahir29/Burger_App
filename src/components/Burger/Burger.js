import './Burger.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

const Burger=(props)=>{
    return(
        <div className='Burger'>
            <BurgerIngredients type='bread-top'/>
            <BurgerIngredients type='meat'/>
            <BurgerIngredients type='cheese'/>
            <BurgerIngredients type='salad'/>
            <BurgerIngredients type='bread-bottom'/>
        </div>
    )
}


export default Burger