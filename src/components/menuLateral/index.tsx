import { ContaierButton, SideBarHeader, SideBarWrapper,} from "./styles"
import { useDispatch } from 'react-redux'
import { newItemModal } from "../../Store/sliceModals";
import { IoSettingsOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
export  const  MenuLateral = () => {
  const dispatch = useDispatch()
  const openNewItemModal = () => {
    dispatch(newItemModal())
  }
    return (
      <div>
        <SideBarWrapper>
            <SideBarHeader>

            <ul>
           
              
                <li><FaHome  /> Home</li>
             
              <li><IoSettingsOutline />configurações</li>
              <li><FaRegNewspaper />Noticias</li>
              <li><FaCalendarAlt />Calendário</li>
              </ul>
           <ContaierButton>

            < button className="glow-on-hover" type="button"  onClick={openNewItemModal}>
        <p>nova tarefa</p>
      </button>
            
           </ContaierButton>
              
            </SideBarHeader>
        </SideBarWrapper>
      </div>
    )
  
}
