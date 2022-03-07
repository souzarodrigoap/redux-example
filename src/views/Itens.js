import { useSelector } from 'react-redux';
import './Items.css';

export default function Itens() {
  const data = useSelector((state) => {
    return state
  });
 
  return (
    <div className="bg-items">
      <h1>Current name</h1>
      <h4>Customer</h4>
      <span>{data.shop.customer.name}</span>
    </div>
  )
}
