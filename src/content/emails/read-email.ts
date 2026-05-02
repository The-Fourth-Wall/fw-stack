import type {Email} from "@models";
import maintenance_page_html from "./maintenance-page.html?raw";

const emails: Record<Email, string> = {
  "maintenance-page.html": maintenance_page_html,
};

type Props = {
  file_path: Email;
};

export function read_email({file_path}: Props) {
  const email = emails[file_path];
  if (!email) {
    throw new Error(`Email template not found: ${file_path}`);
  } else {
    return email;
  }
}
