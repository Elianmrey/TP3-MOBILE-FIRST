import HomeStyle from './Menu.module.css'
import Logo from '../Img/logo.png'
import { useState } from 'react';


export default function Menu()
{ 
    const [open, setOpen] = useState(false);
    
    function OpenCloseMenu(open)
    {
        setOpen(!open);
     }



    return (
        <div className={HomeStyle.containerAll} onBlur={() => setOpen(false)}>
            <div className={HomeStyle.logoContainer}>
            <img src={Logo} alt="profile" className={HomeStyle.logoPhoto} />
            </div>
            <div className={open ? HomeStyle.menuButtonDisplayed : HomeStyle.menuButtonCollapsed } onClick={()=>OpenCloseMenu(open)}>Menu</div>
        <div className={open ? HomeStyle.menuBox : HomeStyle.noDisplay }>
              
            <div className={HomeStyle.container}>
                 <ul className={HomeStyle.containerMenu}>
                    
                     <li onClick={() => setOpen(false) }><a href="#" className={HomeStyle.link} >Home</a></li>
                     <li onClick={() => setOpen(false) }><a href="#" className={HomeStyle.link}>Quem somos</a></li>
                     <li onClick={() => setOpen(false) }><a href="#" className={HomeStyle.link}>Produtos</a></li>
                     <li onClick={() => setOpen(false) }><a href="#" className={HomeStyle.link}>Contatos</a></li>
                
                 </ul>
            </div>
            </div>
        </div>
);
}



//Menu desplegavel completo
//Ajustar os componentes