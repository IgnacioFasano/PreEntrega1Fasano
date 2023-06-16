import Container from 'react-bootstrap/Container';
const ItemListContainer = ({ greeting }) => {
    return (
        <Container>
            <h1>{greeting}</h1>
        </Container>
    )
}
export default ItemListContainer