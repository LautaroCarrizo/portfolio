import { Cover } from "@/components/Cover/Cover";
import ContactComponent from "@/components/ContactComponent";
import Transition from "@/components/transition";
function Contact() {
  return (
    <div className="h-full bg-light">
      <Transition/>
      <Cover/>
      <ContactComponent/>
    </div>
  );
}

export default Contact;
