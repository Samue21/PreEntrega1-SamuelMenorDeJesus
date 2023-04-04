import "./Loading.scss";

export const Loading = () => {
  return (
    <center className="content-loading">
      <h2>Cargando...</h2>
      <div className="loading">
        <div className="loading__spinner"></div>
      </div>
    </center>
  );
};

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
