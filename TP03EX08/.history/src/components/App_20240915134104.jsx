
import Product from './Products/Products.jsx';
import StyleLayout from './LayoutApp.module.css'

export default function App()
{ 

    const elements = [
        {
            id: 1,
            image: "https://img.freepik.com/psd-gratuitas/modelo-de-banner-de-super-venda-de-midia-social-da-black-friday_120329-2133.jpg?t=st=1726418444~exp=1726422044~hmac=8cb71a31bd86de2cd20c89f16f375197c4bd3665a6fd8fb1faf000584d675ccd&w=740",
            title: "Produto A",
            description: "Um produto de alta qualidade",
            footer: "R$ 199,99"
        }]
    return (
        <div className={StyleLayout.containerAll}>
            <Product  elements={elements}/>
        </div>
          
        

        
    );
}