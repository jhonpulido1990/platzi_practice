const EventEmitter =  require('events');

const emisorProducts = new EventEmitter();

emisorProducts.on('compra', (total, numProducts)=> {
    console.log(`Total de la compra $${total}`);
    console.log(`Numero de productos ${numProducts}`);
});

emisorProducts.emit('compra', 500, 5)
