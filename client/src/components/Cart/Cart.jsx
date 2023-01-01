import React from 'react';
import "./Cart.scss";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Cart = () => {

    const data = [
        {
            id: 1,
            img1: "https://images.pexels.com/photos/10581052/pexels-photo-10581052.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "Fairy Asymmetrical Dress",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae repellat velit, earum culpa nostrum mollitia iste quia, commodi excepturi exercitationem ratione. Ullam rem eaque ratione dolorem necessitatibus harum et veniam.",
            isNew: true,
            oldPrice: 35,
            newPrice: 19
        },
        {
            id: 2,
            img1: "https://images.pexels.com/photos/3689148/pexels-photo-3689148.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae repellat velit, earum culpa nostrum mollitia iste quia, commodi excepturi exercitationem ratione. Ullam rem eaque ratione dolorem necessitatibus harum et veniam.",
            title: "Brown Checked Jacket",
            isNew: true,
            oldPrice: 29,
            newPrice: 15
        },
    ];


  return (
    <div className="cart">
        <h1 className='cart-desc'>Your cart</h1>
        {data?.map(item=>(
            <div className="item" key={item.id}>
                <img src={item.img1} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <div className="price">1 x {item.newPrice}</div>
                </div>
                <DeleteOutlineIcon className='delete'/>
            </div>
        ))}
        
        <div className="total">
            <span>Subtotal: </span>
            <span>$123</span>
        </div>
        <button>Proceed to checkout</button>
        <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart