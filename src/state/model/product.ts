export default interface Product{
    id: number;
    title: string;
    price: number;
    rating: {
        rate: number;
        count: number;
    }
}
