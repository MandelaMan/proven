import ReactWhatsapp from "react-whatsapp";

const WhatsAppChat = () => {
  return (
    <div
      style={{
        position: "fixed",
        width: "60px",
        height: "60px",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25d366",
        color: "#FFF",
        borderRadius: "50px",
        textAlign: "center",
        fontSize: "30px",
        zIndex: 21474836478,
      }}
    >
      {/* <ReactWhatsapp
        number="+25769937003"
        message="How can we help you today?"
        style={{
          backgroundColor: "transparent",
          border: "0 none",
        }}
      >
        <img src="/images/whatsapp.png" alt="icon" />
      </ReactWhatsapp> */}
    </div>
  );
};

export default WhatsAppChat;
