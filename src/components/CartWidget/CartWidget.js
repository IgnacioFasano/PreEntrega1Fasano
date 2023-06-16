import Cart from './assets/Cart.png'

const styles ={
    img: {
        padding: "15px",
        height: "80%",
    },
    span: {
        color: "white",
        paddingRight: 10,
    }

}
const CartWidget = ()=> {
    return (
        <div>
            <img src={Cart} alt="cart-widget" style={styles.img}/>
            <span style={styles.span}>0</span>
        </div>
    )

}

export default CartWidget