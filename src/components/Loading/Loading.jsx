export const Loading = () =>{

    return <center><h2>Cargando...</h2></center>

 
}



export const MessageIdcompra = ({ showMessageId, setShowMessageId }) => {
  useEffect(() => {
    if (showMessageId) {
      setTimeout(() => {
        setShowMessageId(false);
      }, 5000); // el mensaje se oculta después de 5 segundos
    }
  }, [showMessageId, setShowMessageId]);

  return (
    <div className={showMessageId ? "message-visible" : "message-hidden"}>
      Su ID de orden es: {showMessageId}
    </div>
  );
};







