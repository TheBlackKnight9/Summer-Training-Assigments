import express from 'express';
const app = express();

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

let products = [
  { id: 1, name: 'Laptop', price: 49999, category: 'Electronics' },
  { id: 2, name: 'Smartphone', price: 25999, category: 'Electronics' },
  { id: 3, name: 'Sofa', price: 23999, category: 'Furniture' }
];

let nextId = 4;

app.get('/products', (req, res) => {
  res.send(products);
});

app.post('/products', (req, res) => {
  console.log(req.body);
  const { name, price, category } = req.body;
  const newProduct = {
    id: nextId++,
    name,
    price: Number(price),
    category
  };
  products.push(newProduct);
  res.send('New Product added');
});

app.put('/products/:id', (req, res) => {
  const { id } = req.params;
  const { name, price, category } = req.body;
  const index = products.findIndex(p => p.id == id);
  products[index].name = name || products[index].name;
  products[index].price = price || products[index].price;
  products[index].category = category || products[index].category;
  console.log(`Updated Product ID ${id}:`, products[index]);
  res.send(`Product updated with id - ${id}`);
});

app.delete('/products/:id', (req, res) => {
  const { id } = req.params;
  const index = products.findIndex(p => p.id == id);
  res.send(`Product deleted with id - ${id}`);
});

app.listen(3000, 'localhost', () => {
  console.log('Server is running on port 3000');
});
