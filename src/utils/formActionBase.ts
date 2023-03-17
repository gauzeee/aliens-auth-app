import { validateFields } from "@/utils/validateFields";
import { redirect } from "react-router-dom";
import { ActionFunctionArgs } from "react-router";

type BaseActionProps = {
  redirectPath: string;
  submitFunction?: PromiseLike<void>;
};

export const formActionBase =
  (props: BaseActionProps) =>
  async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    const errors = validateFields(updates);
    if (Object.keys(errors).length) {
      return errors;
    }
    return redirect(props.redirectPath);
  };
