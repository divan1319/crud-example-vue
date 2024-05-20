import { supabase } from "@/data/supabaseClient"

export const createProduct = async(data)=>{
    const bd = await supabase.from('products').insert([
        {
            name:data.name,
            price:data.price,
            amount:data.amount
        }
    ])

    if(bd.error){
        console.log('error al insertar datos',bd.error)
    }else{
     console.log('datos insertados',bd.data)   
    }
}

export const getProducts = async()=>{
    const {error,data} = await supabase.from('products').select('*')

    if(error){
        console.log('error al obtener los datos',error)
    }

    return data
}

export const updateProduct = async(data)=>{
    const {} = await supabase
    .from('products')
    .update(data)
    .eq('id',id)
}

export const deleteProduct = async(id)=>{
    const {error,data} = await supabase
    .from('products')
    .delete()
    .eq('id',id)

    if(error){
        console.log('error al eliminar el producto',error)
    }else{
        console.log('producto eliminado',data)
    }
}