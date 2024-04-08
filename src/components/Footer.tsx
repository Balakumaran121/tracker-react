import { BsSendArrowDown } from "react-icons/bs"
import { FiFacebook } from "react-icons/fi"
import { FiTwitter } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";


const Footer = () => {
  return (
    <div className=" mt-10 pt-[60px] h-[400px] bg-black text-white flex justify-around">
        <div>
            <h1 className="font-bold text-lg mb-6">Exclusive</h1>
            <h3 className="font-semibold text-lg mb-6">Subscribe</h3>
            <h6 className="font-light mb-3">Get 10% Off for your first order </h6>
            <div className="relative w-full max-w-[200px]">
                <input className="bg-black text-white border  px-6 py-3 rounded-[10px] w-full" type="text" placeholder="Enter Your Email" />
                <BsSendArrowDown className="absolute top-0 right-0 mt-4 mr-5" size={20}/>
            </div>    

        </div>
        <div>
            <h1 className="font-bold text-lg mb-6">Support</h1>
            <h3 className="font-light text-lg mb-6">111,Mount Road <br /> Chennai,India</h3>
            <h6 className="font-light mb-6">exclusive@gmail.com </h6>
            <h6 className="font-light ">+8943-453-2341 </h6>
        </div>
        <div>
            <h1 className="font-bold text-lg mb-4">Account</h1>
            <h6 className="font-light mb-4">My Account</h6>
            <h6 className="font-light mb-4">Login / Register</h6>
            <h6 className="font-light mb-4">Cart</h6>
            <h6 className="font-light mb-4">WishList</h6>
            <h6 className="font-light mb-4">Shop</h6>
            
        </div>
        <div>
            <h1 className="font-bold text-lg mb-4">Quick Link</h1>
            <h6 className="font-light mb-4">Privacy Policy</h6>
            <h6 className="font-light mb-4">Term of Use</h6>
            <h6 className="font-light mb-4">FAQ</h6>
            <h6 className="font-light mb-4">Contact</h6>
        </div>
        <div>
            <h1 className="font-bold mb-6">Download App</h1>
            <p className="font-light">Save $3 with App New User Only</p>
            <div className="flex gap-4 mt-4">
                <div><img src="./scancode.png" alt="" /></div>
                <div className="gap-2">
                    <div><img src="./GooglePlay.png" alt="" /></div>
                    <div><img src="./AppStore.png" alt="" /></div>
                </div>
            </div>
            <div className="flex gap-3 mt-5">
                <a href=""><FiFacebook size={30} /></a>
                <a href=""><FiTwitter size={30}/></a>
                <a href=""><FaXTwitter size={30}/></a>
                <a href=""><SlSocialLinkedin size={30}/></a>
            </div>

        </div>
    </div>
  )
} 

export default Footer