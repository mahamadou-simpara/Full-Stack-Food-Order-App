export default function Checkout() {
  return (
    <div className="fixed top-0 bottom-0 w-full flex justify-center items-center text-black">
      <div className="absolute w-full h-full bg-black bg-opacity-60"></div>
      <div className="relative bg-amber-100 h-3/5 w-7/12 rounded overflow-hidden p-4">
        <h2 className="font-bold pb-2 text-xl">Checkout</h2>
        <h3 className="text-base">
          Total Amount: <span>$89.00</span>
        </h3>
        <form>
          <div>
            <label className="block font-semibold text-xs" htmlFor="">
              Full Name
            </label>
            <input className="w-60 h-4" type="text" />
          </div>
         
        </form>

        <div className="text-right">
          <button>Close</button>
          <button className="bg-yellow-300 px-2 py-1 rounded-lg mx-4">
            Submit Order
          </button>
        </div>
      </div>
    </div>
  );
}
