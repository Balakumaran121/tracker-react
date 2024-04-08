import BestSalesCard from "./BestSalesCard"



const data =[
    {
        id:0,
      name:"Asus Gaming Laptop",
      count:"9 products",
      img:"/shelf.png",
      star:"/5Star.png"
    },
    {
        id:1,
      name:"Asus Gaming Laptop",
      count:"9 products",
      img:"/cooler.png",
      star:"/5Star.png"
    },
    {
        id:2,
      name:"Asus Gaming Laptop",
      count:"9 products",
      img:"/handbag.png",
      star:"/5Star.png"
    },
    {
        id:3,
      name:"Asus Gaming Laptop",
      count:"9 products",
      img:"/coat.png",
      star:"/5Star.png"
    }
]
const BestSales = () => {
    return (
      <div className="container p-4">
  
          <div className="flex gap-2 items-center">
              <img src="rectangle.png" alt="" />
              <p className="text-rectangle font-medium">Today's</p>
          </div>
          <div className="flex justify-between pt-2 pb-2">
              <h1 className="font-semibold text-4xl">Flash Sales </h1>
              <button className="bg-rectangle w-[100px] font-medium text-white border hover:border-red-950">View All</button>  
          </div>
          
           <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((el)=>(
            <BestSalesCard
            key={el.id}
            img={el.img}
            name={el.name}
            count={el.count}
            star={el.star}
           
            />
          ))}
        </div>
        
       </div> 
      
    )
  }
  
  export default BestSales