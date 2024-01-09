import {AlertTriangle} from "lucide-react";
import CardWrapper from "./auth/card-wrapper";

function ErrorCard() {
  return (
    <CardWrapper
      headerLabel="Oops!, something went wrong"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="flex items-center justify-center w-full">
        <AlertTriangle className="text-destructive" />
      </div>
    </CardWrapper>
  );
}

export default ErrorCard;
