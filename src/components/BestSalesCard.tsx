
interface propsType{
    img: string;
    name: string;
    count: string;
    star: string
    
}

const BestSalesCard: React.FC<propsType> = ({img,name,count,star}) => {
  return (
    <div className="border border-black-400 hover:border-black-300 hover:scale-105 transition-transform ">
        <div className="flex justify-center items-center bg-teal-200 p-6">
            <div className=" space-y-4 ">
                 <img className="w-[100px] " src={img} alt={name} />
                <h3 className="font-medium text-xl">{name}</h3>
                <p className="text-gray-500">{count}</p>
                <img src={star} alt="star" />
            </div>
        </div>
    </div>
  )
}

export default BestSalesCard