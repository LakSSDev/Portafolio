import { NavHeader } from "./NavHeader"


export const Header = () => {

    return(<header className="navDisplay flex mx-auto justify-between items-center max-w-[1300px] py-4 mt-6">
        <div className="flex items-center gap-3">
         
         <h2 className="uppercase font-bold text-white text-2xl">
            Castro Dev
         </h2>
        </div>

        <NavHeader/>

        <div className="sm:flex gap-3 md:gap-5 lg:gap-9">
          <a className="uppercase font-bold text-xs text-white border-2 border-white rounded-[40px] py-1 px-3  md:py-2 lg:py-4 md:px-4 lg:px-9">
            CONTACT US
          </a>
        </div>


        
      </header>)
}