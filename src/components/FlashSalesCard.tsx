

interface propsType{
    img: string;
    name: string;
    count: string;
    star: string
    
}

const FlashSalesCard: React.FC<propsType> = ({img,name,count,star}) => {
  return (
    <div className="border border-black-400 hover:border-gray-300 hover:scale-105 transition-transform ">
        <div className="flex justify-between items-center p-6">
            <div className="space-y-4">
                <h3 className="font-medium text-xl">{name}</h3>
                <p className="text-gray-500">{count}</p>
                <img src={star} alt="star" />
            </div>
            <img className="w-[100px]" src={img} alt={name} />
        </div>
    </div>
  )
}

export default FlashSalesCard