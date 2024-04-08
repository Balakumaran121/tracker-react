

const LastSection = () => {
  return (
    <div className="container mt-[80px] flex justify-center items-center gap-24">

        <div >
            <img className="pl-14 pb-6" src="./delivery.png" alt="" />
            <h1 className="flex  font-bold pb-2 justify-center">FREE AND FAST DELIVERY</h1>
            <h4 className="flex font-light justify-center">Free delivery to all orders over $140</h4>
        </div>
        <div>   
            <img className="pl-14 pb-6" src="./Services.png" alt="" />
            <h1 className="flex font-bold pb-2 justify-center">24/7 CUSTOMER SERVICE</h1>
            <h4 className="flex font-light justify-center">Friendly 24/7 customer support</h4>
        </div>
        <div>
            <img className="pl-14 pb-6" src="./money.png" alt="" />
            <h1 className="flex font-bold pb-2 justify-center">MONEY BACK GUARANTEE</h1>
            <h4 className="flex font-light justify-center">We return money within 15 days</h4>
        </div>
    </div>
  )
}

export default LastSection