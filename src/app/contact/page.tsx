import { Cover } from "@/components/Cover/Cover";
import ContactComponent from "@/components/ContactComponent";
import {TransitionComponent} from "@/components/Transition/Transition";
function Contact() {
  return (
    <div className="h-full bg-light"> 
      <Cover/>
      <TransitionComponent/>
      <ContactComponent/>
    </div>
  );
}

export default Contact;
