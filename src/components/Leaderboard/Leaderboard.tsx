import React, { useEffect, useState } from 'react'
import { UserAuth } from '../../context/AuthContext';
import { getUserInfo } from '../../firebase';
import "./leaderboard.css"


const Leaderboard = () => {

    const [userInfo, setUserInfo] = useState<any>()
    const {points} = UserAuth()

    useEffect(() => {
        async function fetchData() {
          const data = await getUserInfo();
          setUserInfo(data);
        }
        fetchData();
      }, [points]);

  
      function compareScores(b: any, a: any) {
        return a.score - b.score;
      }




  return (
    <>
        <div>
            <h1>PLAYER INFO</h1>
        {userInfo? 
        userInfo.sort(compareScores).map((user: any) => (
          <div className="leaderboardGeneral" key={user.userinfo}>
            <h1>Name: {user.googleUserName}</h1>
            <h1>Wins: {user.wins}</h1>
            <h1>Looses: {user.looses}</h1>
            <h1>Score: {user.score}</h1>
  
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