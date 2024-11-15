import { ValidateProvider } from "@/providers/ValidateProvider";
import CBaseForm from "./form";

export const CForm = ({ children, ...props }: any) => {
  return (
    <ValidateProvider>
      <CBaseForm {...props}>{children}</CBaseForm>
    </ValidateProvider>
  );
};
