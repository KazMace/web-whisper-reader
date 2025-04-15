
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

export const ContactInformationCard = () => {
  const isMobile = useIsMobile();
  
  return (
    <Card className="shadow-elegant">
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex items-start gap-3">
            <div className="bg-primary/10 p-3 rounded-full">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium text-primary mb-1">Location</h4>
              <p className="text-muted-foreground">
                Morchard Bishop, Devon<br />
                (Specific location details provided when booking)
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="bg-primary/10 p-3 rounded-full">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium text-primary mb-1">Email</h4>
              <p className="text-muted-foreground">
                <a 
                  href="mailto:Christina_Hutchings@hotmail.com" 
                  className="hover:text-primary transition-colors"
                >
                  Christina_Hutchings@hotmail.com
                </a>
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="bg-primary/10 p-3 rounded-full">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium text-primary mb-1">Working Hours</h4>
              <p className="text-muted-foreground">
                Tuesday, Wednesday & Thursday<br />
                9:30am - 7pm
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="bg-primary/10 p-3 rounded-full">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium text-primary mb-1">Phone</h4>
              <p className="text-muted-foreground">
                <a 
                  href="tel:+447548972668" 
                  className="hover:text-primary transition-colors"
                >
                  0754 897 2668
                </a>
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
