const env = process.env.MODE_ENV || 'dev'; 

const config = () => {
    switch(env){
      case 'dev' :
          return{
            bd_string: 'mongodb+srv://ausgra_admin:Mxvld3cDY9G9kOKL@clusterapi-kcvyt.mongodb.net/test?retryWrites=true',
            jwt_pass: 'torpedo',
            jwt_expires_in: '7d'       
          }

      case 'hml' :
           return{
             bd_string: '',
             jwt_pass: 'torpedo',
             jwt_expires_in: '7d'   
           }   

      case 'prod':
            return{
              bd_string: '',
              jwt_pass: 'torpedo',
              jwt_expires_in: '7d'   
            }
    }
}

console.log(`Iniciando a API em ambiente ${env.toLocaleUpperCase()}`);

module.exports = config();