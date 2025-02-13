import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductPrice from "@/components/ui/shared/product/product-price";
import ProductImages from "@/components/ui/shared/product/products-images";
import { getProductBySlug } from "@/lib/actions/product.action";
import { notFound } from "next/navigation";

export default async function ProductDetailsPage(props: { params: Promise<{ slug: string }> }) {
    const { slug } = await props.params;
    const product = await getProductBySlug(slug);
    if (!product) return notFound();

    return (
        <section className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                
                {/* Product Images */}
                <div className="col-span-1 flex justify-center">
                    <div className="w-full h-96 bg-gray-100 rounded-lg flex justify-center items-center shadow-md">
                        {/* Placeholder for Image */}
                        {/* <span className="text-gray-400">Product Image</span> */}
                        <ProductImages images={product.images} />
                    </div>
                </div>

                {/* Product Details */}
                <div className="col-span-1 flex flex-col gap-6">
                    <div>
                        <Badge variant="outline" className="text-gray-600">{product.category}</Badge>
                        <h1 className="text-2xl font-bold text-gray-900 mt-2">{product.name}</h1>
                        <p className="text-gray-500">{product.brand}</p>
                        <p className="text-yellow-500 mt-1">
                            ⭐ {product.rating} / 5 ({product.numReviews} Reviews)
                        </p>
                    </div>

                    {/* Price & Stock */}
                    <div className="flex items-center gap-4">
                        <ProductPrice 
                            price={Number(product.price)} 
                            className="text-xl font-semibold text-green-700"
                        />
                        {product.stock > 0 ? (
                            <Badge className="bg-green-100 text-green-700">In Stock</Badge>
                        ) : (
                            <Badge className="bg-red-100 text-red-700">Out of Stock</Badge>
                        )}
                    </div>

                    {/* Description */}
                    <div>
                        <h2 className="font-semibold text-gray-800">Description</h2>
                        <p className="text-gray-600 leading-relaxed">{product.description}</p>
                    </div>
                </div>

                {/* Action Section (Moved to the Right) */}
                <div className="col-span-1">
                    <Card className="shadow-md p-5">
                        <CardContent className="space-y-4">
                            <div className="flex justify-between items-center">
                                <p className="text-gray-700 font-medium">Price</p>
                                <ProductPrice price={Number(product.price)} className="font-semibold text-gray-900"/>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-gray-700 font-medium">Status</p>
                                {product.stock > 0 ? (
                                    <Badge variant="outline" className="text-green-700 border-green-700">In Stock</Badge>
                                ) : (
                                    <Badge variant="destructive">Out of Stock</Badge>
                                )}
                            </div>
                            {product.stock > 0 && (
                                <Button variant="default" className="w-full py-3 text-lg">🛒 Add to Cart</Button>
                            )}
                        </CardContent>
                    </Card>
                </div>

            </div>
        </section>
    );
}
