import React from 'react';
import './App.css';

function Index() {
    return (
        <div>
            <h2>Desenvolvimento Front-End com Frameworks</h2>
            <h3>Mobile-First UI com React</h3>
            <h4>Diferença entre responsividade e adaptabilidade</h4>
            <p>
                A responsividade se refere à capacidade de um layout ajustar-se dinamicamente
                a diferentes tamanhos de tela, seja em dispositivos móveis, tablets ou desktops.
                O design responsivo usa media queries para alterar o estilo com base nas
                dimensões da tela, proporcionando uma experiência consistente e agradável.
            </p>
            <p>
                A adaptabilidade, por outro lado, foca em criar versões distintas de um site ou
                aplicação para diferentes dispositivos. Em vez de adaptar o layout com
                base no tamanho da tela, são criadas interfaces específicas, otimizadas para cada
                contexto, como uma versão móvel separada de uma versão desktop.
            </p>
        </div>
    );
}

export default App;
