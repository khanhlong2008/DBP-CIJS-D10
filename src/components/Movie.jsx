import { Component} from 'react'
import './../assets/main.css';
class Movie extends Component {
   
    constructor(props) { super(); this.state = { product: [] } }

    async componentDidMount() { 
        await fetch('https://60ae0d5e80a61f00173324bc.mockapi.io/products') 
        .then(res => res.json()) 
        .then((data) => { this.setState({ product: data }) }) 
        .catch(console.log) 
        
    }
    renderProduct = ()=> {
        const imgdefault  = "https://lh3.googleusercontent.com/Tv5UeL3K9mNR0iusP5wNRwZxJtgyxARUKddpKeMrgqb8FS0xJauJV2gddSDfiZPHxwJVWeHRHVFVB9qRcw=w500-rw"
        let product = this.state.product.map((data,index) =>
        <div  class="card">
            <img  src={`${data.image}` ||imgdefault } alt="" class="card-image"/>
            <div class="card-content">
                <div class="card-top">
                    <h3 class="card-title">Name: {data.name}</h3>
                    <h3 class="card-title">Error: {data.errorDescription}</h3>
                    <h3 class="card-title">SKU: {data.sku}</h3>
                    <h3 class="card-title">ID: {data.id}</h3>
                    <h3 class="card-title">Color: {data.color || 0}</h3>
                </div>     
            </div>
        </div>
        );
        return (product);
     }
    render() {
        return(
            <main>
            <div id="main" class="cards">
                {this.renderProduct()}
            </div>  
            </main> 
        )
    }
}
export { Movie }