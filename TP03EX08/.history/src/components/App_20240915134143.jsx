
import Product from './Products/Products.jsx';
import StyleLayout from './LayoutApp.module.css'

export default function App()
{ 

    const elements = [
        {
            id: 1,
            image: "https://img.freepik.com/vetores-gratis/luzes-de-neon-iluminadas-palco-vetor-realista_1441-3734.jpg?t=st=1726418491~exp=1726422091~hmac=3e99890a786a8387d278c41a055a8fb7991a290438c1b02a296d8dcada4830cb&w=740",
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