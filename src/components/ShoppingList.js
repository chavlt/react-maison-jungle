import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem.js'
import '../styles/ShoppingList.css'


function ShoppingList() {
	let plantCategories = [];
	plantList.forEach((plant) => {
		if(plantCategories.includes(plant.category)){
			return;
		}else{
			plantCategories.push(plant.category);
		}
	})

	return (
		<div>
			<ul>
				{plantCategories.map((plant, index) => (
					<li key={`${plant}-${index}`}>{ plant }</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map(({id, cover, name, water, light}) => (
					<PlantItem id={id} cover={cover} name={name} water={water} light={light} />
				))}
			</ul>
		</div>
	)
}

export default ShoppingList