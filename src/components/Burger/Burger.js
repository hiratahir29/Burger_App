import './Burger.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

const Burger=(props)=>{
       let dynamic=props.ingredients.map(obj=>{
        let arr=[]
        for(let i=0;i<obj.no;i++)
        {
             arr.push(<BurgerIngredients type={obj.name}/>)
        }
        return arr
    })

    let flag=0
    for(let i of props.ingredients)
    {
        if(i.no!==0)
        {
            flag=1
        }
    }
    if(flag===0)
    {
        dynamic=<p>Please start adding ingredients</p>
    }
    return(
        <div className="Burger">

            <BurgerIngredients type='bread-top'/>
            {dynamic}
            <BurgerIngredients type='bread-bottom'/>

        </div>
    )
}

export default Burger