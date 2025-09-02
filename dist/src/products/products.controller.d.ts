import { ProductsService } from './products.service';
import { FindAllProductsDto } from './dto/find-all-products.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAll(query: FindAllProductsDto): Promise<import("./entities/product.entity").Product[]>;
}
