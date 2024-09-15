
import Product from './Products/Products.jsx';
import StyleLayout from './LayoutApp.module.css'

export default function App()
{ 

    const products = [
        {
            id: 1,
            image: "produto-1.jpg",
            title: "Produto A",
            description: "Um produto de alta qualidade",
            footer: "R$ 199,99"
        },
    return (
        <div className={StyleLayout.containerAll}>
            <Product />
        </div>
          
        

        
    );
}