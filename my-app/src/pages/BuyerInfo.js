// import React, {useState} from 'react';
// import {Modal, TextField, Button} from '@material-ui/core';
// import {makeStyles} from '@material-ui/core/styles';

// const useStyles = makeStyles((theme)=>({
//     modal:{
//         position: 'absolute',
//         width: '400',
//         backgroundColor: 'white',
//         border: '2px solid white',
//         boxShadow: theme.shadows[5], 
//         padding: '16px 32px 24px',
//         top:'50%',
//         left:'50%',
//         transform: 'translate(-50%, -50%)',
//     },
//     texfield: {
//         width: '100%',
//     }
// }))
// const BuyerInfo = () => {
//     const styles = useStyles();
//     const [modal,setModal] = useState(false);

//     const abrirCerrarModal =()=>{
//         setModal(!modal);
//     }

//     const body = (
//         <div className={styles.modal}>
//             <div>
//                 <h2>Formulario</h2>
//             </div>
//         <TextField label='Nombre' className={styles.texfield}/>
//         <br/>
//         <TextField label='Apellido' className={styles.texfield}/>
//         <br/><br/>
//         <div align='right'>
//         <Button>Enviar</Button>
//         <Button onClick={()=>abrirCerrarModal()}>Cancelar</Button>
//         </div>
//         </div>
//     )
//   return (
//     <div>
//         <Button onClick={()=>abrirCerrarModal()}></Button>
//         <Modal>
//             open={modal};
//             onClose={abrirCerrarModal}
//             {body}
//         </Modal>
//     </div>
//   )
// }

// export default BuyerInfo