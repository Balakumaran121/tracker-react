import CategoryCard from "./CategoryCard"
const data =[
    {
      id:0,
      name:"Asus Gaming Laptop",
      count:"New Arrivals",
      img:"/laptop.png",
      star:"/3Star.png",
      price:"$100"
  
    },
    {
      id:1,
      name:"BookShelf",
      count:"New Arrivals",
      img:"/bookshelf.png",
      star:"/4Star.png",
      price:"$250"

    },
    {
      id:2,
      name:"FootBall Boots",
      count:"New Arrivals",
      img:"/boots.png",
      star:"/5Star.png",
      price:"$400"
    },
    {
      id:3,
      name:"Canon Camera",
      count:"New Arrivals",
      img:"/camera.png",
      star:"/3Star.png",
      price:"$500"
    },
    {
      id:4,
      name:"Leather Jacket",
      count:"New Arrivals",
      img:"/jacket.png",
      star:"/2Star.png",
      price:"$150"
    },
    {
      id:5,
      name:"joystick",
      count:"New Arrivals",
      img:"/joystick.png",
      star:"/2Star.png",
      price:"$110"
    },
    {
      id:6,
      name:"VivoBook",
      count:"New Arrivals",
      img:"/laptop.png",
      star:"/4Star.png",
      price:"$1750"
    },
    {
      id:7,
      name:"44'inch LCD TV",
      count:"New Arrivals",
      img:"/lcd.png",
      star:"/3Star.png",
      price:"$1200"
    }
]


const Category = () => {
  return (

    <div className="container pt-4">
        <div className="flex gap-2 items-center">
            <img src="rectangle.png" alt="" />
            <p className="text-rectangle font-normal ">Our Products</p>
        </div>
        <div className="flex justify-between pt-2 pb-10">
            <h1 className="font-semibold text-4xl">Explore Our Products </h1>
            
        </div>      
         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((el)=>(
          <CategoryCard
          key={el.id}
          img={el.img}
          name={el.name}
          count={el.count}
          star={el.star}
          price={el.price}
         
          />
        ))}
      </div>
      <div className="flex justify-center mt-10">
          <button className="bg-rectangle w-[250px] h-[40px] text-white border hover:border-teal-800">View All Products</button>
      </div>
    </div>
  )
}

export default Category