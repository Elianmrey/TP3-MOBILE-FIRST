
import Product from './Products/Products.jsx';
import StyleLayout from './LayoutApp.module.css'

export default function App()
{ 

    const elements = [
        {
            id: 1,
            image: "url-da-imagem-1.jpg",
            title: "Home",
            description: "Página inicial",
            footer: "Explore nossos serviços"
        },
        {
            id: 2,
            image: "url-da-imagem-2.jpg",
            title: "Serviços",
            description: "Conheça nossos serviços",
            footer: "Mais detalhes"
        },
        {
            id: 3,
            image: "url-da-imagem-3.jpg",
            title: "Produtos",
            description: "Veja nossos produtos",
            footer: "Disponível para compra"
        },
        {
            id: 4,
            image: "url-da-imagem-4.jpg",
            title: "Sobre nós",
            description: "Saiba mais sobre a empresa",
            footer: "Nossa história"
        },
        {
            id: 5,
            image: "url-da-imagem-5.jpg",
            title: "Contatos",
            description: "Fale conosco",
            footer: "Entre em contato"
        }
    ];
    return (
        <div className={StyleLayout.containerAll}>
            <Product />
        </div>
          
        

        
    );
}