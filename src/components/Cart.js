import '../styles/Cart.css'

function Cart(){
  const prixMonstera = 8;
  const prixLierre = 10;
  const prixBouquet = 15;
  return (
    <div className="lmj-cart">
      <ul>
        <li>
          <p>Monstera</p>
          <p>{ prixMonstera }</p>
        </li>
        <li>
          <p>Lierre</p>
          <p>{ prixLierre }</p>
        </li>
        <li>
          <p>Bouquet</p>
          <p>{ prixBouquet }</p>
        </li>
      </ul>
      <p>Total : { prixMonstera + prixLierre + prixBouquet}€</p>
    </div>
  )
}

export default Cart