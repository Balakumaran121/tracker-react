import FlashSalesCard from "./FlashSalesCard"

const data =[
    {
      id:0,
      name:"Asus Gaming Laptop",
      count:"9 products",
      img:"/laptop.png",
      star:"/5Star.png"
  
    },
    {
      id:1,
      name:"BookShelf",
      count:"9 products",
      img:"/bookshelf.png",
      star:"/4Star.png"
    },
    {
      id:2,
      name:"FootBall Boots",
      count:"9 products",
      img:"/boots.png",
      star:"/5Star.png"
    },
    {
      id:3,
      name:"Canon Camera",
      count:"9 products",
      img:"/camera.png",
      star:"/3Star.png"
     
    },
    {
      id:4,
      name:"Leather Jacket",
      count:"9 products",
      img:"/jacket.png",
      star:"/2Star.png"
    },
    {
      id:5,
      name:"joystick",
      count:"9 products",
      img:"/joystick.png",
      star:"/3Star.png"

    }
   
]

const FlashSales = () => {
  return (
    <div className="container ">

        <div className="flex gap-2 items-center">
            <img src="rectangle.png" alt="" />
            <p className="text-rectangle font-medium">Today's</p>
        </div>
        <div className="flex justify-between pt-2 pb-2">
            <h1 className="font-semibold text-4xl">Flash Sales </h1>
            <img src="sales.png" alt="" />
        </div>
        
         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {data.map((el)=>(
          <FlashSalesCard
          key={el.id}
          img={el.img}
          name={el.name}
          count={el.count}
          star={el.star}
         
          />
        ))}
      </div>
      <div className="flex justify-center"> 
                <button className="bg-rectangle w-[250px] h-[40px] text-white my-4 border hover:border-black">View All Products</button>
      </div>
     </div> 
    
  )
}

export default FlashSales