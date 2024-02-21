export default function Cart ({onHideCart}) {

    return <div className="fixed top-0 bottom-0 w-full flex justify-center items-center text-black" >
        <div  className="absolute w-full h-full bg-black bg-opacity-60"  onClick={onHideCart}></div>
        <div className="relative bg-white h-2/5 w-7/12 rounded overflow-hidden p-4">
            <h2 className="font-bold pb-2 text-xl">Your Cart</h2>
            <ul className="overflow-y-auto h-32">
                <li className="flex justify-between items-center">
                    <div className="flex text-sm">
                        <h3 className="pr-1">Seafood Pealla </h3> - <span className="pr-1">2 </span> <span className="pr-1">x</span><span className="pr-1">$19.99</span>  
                    </div>
                    <div className="flex items-center justify-center gap-1">
                        <button className="flex h-4 w-4 items-center justify-center text-yellow-500 bg-black px-1 rounded-full">-</button><span>0</span><button className="flex h-4 w-4 items-center justify-center text-yellow-500 bg-black px-1 rounded-full">+</button>
                    </div>
                </li>
            </ul>

            <div className="text-right">
                <button onClick={onHideCart}>Close</button>
                <button className="bg-yellow-300 px-2 py-1 rounded-lg mx-4">Got to Checkout</button>
            </div>
        </div>
    </div>
}