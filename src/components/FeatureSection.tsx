import ProductCard from "./ProductCard";
const data=[
    {id:0, img:"product__1.jpg", name:"Dried Mango", price:"$500"},
    {id:1, img:"product__2.jpg", name:"Crunchy Crisps", price:"$300"},
    {id:2, img:"product__3.jpg", name:"Jewel Cranberries", price:"$200"},
    {id:3, img:"product__4.jpg", name:"Almond organic", price:"$100"}
];


const FeatureSection = () => {
  return (
    <div className="container pt-16">
        <div className="lg:flex justify-between items-center">
            <div>
                <h3 className="font-medium text-2xl">Fruits & Vegetables</h3>
                <p className="text-gray-600 mt-2">
                    Buy farm fresh Fruits and Vegetables online at the best prices and values
                </p>
            </div>
            <div className="space-x-4 mt-8 lg:mt-0">
                <button className="feature_btn">Fruits</button>
                <button className="text-gray-600 hover:text-accent">
                    Vegetables
                </button>
                <button className="text-gray-600 hover:text-accent">
                    Bread & Bakery
                </button>

            </div>
        </div>

        <div className=" grid sm:grid-cols-2 md:grid-cols-4 lg:gird-cols-4 pt-8 gap-2">
                
                {data.map((el) =>(
                    <ProductCard key={el.id}
                    img={el.img}
                    name={el.name}
                    price={el.price}/>
                ))}
        </div>
    </div>
  )
}

export default FeatureSection