import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '6376dc284a52d4c311831b0b',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1668732418470-coca-cola.png',
          'price': 7,
        },
        'quantity': 1,
        '_id': '6376dc284a52d4c311831b0c'
      }
    ],
  },
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🧭"
        title="Fila de espera"
        orders={orders}
      />

      <OrdersBoard
        icon="👩‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={[]}
      />
    </Container>
  );
}
