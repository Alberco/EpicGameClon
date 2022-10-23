import { useState } from "react";
import { RiHome3Line, 
         RiFirefoxLine,
         RiLayoutGridLine,
         RiTeamLine,
         RiWirelessChargingLine,
         RiDownload2Line,
         RiSettings2Line,
         RiCheckboxBlankCircleFill,
         RiMenu2Line,
         RiCloseLine,
         RiNotification2Line,
         RiSearchLine,
         RiArrowRightSLine,
         RiArrowRightCircleLine,
         RiArrowLeftCircleLine} from "react-icons/ri";

function App() {

  const [showMenu,setShowMenu] = useState(false)

  const toogleMenu = () =>{
    setShowMenu(!showMenu)
  }

  return (
    
    <div className="bg-[#141414] min-h-screen ">
      <sidebar 
      className={`fixed top-0 w-80 h-full border-gray-800 border-r p-8 flex flex-col 
      justify-between bg-[#141414] transition-all duration-500 lg:left-0 ${showMenu ? "left-0": "-left-full"} z-50 `}>
        <div>
          {/* logo  -- tracking espaciado entre las letras */}
          <h1 className="text-gray-300  uppercase font-bold text-2xl tracking-[5px] mb-10">Tu logo</h1>
            <ul>
            <li>
              <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-lg transition-colors">
                <RiHome3Line />
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-lg transition-colors">
                <RiFirefoxLine />
                Store
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-lg transition-colors">
                <RiLayoutGridLine />
                Library
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-lg transition-colors">
                <RiTeamLine/>
                Friends
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-lg transition-colors">
                <RiWirelessChargingLine />
                Live
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-lg transition-colors">
                <RiDownload2Line />
                Download
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-lg transition-colors">
                <RiSettings2Line />
                Settings
              </a>
            </li>
            <li>
              <a href="#" className="relative text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-lg transition-colors">
                <img src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg" className="w-6 h-6 object-cover rounded-full" />
                <RiCheckboxBlankCircleFill className="absolute text-green-600 bottom-3 left-8 text-[8px]"/>
                Turng Tran
              </a>
            </li>
          </ul>
        </div>
        {/* boton menu mobil  */}
        <button onClick={toogleMenu} className="lg:hidden z-50 bg-blue-600 text-white fixed bottom-8 right-6 p-2 text-lg rounded-full">
          {
            showMenu ? 
            <RiCloseLine /> : 
            <RiMenu2Line /> 
          }
        </button>
      </sidebar>
      {/* header */}
      <header className="fixed lg:pl-[340px] w-full flex flex-col md:flex-row gap-4 items-center justify-between p-8 bg-[#141414] z-40">
        <nav className="flex items-center gap-4 order-1 lg:order-none">
          <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-full">Discoverd</a>
          <a href="#" className="text-gray-300 px-4 py-2 rounded-full">Browse</a>
          <a href="#" className="text-gray-300 px-4 py-2 rounded-full">Wishlist</a>
        </nav>
        <ul className="flex items-center gap-4">
          <li>
            <a href="#" className="text-gray-500 text-lg">
              <RiNotification2Line />
            </a>
          </li>
          <li>
            <form className="relative flex-1">
                <RiSearchLine className="absolute text-gray-500 top-3 left-2" />
                <input type="text"  className="bg-[#232323] outline-none text-gray-300  py-2 pl-8 pr-4 rounded-full" placeholder="Search"/>
              </form>
          </li>
        </ul>
      </header>
      {/* content */}
      <main className="lg:pl-[340px] p-8 pt-36">
        {/* hero */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-2">
          <div className="md:col-span-5 relative">
            <img 
            src="https://cdn2.unrealengine.com/Fortnite%2Fblog%2Fsolo-showdown-limited-time-mode%2FFN_News_Large_EPIC-GAMES-WILL-PROVIDE-%24100-1920x1080-76e2c7bb0d4bc98e61d7e516c76bc3113f6ce9d7.jpg"
            className="w-full h-[500px] object-cover lg:rounded-tl-xl lg:rounded-bl-xl" />
            <h1 className="absolute top-4 left-4 text-3xl text-white font-bold">Fornait</h1>
            <div className="absolute left-0 bottom-0  p-8 max-w-xl">
              <p className="text-gray-200">Update</p>
              <h2 className="text-4xl text-white font-extrabold mb-4">The hunt is on in Fornait Chapter 2 - Season 5 : Zero point</h2>
              <button className="bg-blue-600 text-white py-4 px-6 rounded-lg flex items-center gap-2 text-lg group">
                Play for free <RiArrowRightSLine className="group-hover:translate-x-1 transition-all" />
              </button>
            </div>
          </div>
          <div className="col-span-1 w-full h-[500px] bg-[#232323] lg:rounded-tr-xl lg:rounded-br-xl">
            <ul className="p-4 flex flex-col gap-6 h-full overflow-y-scroll scrollbar">
              <li>
                <a href="#" className="flex items-center gap-4 text-lg text-white">
                  <img src="https://static-cdn.jtvnw.net/ttv-boxart/33214-272x380.jpg" className="w-20 h-full object-cover"  alt="" />
                  <span className="md:hidden lg:block">Fornait</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-4 text-lg text-white">
                  <img src="https://image.api.playstation.com/vulcan/ap/rnd/202009/1717/O4a5fDUWo54zIJzOyKgV73U2.png" className="w-20 h-full object-cover"  alt="" />
                  <span className="md:hidden lg:block">Rocket League</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-4 text-lg text-white">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHq5i0-rda7adJ433IebSm7FfQfFK5iTX3BDPCmwpLJ9lAaxrJ3KQ659tE1dMt5og05yI&usqp=CAU" className="w-20 h-full object-cover"  alt="" />
                  <span className="md:hidden lg:block">The Escapist 2</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-4 text-lg text-white">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHq5i0-rda7adJ433IebSm7FfQfFK5iTX3BDPCmwpLJ9lAaxrJ3KQ659tE1dMt5og05yI&usqp=CAU" className="w-20 h-full object-cover"  alt="" />
                  <span className="md:hidden lg:block">Fornait</span>
                </a>
              </li>
             
            </ul>
          </div>
        </div>
        {/* slide videogame */}
        <div className="mt-10 mb-6 flex items-center justify-between">
          <h5 className="text-gray-300 text-2xl">Games on sale</h5>
          <div className="text-gray-400 text-3xl flex items-center gap-4">
            <RiArrowLeftCircleLine className="cursor-pointer"/>
            <RiArrowRightCircleLine className="cursor-pointer text-white"/>
          </div>
        </div>
        {/* videojuegos  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          <div className="p-4">
            <img src="https://store-images.s-microsoft.com/image/apps.9561.69766501749678274.825421a3-6e90-4af8-a717-6375f4b1f802.ce79e4cd-489f-48ea-b7da-b546860070ed" className="w-full h-96 object-cover rounded-xl mb-2" />
            <h3 className="text-gray-300 text-lg">Tekken 7</h3>
            <p className="text-gray-500 mb-3" >Action games</p>
            <span className="text-white">$8.15</span>
          </div>
          <div className="p-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRsc9611FsuZtM-DUlCQ-QmuJuOu8b14qIw&usqp=CAU" className="w-full h-96 object-cover rounded-xl mb-2" />
            <h3 className="text-gray-300 text-lg">Bioshock</h3>
            <p className="text-gray-500 mb-3" >Action games</p>
            <div className="flex items-center gap-2">
              <span className="text-green-800 bg-green-300 p-1 rounded-lg">-80%</span>
              <span className="text-gray-500">$50</span>
              <span className="text-white">$8.15</span>
            </div>
          </div>
          <div className="p-4">
            <img src="https://image.api.playstation.com/cdn/UP0006/CUSA02685_00/kyrtdOC1pP3uT5kmJOcBiDFSBYPTBOxQ.png" className="w-full h-96 object-cover rounded-xl mb-2" />
            <h3 className="text-gray-300 text-lg">Unravel</h3>
            <p className="text-gray-500 mb-3" >Aventure games</p>
            <span className="text-white">$20.15</span>
          </div>
          <div className="p-4">
            <img src="https://upload.wikimedia.org/wikipedia/en/c/cb/Devil_May_Cry_5.jpg" className="w-full h-96 object-cover rounded-xl mb-2" />
            <h3 className="text-gray-300 text-lg">Devil May Cry 5</h3>
            <p className="text-gray-500 mb-3" >Action games</p>
            <div className="flex items-center gap-2">
              <span className="text-green-800 bg-green-300 p-1 rounded-lg">-80%</span>
              <span className="text-gray-500">$150</span>
              <span className="text-white">$80.15</span>
            </div>
          </div>
          <div className="p-4">
            <img src="https://image.api.playstation.com/vulcan/ap/rnd/202007/3011/XvnzJgGIMboG4a1KCcxZlz9k.png" className="w-full h-96 object-cover rounded-xl mb-2" />
            <h3 className="text-gray-300 text-lg">Hitman 3</h3>
            <p className="text-gray-500 mb-3" >Aventure games</p>
            <span className="text-white">$10.15</span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
