const http = require('http');
const porta = 3000

const server = http.createServer((req, res) => {
    
    //Mostra a rota solicitada
    url = req.url
    console.log('url: ',url);

       //Aqui vão as Rotas
    if(url === '/') {
        res.writeHead(200,'ok',{ 'Content-Type': 'text/html; charset=utf-8' }) 
        res.end('<h1>Mercadinho da Juju</ul>');
    } 
    else if(url === '/verduras'){ //nova rota acrescentada
        res.writeHead(200,'ok',{ 'Content-Type': 'text/html; charset=utf-8' }) 
        res.end('<ul><li>alface</li><li>rucula</li></ul>');
    }
    else if(url === '/frutas'){ //nova rota acrescentada
        res.writeHead(200,'ok',{ 'Content-Type': 'text/html; charset=utf-8' }) 
        res.end('<ul><li>maçã</li><li>banana</li><li>laranja</li></ul>');
    }
    else if(url === '/carnes'){ //nova rota acrescentada
        res.writeHead(200,'ok',{ 'Content-Type': 'text/html; charset=utf-8' }) 
        res.end('<ul><li>frango</li><li>carne bovina</li><li>peixe</li></ul>');
    }
       else if(url === '/bebidas'){ //nova rota acrescentada
        res.writeHead(200,'ok',{ 'Content-Type': 'text/html; charset=utf-8' }) 
        res.end('<ul><li>água</li><li>suco de laranja</li><li>refrigerante</li></ul>'); 
    }
    else {
       res.writeHead(404,'Pagina não encontrada',{ 'Content-Type': 'text/html; charset=utf-8' }) //rota nao cadastrada
       res.end('Pagina não encontrada');
    }
});

server.listen(porta, () => {
    console.log('Servidor rodando');
    console.log('Endereco: http://localhost:' + porta);
});