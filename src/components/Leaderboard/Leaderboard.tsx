import React, { useEffect, useState } from 'react'
import { UserAuth } from '../../context/AuthContext';
import { getUserInfo } from '../../firebase';
import "./leaderboard.css"
import { MdLeaderboard } from 'react-icons/md';
import {RxAvatar} from "react-icons/rx"




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


    

      const keyword = user.uid


     

     if (user && usersInfo){
        const userLogued = usersInfo.filter((userData: any) =>
        userData.id.toLowerCase().includes(keyword.toLowerCase()) 
        )
  
      }
     
     
    
  return (
    <>
        <div className='dataContainer__header'>
            <MdLeaderboard className='icon'/>
            <h1>USER LEADERBOARD</h1>
          </div>
        <div className='dataContainer'>
          

        <div className='dataReference'>

          <span>Name</span>
          <span>Wins</span>
          <span>Looses</span>
          <span>Score</span>

        </div>

    


      {usersInfo && user? 
      usersInfo.filter((userData: any) =>
      userData.id.toLowerCase().includes(keyword.toLowerCase())
      ).map((filteredData: any) => 
      <div className="playerLogued" key={filteredData.id}>

        <div className="avatarLeaderboard">
          <img src={avatarFromDB}/>
        </div>
        <span>YOU</span>
        <span>{filteredData.wins}</span>
        <span>{filteredData.looses}</span>
        <span>{filteredData.score}</span>
      </div>
      )
      : null
      }
 
        {usersInfo? 
        usersInfo.sort(compareScores).map((users: any) => (
          <div className="playerdata" key={users.userinfo}>
            <span>
              {users.avatar? 
              <div className='avatarLeaderboard'>
                <img className='' src={users.avatar}/>
              </div>
              
              :
              <RxAvatar className='guestLeaderboard'/>

              }
              
            </span>
            <span>{users.googleUserName}</span>
            <span>{users.wins}</span>
            <span>{users.looses}</span>
            <span>{users.score}</span>
  
          </div>
        )) : <p>Loading...</p>
    
    }


      
    </div>

    </>
  )
}

export default Leaderboard






/* En resumen, lo que se está haciendo es ordenar el arreglo userInfo según el valor score de cada objeto user antes de renderizar los elementos en el mapa.

La función sort() es una función de JavaScript que se utiliza para ordenar los elementos de un arreglo. Por defecto, la función sort() ordena los elementos de un arreglo en orden alfabético (si los elementos son cadenas de texto) o en orden numérico (si los elementos son números), pero también se puede personalizar la forma en que se realiza la ordenación al pasar una función de comparación como argumento.

En este caso, la función de comparación que se está pasando como argumento es la función compareScores, que compara el valor score de dos objetos a y b y devuelve un número que indica el orden relativo entre ellos. Si el número es negativo, significa que a debe ser ordenado antes de b, si es positivo, significa que b debe ser ordenado antes de a, y si es cero, significa que a y b son iguales en cuanto al valor score y no importa el orden relativo.

La función compareScores toma dos parámetros a y b, que corresponden a dos objetos user del arreglo userInfo. Dentro de la función, se accede a los valores score de los objetos a y b y se restan para obtener la diferencia entre ellos. Si la diferencia es negativa, se devuelve un número negativo, lo que significa que a debe ser ordenado antes de b. Si la diferencia es positiva, se devuelve un número positivo, lo que significa que b debe ser ordenado antes de a. Y si la diferencia es cero, se devuelve 0, lo que significa que a y b son iguales y no importa el orden relativo entre ellos.

Finalmente, el resultado de la función sort() se pasa al método map() para renderizar cada elemento del arreglo ordenado según el valor score. De esta manera, se obtiene una lista de usuarios ordenados por su puntuación (score) en orden ascendente. */