
import Product from './Card/Products.jsx';
import StyleLayout from './LayoutApp.module.css'

export default function App()
{ 

    const elements = [
        {
            id: 1,
            image: "https://img.freepik.com/fotos-gratis/vista-frontal-de-produtos-de-beleza-na-prateleira-com-espaco-de-copia_23-2150718068.jpg?t=st=1726418775~exp=1726422375~hmac=68098f359c43f1af7ec38cfde6077c52f504f1f1392c8623e4d6ad7a1eb72cd6&w=826",
            title: "Conjunto Escencias Florais ",
            description: "Um produto de alta qualidade Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque neque nemo ut asperiores sequi corrupti nulla doloremque iure.",
            footer: "R$ 199,99 A vista ou em até 12X de 16,65"
        }]
    return (
        <div className={StyleLayout.containerAll}>
            <Product  elements={elements}/>
        </div>
          
        

        
    );
}