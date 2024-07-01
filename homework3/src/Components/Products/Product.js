import React from 'react'
import { productDatas } from '../../ProductData'
import { getImageUrl } from '../../Utils';
import './Product.css'


function Check({p,expirationDate}){
  let content=null;
  if(p.expireDate.getMonth()>expirationDate){
    content=<img alt='expired' className='expiredImg' src='/images/expired.png'></img>;
  }
  return content;
}

const products=productDatas.map((p)=>
      <section className='product-design'>
                <img alt='product-image' src={getImageUrl(p)} className='ProductImages'></img>
                <h1 style={{fontSize:'1em',color:'white'}}>{p.id}</h1>
                <h2>{p.name}</h2>
                <h3>{p.price}</h3>
                <h4>{p.description}</h4>
                <h5>Expire Date : {p.expireDate.toDateString()}</h5>
                <Check p={p} expirationDate={3}></Check>
      </section>
);

export default function Product() {
  return (
    <section className='base-design'>
      {products}
    </section>
  )
}
