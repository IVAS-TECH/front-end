import React from 'react';
import OrderForm from './component/OrderForm';

const App: React.FC<{}> = () => (
    <main style={{ width: '60%', marginLeft: 'auto', marginRight: 'auto', marginTop: '5rem' }}>
        <OrderForm />
    </main>
);

export default App;