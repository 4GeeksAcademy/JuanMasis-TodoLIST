import React, {useState} from "react";
export const Todolist =()=>{
//Creamos estados para actualizar las tareas y la lista
    const [tarea, setTarea] = useState ("")
    const [lista, setLista] = useState ([])

//Esta funcion escucha el cambio dentro del input.
    const agregar=(e)=>{
        setTarea(e.target.value)
    }
// Esta funcion escucha la tecla ENTER y agrega la tarea a mi lista.
    const agregarALaLista=(e)=>{
        //Esto verifica se la tecla es ENTER.
        if(e.key==="Enter"){
            //Esto verifica que no se envie una tarea vacia.
            if(tarea.trim()==""){
                return
            }
            setLista ([...lista,tarea])
            //Esto limpia el formulario.
            setTarea("")
        }
    }
    //El filtro es que muestra todos los elementos que no sean el que se le dio click a la x.
    const eliminarTarea = (paranIndex) =>{
        let elementos = lista.filter((iten, index)=>index !== paranIndex)
        setLista(elementos)
    }
    return(
        <>
           <h1>To do List </h1>
           <div class="input-group flex-nowrap">
              <input type="text" class="form-control" placeholder="Agregar Tarea" aria-label="Username" 
              aria-describedby="addon-wrapping" value={tarea} onChange={agregar} onKeyDown={agregarALaLista}/>
           </div>

           <ul>
               {lista.map((iten, index)=>(
               
               <li key = {index}>{iten} <span onClick={() => eliminarTarea(index)}>x</span></li>
               )
               )
               }
               
           </ul>

           <p>{lista.length} iten left</p>

        </>
    )
}


