import axios from 'axios'

export default{
    fetchNotes(method, data){
        if (method === "post"){
            return ajax('/api/notes/', method,{data})
        }else{
            return ajax('/api/notes/', 'get',{})
        }
       
    }
}

/**
 * @param url
 * @param method
 * @param params
 * @param data
 * @returns 
 */
function ajax(url,method,options){
    if (options !== undefined){
        var data = options
    }

    return new Promise((resolve, reject) => {
        axios ({
            url,
            method,
            data
        }).then(res => {
            resolve(res)
        }, res=>{
            reject(res)
        })
    })
}