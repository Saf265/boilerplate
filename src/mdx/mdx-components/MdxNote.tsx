import { Alert } from "@/components/ui/alert";
import { CircleAlert } from "lucide-react";
import { ReactNode } from "react";

export const MdxNote = ({ children }: { children: ReactNode }) => {
  return (
    <Alert className="flex items-center my-4 h-min">
      <CircleAlert size={12} />
      {children}
    </Alert>
  );
};
