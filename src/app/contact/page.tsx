import { Cover } from "@/components/Cover/Cover";
import ContactComponent from "@/components/ContactComponent";
import {TransitionComponent} from "@/components/Transition";
function Contact() {
  return (
    <div className="h-full bg-light">
      <TransitionComponent/>
      <Cover/>
      <ContactComponent/>
    </div>
  );
}

export default Contact;
