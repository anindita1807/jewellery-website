
import all_products from "../assets/all_products"
import Item from "../components/Item"
const Category = ({category, banner}) => {
  return (
    <section className="max_padded_container py-12 xl:py-28">
      <div>
        <div>
          <img src={banner} alt="" className="block my-7 mx-auto"/>

        </div>
        <div>
          
          <div className="flexBetween max-sm:p-4 gap-x-4 px-8 py-3 rounded-5xl ring-1 ring-slate-900/15 "> </div>
        </div>

        <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-flow-cols-3 xl:grid-flow-cols-4 gap-6'>
          {all_products.map((item)=>{
            if(category=== item.category){
              return <Item 
              key={item.id} 
              id={item.id} 
              image={item.image} 
              name={item.name} 
              new_price={item.new_price} 
              old_price={item.old_price} 
 />
            }
          })}
        </div>
      </div>

    </section>
  )
}

export default Category