import BrowseCard from "./BrowseCard"


const data=[
    {
        id:0,
        img:"./outlinephone.png",
        name:"Phones"
    },
    {
        id:1,
        img:"./outlinecomputer.png",
        name:"Computer"
    },
    {
        id:2,
        img:"./outlinesmart.png",
        name:"SmartWatches"
    },
    {
        id:3,
        img:"./outlinecamera.png",
        name:"Camera"
    },
    {
        id:4,
        img:"./outlinehead.png",
        name:"Headphone"
    },
    {
        id:0,
        img:"./outlinegaming.png",
        name:"Gaming"
    }


]
const Browse = () => {
  return (
    <div className="container mb-2">
        <div className="flex gap-2 items-center">
            <img src="rectangle.png" alt="" />
            <p className="text-rectangle font-medium">Categories</p>
        </div>
        <div className="flex justify-between pt-2 pb-2">
            <h1 className="font-semibold text-4xl">Browse By Category </h1>
            
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {data.map((el)=>(
          <BrowseCard
          key={el.id}
          img={el.img}
          name={el.name}
          
         
          />
        ))}
      </div>
    </div>
  )
}

export default Browse