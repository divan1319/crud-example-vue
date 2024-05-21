import {openDB} from "idb"

const dbPromise = openDB('my-db',1,{
    upgrade(db){
        const store = db.createObjectStore('my-store',{
            keyPath:'id',
            autoIncrement:true
        })

        store.createIndex('name','name')
        store.createIndex('product','product')
        store.createIndex('amount','amount')


    }
})

export const addItem = async(item)=>{
    const db = await dbPromise
    await db.add('my-store',item)
}

export const getItems = async()=>{
    const db = await dbPromise
    return await db.getAll('my-store')
}

export const clearItems = async()=>{
    const db = await dbPromise
    return await db.clear('my-store')
}