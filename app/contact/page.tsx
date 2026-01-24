import styles from "./page.module.css";
import HubSpotForm from "@/app/_components/HubSpotForm";

export default function Contact() {
  const portalId = process.env.HUBSPOT_PORTAL_ID || "244667330";
  const formId =
    process.env.HUBSPOT_FORM_ID;

  return (
    <div className={styles.container}>
      <p className={styles.text}>
        お問い合わせは、以下のフォームからお願いいたします。
      </p>
      <HubSpotForm portalId={portalId} formId={formId} />
    </div>
  );
}
