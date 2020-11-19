  
import styled from "styled-components";

const Estilos = styled.div`
.styled{
   width: 100%;
   height:15vh;
    background-color: #272D2D;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    }
    

.headerstyled{
    width:80%;
    margin: 0 auto;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
}

 .titulos{
    width:30%;
    color: white;
    }

.ahref{
   text-decoration:none;
   color:white;
   margin-left: 1em;
}



 h1{
    text-align:right;
    color: white;
 }

 .sesion{
    width:50%;
    text-align:right;
    margin-top:3em;
 }
`

export { Estilos };