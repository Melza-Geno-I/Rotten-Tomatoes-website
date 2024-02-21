
export default function({$axios}){
    const errorHandler = (error) =>{
        console.log('Error->',error)
    }
    const onRequesthandler = (config) =>{ 
        console.log(config);
        config.params = {
            api_key:process.env.apiKey
        }
        console.log('making request to '+ config.url);
        return config
    }
    $axios.onRequest(onRequesthandler)
    $axios.onError(errorHandler)
    $axios.setBaseURL(`${process.env.baseUrl}`)
    console.log($axios);
}