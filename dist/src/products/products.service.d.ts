import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { FindAllProductsDto } from './dto/find-all-products.dto';
export declare class ProductsService {
    private readonly productRepository;
    constructor(productRepository: Repository<Product>);
    findAll(query: FindAllProductsDto): Promise<Product[]>;
}
