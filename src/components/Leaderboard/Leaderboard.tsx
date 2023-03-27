import React, { useEffect, useState } from 'react'
import { UserAuth } from '../../context/AuthContext';
import { getUserInfo } from '../../firebase';
import "./leaderboard.css"
import { MdLeaderboard } from 'react-icons/md';
import {RxAvatar} from "react-icons/rx"
import {ColorRing} from 'react-loader-spinner'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'




const Leaderboard = () => {

    const [usersInfo, setUsersInfo] = useState<any>()
    const {points, user, avatarFromDB} = UserAuth()

    useEffect(() => {
        async function fetchData() {
          const data = await getUserInfo();
          setUsersInfo(data);
        }
        fetchData();
      }, [points]);

  
      function compareScores(b: any, a: any) {
        return a.score - b.score;
      }


    

      
      const keyword = user?.uid || null;

     

      if (user && usersInfo){
        
        const userLogued = usersInfo.filter((userData: any) =>
        userData.id.toLowerCase().includes(keyword.toLowerCase()) 
        )
      }


      
     
    

      
     
     
    
  return (
  
    <section className='leaderboard'>

    
    <div className='dataContainer__header'>
      <MdLeaderboard className='icon'/>

      <h1>USER LEADERBOARD</h1>

    </div>

    <table className='leaderboardContainer'>
       
        
          

        <thead className='dataReference'>

          <tr>
            <th>
            {/* <span className='blankSpace'></span> */}
            <span>Avatar</span>
            </th>

            <th>
              <span>Name</span>
            </th>

            <th>
              <span>Won</span>
            </th>

            <th>
              <span>Lost</span>
            </th>

            <th>
              <span>Score</span>
            </th>
          </tr>
        
        </thead>

    

      <tbody>
       {usersInfo && user? 
      usersInfo.filter((userData: any) =>
      userData.id.toLowerCase().includes(keyword.toLowerCase())
      ).map((filteredData: any) => 
      <tr className="playerLogued" key={filteredData.id}>

        {avatarFromDB ?
         <td className='avatarLeaderboard'>
          <img src={avatarFromDB}/>
        </td>
        :
        <td className='guestLeaderboardContainer'>
          <RxAvatar className="guestLeaderboardIcon"/>
        </td>
        }
    

        <td>YOU</td>
        <td>{filteredData.wins}</td>
        <td>{filteredData.looses}</td>
        <td>{filteredData.score}</td>
      </tr>
      )
      :
      null
      }
         

      
        {usersInfo? 
        usersInfo.sort(compareScores).map((users: any) => (
          <tr className="playerdata" key={users.userinfo}>
            <>
              {users.avatar? 
              <td className='avatarLeaderboard'>
                <img src={users.avatar}/>
              </td>
      
              :
              <td className='guestLeaderboardContainer'>
                <RxAvatar className="guestLeaderboardIcon"/>
              </td>
              

              }

              
              
            </>
            <td>{users.googleUserName.split(' ').slice(0, 2).join(' ')}</td>
            <td>{users.wins}</td>
            <td>{users.looses}</td>
            <td>{users.score}</td>
  
          </tr>
        )) : 

         <div className='loaderLeaderboard'>
          <ColorRing 
          visible={true}
         
          height="150"
          width="150"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
    

    </div> 
    
/* <>
    <Skeleton />
    <Skeleton count={5} />
   
</> */
    
    } 

 
    
      </tbody>
    </table>
  
    </section>
  )
}

export default Leaderboard






/* En resumen, lo que se está haciendo es ordenar el arreglo userInfo según el valor score de cada objeto user antes de renderizar los elementos en el mapa.

La función sort() es una función de JavaScript que se utiliza para ordenar los elementos de un arreglo. Por defecto, la función sort() ordena los elementos de un arreglo en orden alfabético (si los elementos son cadenas de texto) o en orden numérico (si los elementos son números), pero también se puede personalizar la forma en que se realiza la ordenación al pasar una función de comparación como argumento.

En este caso, la función de comparación que se está pasando como argumento es la función compareScores, que compara el valor score de dos objetos a y b y devuelve un número que indica el orden relativo entre ellos. Si el número es negativo, significa que a debe ser ordenado antes de b, si es positivo, significa que b debe ser ordenado antes de a, y si es cero, significa que a y b son iguales en cuanto al valor score y no importa el orden relativo.

La función compareScores toma dos parámetros a y b, que corresponden a dos objetos user del arreglo userInfo. Dentro de la función, se accede a los valores score de los objetos a y b y se restan para obtener la diferencia entre ellos. Si la diferencia es negativa, se devuelve un número negativo, lo que significa que a debe ser ordenado antes de b. Si la diferencia es positiva, se devuelve un número positivo, lo que significa que b debe ser ordenado antes de a. Y si la diferencia es cero, se devuelve 0, lo que significa que a y b son iguales y no importa el orden relativo entre ellos.

Finalmente, el resultado de la función sort() se pasa al método map() para renderizar cada elemento del arreglo ordenado según el valor score. De esta manera, se obtiene una lista de usuarios ordenados por su puntuación (score) en orden ascendente. */