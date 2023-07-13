import { plantList } from '../datas/plantList'
import CareScale from './CareScale.js'
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
				{plantList.map((plant) => (
					<li className='lmj-plant-item' key={plant.id}>
						{plant.name}
						{plant.isBestSale && <span>🔥</span>}
						{plant.isSpecialOffer && <span className='lmj-sales'>SOLDES</span>}

						<CareScale careType='water' scaleValue={plant.water} />
						<CareScale careType='light' scaleValue={plant.light} />
					</li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList