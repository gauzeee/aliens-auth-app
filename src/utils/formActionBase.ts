import { validateFields } from "@/utils/validateFields";
import { redirect } from "react-router-dom";
import { ActionFunctionArgs } from "react-router";

type BaseActionProps<T, K> = {
  redirectPath: string;
  submitFunction?: (data: K) => Promise<T>;
};

export const formActionBase =
  <T, K>(props: BaseActionProps<T, K>) =>
  async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    const errors = validateFields(updates);
    if (Object.keys(errors).length) {
      return errors;
    } else {
      if (props.submitFunction) {
        try {
          await props.submitFunction(updates as K);
        } catch (e) {
          if (typeof e === "string") {
            return JSON.parse(e);
          } else {
            console.error(e);
          }
        }
        return redirect(props.redirectPath);
      }
    }
  };
