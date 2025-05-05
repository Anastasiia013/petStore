import Cart from "../../components/Cart/Cart";
import QuickLink from "../../layouts/QuickLink/QuickLink";

const CartPage = ({}) => {
    return (
        <main>
            <QuickLink to="/" text="Back to the store" title="Shopping Cart" />
            <Cart />
        </main>
    )
}

export default CartPage;