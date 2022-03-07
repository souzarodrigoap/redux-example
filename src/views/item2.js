import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Items2.css';

export default function Item2() {
  const data = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    if (data.shop.customer.name) {
      const nameItem = document.createElement("li");
      const list = document.getElementById("listNames");
      nameItem.appendChild(document.createTextNode(data.shop.customer.name));
      list.appendChild(nameItem);
    }
    
  }, [data])
 
  return (
    <div className="bg-items2">
      <h1>History of names</h1>
      <h4>Customer history</h4>
      <ul id="listNames" />
    </div>
  )
}
