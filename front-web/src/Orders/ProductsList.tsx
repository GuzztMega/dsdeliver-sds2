import { checkIsSelected } from "./helpers";
import ProductCard from "./ProductCard";
import { Product } from "./types";

type Props = { 
  product : Product[];
  selectedProducts: Product[];
  onSelectProduct: (product: Product) => void;
}

function ProductsList({ product, selectedProducts, onSelectProduct } : Props){
  return (
      <div className="orders-list-container">
          <div className="orders-list-items">
            { product.map(product => (
              <ProductCard 
                key = { product.id } 
                product = { product }
                onSelectProduct = { onSelectProduct }
                isSelected={checkIsSelected(selectedProducts, product)}
              />
            ))}
          </div>
      </div>            
  )
}

export default ProductsList;