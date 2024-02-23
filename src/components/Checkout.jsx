export default function Checkout({onClose}) {
  return (
    <div className="fixed top-0 bottom-0 w-full flex justify-center items-center text-black">
      <div className="absolute w-full h-full bg-black bg-opacity-60"></div>
      <div className="relative bg-amber-100 h-3/5 w-7/12 rounded overflow-hidden p-4">
        <h2 className="font-bold pb-2 text-xl">Checkout</h2>
        <h3 className="mb-2 text-base">
          Total Amount: <span>$89.00</span>
        </h3>
        <form>
          <div>
            <label className="block font-semibold text-xs" htmlFor="">
              Full Name
            </label>
            <input className="mb-2 w-60 h-6 border-2 rounded-sm" type="text" />
          </div>

          <div>
            <label className="block font-semibold text-xs" htmlFor="">
              E-Mail Address
            </label>
            <input className="mb-2 w-60 h-6 border-2 rounded-sm" type="text" />
          </div>
          <div>
            <label className="block font-semibold text-xs" htmlFor="">
              Street
            </label>
            <input className="mb-2 w-60 h-6 border-2 rounded-sm" type="text" />
          </div>
          <div className="flex gap-4">
            <div>
              <label className="block font-semibold text-xs" htmlFor="">
                Postal Code
              </label>
              <input className="mb-2 w-35 h-6 border-2 rounded-sm" type="number" />
            </div>
            <div>
              <label className="block font-semibold text-xs" htmlFor="">
                City
              </label>
              <input className="mb-2 w-35 h-6 border-2 rounded-sm" type="text" />
            </div>
          </div>
        </form>
        <div className="text-right">
          <button onClick={onClose}>Close</button>
          <button className="bg-yellow-400 px-3 py-1 rounded-md mx-4">
            Submit Order
          </button>
        </div>
      </div>
    </div>
  );
}
