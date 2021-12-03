import { useLatestProductsQuery } from "../../generated/graphql"

  const LatestProducts = () => {
    const { data, loading, error } = useLatestProductsQuery();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
    if (data) {
        const latestProducts = data.products.edges || [];
        return ( 
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 style={{margin: "2rem 0", fontSize: "25px"}}>Latest Products</h1>
    
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {latestProducts.map(({ node: { id, name, description, thumbnail }}) => (
                <a key={id} href="#" className="group">
                  <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={thumbnail.url}
                      className="w-full h-full object-center object-cover group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">{JSON.parse(description).blocks[0].data.text}</p>
                </a>
              ))}
            </div>
        </div>
      </div>
    )
  }
}

export default LatestProducts