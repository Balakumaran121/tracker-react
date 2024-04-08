

interface propsType{
    img: string;
    name: string;

    
}

const BrowseCard: React.FC<propsType> = ({img,name}) => {
  return (
    <div className=" flex justify-center border border-none hover:bg-rectangle hover:border-gray-300 hover:scale-105 transition-transform ">
        <div className="flex justify-between  items-center p-6">
    
            <img className="w-[100px]" src={img} alt={name} />
        </div>
    </div>
  )
}

export default BrowseCard