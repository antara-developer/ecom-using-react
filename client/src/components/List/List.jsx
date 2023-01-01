import React from 'react'
import "./List.scss";
import Card from "../Card/Card"

const List = () => {

    const data = [
        {
            id: 1,
            img1: "https://images.pexels.com/photos/10581052/pexels-photo-10581052.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            img2: "https://images.pexels.com/photos/10581053/pexels-photo-10581053.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "Fairy Asymmetrical Dress",
            isNew: true,
            oldPrice: 35,
            newPrice: 19
        },
        {
            id: 2,
            img1: "https://images.pexels.com/photos/3689148/pexels-photo-3689148.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            img2: "https://images.pexels.com/photos/3689149/pexels-photo-3689149.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "Brown Checked Jacket",
            isNew: true,
            oldPrice: 29,
            newPrice: 15
        },
        {
            id: 3,
            img1: "https://images.pexels.com/photos/1024033/pexels-photo-1024033.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            img2: "https://images.pexels.com/photos/1024036/pexels-photo-1024036.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "Yellow Summer Dress",
            isNew: false,
            oldPrice: 59,
            newPrice: 39
        },
        {
            id: 4,
            img1: "https://images.pexels.com/photos/13709916/pexels-photo-13709916.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            img2: "https://images.pexels.com/photos/13709921/pexels-photo-13709921.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "Disco Pink 2 Piece Set",
            isNew: false,
            oldPrice: 40,
            newPrice: 29
        },
    ];

  return (
    <div className='list'>
        {data?.map(item=>(
            <Card item = {item} key={item.id}/>
        ))}
    </div>
  )
}

export default List