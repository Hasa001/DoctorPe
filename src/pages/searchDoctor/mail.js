import emailjs from '@emailjs/browser';
export function send() {
    const para = {
      to_name: "test",
      from_name:"hasa",
      email: "test@gmail.com",
      message: "hello testing",
    };
  
    const serviceID = "service_zqj7cp8";
    const tempID = "template_lmuyngf";
  
    emailjs
      .send(serviceID, tempID, para,{
        publicKey:import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      })
      .then((res) => {

        console.log(res);

      })
      .catch((err) => {
        console.log(err);
      });
  }