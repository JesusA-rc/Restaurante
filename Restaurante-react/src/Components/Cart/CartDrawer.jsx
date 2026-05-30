import PropTypes from 'prop-types';
import styles from './CartDrawer.module.css';

const formatCurrency = (value) => `$${value.toFixed(2)}`;

const CartDrawer = ({
  cartItems,
  isOpen,
  onToggle,
  onIncrease,
  onDecrease,
  onRemove,
  onClear,
}) => {
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const whatsappMessage = cartItems
    .map((item) => `${item.quantity} x ${item.name} - ${formatCurrency(item.price * item.quantity)}`)
    .join('\n');

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
    `Hola, quiero hacer este pedido:\n${whatsappMessage}\n\nTotal: ${formatCurrency(subtotal)}`
  )}`;

  return (
    <>
      <button type="button" className={styles.cartButton} onClick={onToggle}>
        Pedido
        {totalItems > 0 && <span>{totalItems}</span>}
      </button>

      {isOpen && <div className={styles.backdrop} onClick={onToggle} />}

      <aside className={`${styles.drawer} ${isOpen ? styles.open : ''}`}>
        <div className={styles.header}>
          <div>
            <h2>Tu pedido</h2>
            <p>{totalItems} productos</p>
          </div>
          <button type="button" className={styles.closeButton} onClick={onToggle}>
            X
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className={styles.emptyState}>
            <h3>Agrega tus platillos favoritos</h3>
            <p>Tu pedido aparecerá aquí con cantidades y total.</p>
          </div>
        ) : (
          <>
            <div className={styles.items}>
              {cartItems.map((item) => (
                <div className={styles.cartItem} key={item.id_food}>
                  <img src={item.image_url} alt={item.name} />
                  <div className={styles.itemInfo}>
                    <h3>{item.name}</h3>
                    <p>{formatCurrency(item.price)}</p>
                    <div className={styles.quantityControls}>
                      <button type="button" onClick={() => onDecrease(item.id_food)}>-</button>
                      <span>{item.quantity}</span>
                      <button type="button" onClick={() => onIncrease(item.id_food)}>+</button>
                    </div>
                  </div>
                  <button
                    type="button"
                    className={styles.removeButton}
                    onClick={() => onRemove(item.id_food)}
                  >
                    Quitar
                  </button>
                </div>
              ))}
            </div>

            <div className={styles.summary}>
              <div>
                <span>Subtotal</span>
                <strong>{formatCurrency(subtotal)}</strong>
              </div>
              <a className={styles.checkoutButton} href={whatsappUrl} target="_blank" rel="noreferrer">
                Enviar por WhatsApp
              </a>
              <button type="button" className={styles.clearButton} onClick={onClear}>
                Vaciar pedido
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
};

CartDrawer.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id_food: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image_url: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default CartDrawer;
