import {Button, Column, InputField, Row, Spacer} from "@atoms";
import {Form} from "radix-ui";
import {useState} from "react";

type Props = {
  cta_label: string;
};

export const SignInForm = ({cta_label}: Props) => {
  const [disabled, set_disabled] = useState(false);

  return (
    <Form.Root
      action="/auth/signin"
      method="post"
      onSubmit={_ => {
        set_disabled(true);
      }}>
      <Form.Field name="email">
        <Column>
          <Row style={{justifyContent: "space-between"}}>
            <Form.Label>Email</Form.Label>
          </Row>
          <Form.Control asChild>
            <InputField type="email" placeholder="name@mail.com" required />
          </Form.Control>
        </Column>
      </Form.Field>

      <Spacer size={2} />

      <Form.Submit asChild>
        <Button
          label={cta_label}
          type="submit"
          style={{width: "100%"}}
          disabled={disabled}
        />
      </Form.Submit>
    </Form.Root>
  );
};
