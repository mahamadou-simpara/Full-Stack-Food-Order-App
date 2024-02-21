import logo from '../assets/logo.jpg'

export default function Header ({onShowCart}) {
    return <header className='h-20 m-auto my-0 w-4/5 flex justify-between'>
    <div className='flex items-center'>
    <img className="h-10 w-10 rounded-full border-2 border-yellow-500" src={logo}/>
    <h2 className='text-yellow-500 uppercase font-bold ml-1.5'>ReactFood</h2>
    </div>
    <div className='flex items-center text-yellow-500 justify-center cursor-pointer' onClick={onShowCart}>cart(<span className='mb-1'>3</span>)</div>
</header>
}